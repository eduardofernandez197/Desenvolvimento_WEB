type TestimonialCard = {
imagemPerfil: string;
testemunho: string;
nome: string;
cargo: string;
quantidadeEstrelas: string;
}
export default function TestimonialCard(props:TestimonialCard){
    const listaEstrelas = new Array(props.quantidadeEstrelas).fill(1);
    const listaEstrelasVazia = new Array(5 - props.quantidadeEstrelas).fill(1);
    
    return{
         </div>
            <div className="carousel-card">
              <img src={imagemPerfil} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                 {props:testemunho}
                </p>
              </span>
              <span className="rating">
               {listaEstrelas.map((item, indice)=>(
                <img key={indice} src{}alt="Imagem estrela" width={22} height={22}/>
               ))}
                <img key={indice} src{}alt="Imagem estrela vazia" width={22} />
               ))}
                  src={Star}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Ellon Ma</p>
                <p>CEO BING CHILLING</p>
              </span>
            </div>




    }
}
