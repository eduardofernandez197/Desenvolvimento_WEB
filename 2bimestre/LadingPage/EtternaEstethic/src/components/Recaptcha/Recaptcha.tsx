import { useRef, useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type SendStatus = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isChallengeCompleted, setChallengeCompleted] = useState(false);
  const [status, setStatus] = useState<SendStatus>("idle");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function isValidForm() {
    const isValidFields =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "";
    return isValidFields && isChallengeCompleted;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValidForm()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o formulário.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setChallengeCompleted(false);
      recaptchaRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  function handleCompleteChallenge(token: string | null) {
    if (!token) {
      setChallengeCompleted(false);
      return;
    }

    setChallengeCompleted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </label>
      </div>

      <div>
        <label>
          Mensagem:
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </label>
      </div>

      <div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
          onChange={handleCompleteChallenge}
          onExpired={() => setChallengeCompleted(false)}
        />
      </div>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>

      <div className="form-status" aria-live="polite">
        {status === "success" && <p>E-mail enviado com sucesso.</p>}
        {status === "error" && (
          <p>Preencha os campos, confirme o reCAPTCHA e tente novamente.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
