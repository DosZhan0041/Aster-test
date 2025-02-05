import { NavLink } from "react-router-dom";
import './header.scss'

function Header() {
    return (
        <header>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='favorites'>Избранные</NavLink>
            <a href="https://www.linkedin.com/in/doszhan-ilyassov-563817300/">LinkedIn</a>
        </header>
    );
}

export default Header;