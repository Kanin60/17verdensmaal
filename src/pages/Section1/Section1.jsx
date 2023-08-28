import style from './Section1.module.scss'

export const Section1 = (props) => {
    return(
        <>
        <section id='section1' className={style.section1}>
            <article><h2>{props.headline}</h2><p className={style.article1P}>På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen. <br />Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og planeten, vi bor på.</p></article>
            <div className={style.articleWrapper1}>
                <article className={style.article2}><h3 className={style.article23H}>Verdensmålene forpligter.</h3><p className={style.article23P}>Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god uddannelse og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og forbrug.<br /> Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats at opnå holdbare udviklingsresultater.</p></article>
                <article className={style.article3}><h3 className={style.article23H}>Verdensmålene gælder alle.</h3><p className={style.article23P}>Målene gælder alle lande - både rige og fattige - dvs. de er universelle. <br/>Udfordringer som social, økonomisk  marginalisering, stigende ulighed, fødevareusikkerhed,  ulig adgang til grundlæggende naturressourcer,og har regionale og globale konsekvenser.<br /> Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab.</p></article>
            </div>
        </section>
        </>
    )
}