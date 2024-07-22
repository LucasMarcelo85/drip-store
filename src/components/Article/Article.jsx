import "./Article.css";
import Pe from "./../../../public/svgs/Laye 1.svg";

export function Article() {
    return (
        <article>

            <div className="oferta">
                <img src={Pe} alt="tenis" />
            </div>

            <div> <table id="pe">
                <tr>
                    <li><strong>Oferta especial</strong>
                        <li><h1>Air Jordan edição de colecionador</h1> </li>
                        <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque doloribus nulla sapiente. Ducimus distinctio quis ipsum aperiam accusamus tenetur doloribus?</p></li></li>
                    <li><button><a href="#">Ver Oferta</a></button></li>
                </tr>
            </table></div>
        </article>


    )
}