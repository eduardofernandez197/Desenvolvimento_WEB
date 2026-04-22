export default function Article(props){

return(
     <article>
        <h2>{props.titulo}</h2>
        <p>{props.conteudo1}</p>
    
        <p>{props.conteudo2}</p>
    
        <figure>
            <img src={props.img} alt={props.descricao}/>
            <figcaption>{props.descricao}</figcaption>
        </figure>

        <time dateTime={props.data}>
            {props.dataFormatada}</time>

        </article>




)
}