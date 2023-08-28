import style from "./PageNotFound.module.scss"
import sadness from "../../assets/404/sadness.png"
import nervous from "../../assets/404/nervous.png"
import anger from "../../assets/404/anger.png"


export const PageNotFound = () => {

    return(
    <section className={style.PageNotFound}>
        <h1>Fejl 404</h1>
        <h2>Siden er ikke fundet</h2>
        <h5>Den er nok forsvundet i landtidshukommelsen</h5>
        <img src={sadness} alt="Sadness from Inside Out" />
        <img src={nervous} alt="Nervous from Inside Out" />
        <img src={anger} alt="Anger from Inside Out" />
    </section>
    )
    
}