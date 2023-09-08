import style from './Footer.module.scss'
import logo from '../../assets/Logo.png'

export const Footer = () => {
    return (
        <footer className={style.Footer}>
            <div>
                <ul>
                    <h5>Eksterne Links:</h5>
                    <li><a href="https://www.verdensmaalene.dk/" target="_blank">https://www.verdensmaalene.dk/</a></li>
                    <li><a href="https://www.globalgoals.org/" target="_blank">https://www.globalgoals.org/</a></li>
                    <li><a href="https://www.un.org/sustainabledevelopment/" target="_blank">https://www.un.org/sustainabledevelopment/</a></li>
                    <li><a href="https://worldslargestlesson.globalgoals.org/" target="_blank">https://worldslargestlesson.globalgoals.org/</a></li>
                    <li><a href="https://www.unenvironment.org/" target="_blank">https://www.unenvironment.org/</a></li>
                    <li><a href="https://ve.dk/klimaberegner/" target="_blank">https://ve.dk/klimaberegner/</a></li>
                </ul>
                <ul>
                    <h5>Ressourcer:</h5>
                    <li><a href="#" target="_blank">Bliver Verden Bedre</a></li>
                    <li><a href="#" target="_blank">Spotlight Rapport</a></li>
                </ul>
                <img src={logo} alt="" />
            </div>
        </footer>
    )
}