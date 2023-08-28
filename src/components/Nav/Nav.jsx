import style from './Nav.Module.scss'
import { Link,NavLink } from 'react-router-dom'

export const Nav = () => {

    const activeStyle = ({isActive, isPending}) => {return {color: isActive ? "white" : "", textDecoration: isActive ? "underline" : ""}}
    
    return (
        <nav className={style.navigation}> 
            <ul>
                <NavLink to="/" style={activeStyle}>VERDENSMÅLENE</NavLink>
                <NavLink to="/delmaalene" style={activeStyle}>DELMÅLENE</NavLink>
                <NavLink to="/udfordringer" style={activeStyle}>UDFORDRINGER</NavLink>
                <NavLink to="/kontakt" style={activeStyle}>KONTAKT</NavLink>
            </ul>
        </nav>
    )
}