import LogoImg from '../../assets/ColorWheel.png'
import style from './Header.module.scss'

export const Header = () => {
    return(
        <header id='top' className={style.headerWrapper}>
            <div>
                <img src={LogoImg} alt="logo" />
                <hgroup>
                    <h1>THE GLOBAL GOALS</h1>
                    <h2>For sustainable Developement</h2>
                </hgroup>
            </div>
        </header>
    )
}