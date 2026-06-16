import { useRef, useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isChallengeCompleted, setChallengeCompleted] = useState(false);
  const [message, setMessage] = useState("");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function isValidForm() {
    const isValidFields =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "";
    return isValidFields && isChallengeCompleted;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValidForm()) {
      setMessage("Preencha os campos e confirme o reCAPTCHA.");
      return;
    }

    setMessage("Formulário enviado com sucesso.");

    setFormData({ name: "", email: "" });
    setChallengeCompleted(false);
    recaptchaRef.current?.reset();
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
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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

      <button type="submit">Enviar</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default ContactForm;