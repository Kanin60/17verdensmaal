import { Header } from '../Header/Header'
import { Nav } from '../Nav/Nav'
import { Section1 } from '../Section1/Section1'
import { Section2 } from '../Section2/Section2'
import { Section3 } from '../Section3/Section3'
import { Section4 } from '../Section4/Section4'
import { Footer } from '../Footer/Footer'

export const MainPage = () => {
    return (
        <>
        <Header />
        <Nav />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
        </>
    )
}
/* 
// Import alle her:
import { Nav } from '../Nav/Nav'
import { Header } from '../Header/Header'
import { Card } from '../Cards/Cards'
import { Section1 } from '../Section1/Section1'
import { Section2 } from '../Section2/Section2'
import { Footer } from '../Footer/Footer'

export const MainPage = () => {
    return(
        <>
        <Nav/>
        <Header />
        <Card />
        <Section1 />
        <Section2 />
        <Footer />
        </>
    )
} */