import style from './Nav.Module.scss'

export const Nav = () => {
    
    return (
        <nav className={style.navigation}> 
            <ul>
                <li><a href="#section1">VERDENSMÅLENE</a></li>
                <li><a href="#section2">DELMÅLENE</a></li>
                <li><a href="#section3">UDFORDRINGER</a></li>
                <li><a href="#section4">KONTAKT</a></li>
            </ul>
        </nav>
    )
}