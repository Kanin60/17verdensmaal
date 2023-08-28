import style from './Section3.module.scss'

import article4IMG from '../../assets/article4IMG.jpg'
import article5IMG from '../../assets/article5IMG.jpg'
import article6IMG from '../../assets/article6IMG.jpg'

export const Section3 = () => {
    return(
        <section id='section3' className={style.Section3}>
            <article><h2 >UDFORDRINGER</h2><h5><a href="#top">Tilbage til top</a></h5><p>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.</p></article>
            <figure><figcaption><h3>Vækst vs. bæredygtighed.</h3><p className={style.articlesP}>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.<br />Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.<br />De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p></figcaption><img src={article4IMG} alt="" /></figure>
            <figure className={style.figure2}><img src={article5IMG} alt="" /><figcaption><h3>Leave no-one behind.</h3><p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.<br />Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres først.<br />Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.<br />Med andre ord: “Leave No-One behind”.</p></figcaption></figure>
            <figure><figcaption><h3>Fattigdom og sult.</h3><p>Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.<br />Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.<br />En stor udfordring, men vi er allerede godt på vej.</p></figcaption><img src={article6IMG} alt="" /></figure>
        </section>
    )
}