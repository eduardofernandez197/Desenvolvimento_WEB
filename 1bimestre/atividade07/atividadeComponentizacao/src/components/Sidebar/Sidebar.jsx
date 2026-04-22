export default function Anside (props){
    return(

       <aside>
        <h3>{props.subtitulo}</h3>

        <ul>
            
        {props.posts.map((posts,index) => (
            <li key= {index} > {posts}</li>

        ))}

        </ul>

       </aside>
    )
}