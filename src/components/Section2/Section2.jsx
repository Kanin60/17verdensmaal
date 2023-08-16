//STYLE
import style from './Section2.module.scss'
//IMAGES
import goal1 from '../../assets/Goals/goal1.png'
import goal2 from '../../assets/Goals/goal2.png'
import goal3 from '../../assets/Goals/goal3.png'
import goal4 from '../../assets/Goals/goal4.png'
import goal5 from '../../assets/Goals/goal5.png'
import goal6 from '../../assets/Goals/goal6.png'
import goal7 from '../../assets/Goals/goal7.png'
import goal8 from '../../assets/Goals/goal8.png'
import goal9 from '../../assets/Goals/goal9.png'
import goal10 from '../../assets/Goals/goal10.png'
import goal11 from '../../assets/Goals/goal11.png'
import goal12 from '../../assets/Goals/goal12.png'
import goal13 from '../../assets/Goals/goal13.png'
import goal14 from '../../assets/Goals/goal14.png'
import goal15 from '../../assets/Goals/goal15.png'
import goal16 from '../../assets/Goals/goal16.png'
import goal17 from '../../assets/Goals/goal17.png'
import goal18 from '../../assets/Goals/goal18.png'



export const Section2 = () => {
    return(
        <section id='section2' className={style.section2}>
            <figure>
                <figcaption>
                    <h3 >DELMÅLENE</h3><h5><a href="#top">Tilbage til top</a></h5><p>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.<br />Se eksempler på enkelte delmål her:</p>
                </figcaption>
                <div className={style.galleryWrapper}>
                    <div><img src={goal1} alt="" /></div>
                    <div><img src={goal2} alt="" /></div>
                    <div><img src={goal3} alt="" /></div>
                    <div><img src={goal4} alt="" /></div>
                    <div><img src={goal5} alt="" /></div>
                    <div><img src={goal6} alt="" /></div>
                    <div><img src={goal7} alt="" /></div>
                    <div><img src={goal8} alt="" /></div>
                    <div><img src={goal9} alt="" /></div>
                    <div><img src={goal10} alt="" /></div>
                    <div><img src={goal11} alt="" /></div>
                    <div><img src={goal12} alt="" /></div>
                    <div><img src={goal13} alt="" /></div>
                    <div><img src={goal14} alt="" /></div>
                    <div><img src={goal15} alt="" /></div>
                    <div><img src={goal16} alt="" /></div>
                    <div><img src={goal17} alt="" /></div>
                    <div><img src={goal18} alt="" /></div>
                </div>
                
            </figure>
        </section>
    )
}