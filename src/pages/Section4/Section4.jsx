import style from './Section4.module.scss'
import logo from '../../assets/unLogo.png'

export const Section4 = () => {
    return (
        <section id='section4' className={style.Section4}>
            <article><h2 className={style.article4H}>KONTAKT OS</h2><h5><a href="#top">Tilbage til top</a></h5><p className={style.article4P}>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:</p></article>
            <div>
                <img src={logo} alt="" />
            <form>
                <input type="text" placeholder='Indtast dit fulde navn' />
                <input type="email" placeholder='Indtast gyldig E-mail'/>
                <input type="number" placeholder='Indtast telefonnummer'/>
                <textarea name="msg" id="msg" cols="30" rows="10" placeholder='Evt. Besked'></textarea>
                <div>
                    <button>FORTRYD</button>
                    <button className={style.send}>SEND</button>
                </div>

            </form>
            </div>

        </section>
    )
}