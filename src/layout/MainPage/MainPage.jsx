import { Header } from '../../components/Header/Header'
import { Nav } from '../../components/Nav/Nav'
import { Footer } from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export const MainPage = () => {
    return (
        <>
            <Header />
            <Nav />
            
            <Outlet />
            <Footer />
        </>
    )
}
