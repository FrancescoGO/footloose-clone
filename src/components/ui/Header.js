
import React from 'react';
import companyLogo from '../../assets/images/company_logo.jpg';
export const Header = () => {

    let liActive = "";

    const liClassActive = (elements, elementValidator, option) => {

        elements.forEach((element) => {
            if (element.innerHTML === elementValidator) {
                (option === "active") ? element.classList.add(option) : element.classList.remove("active");
            }
        });

    }

    const addClass = (elementHTML, className) => {
        let element = document.querySelector(elementHTML);
        element.classList.add(className);
    }

    const removeClass = (elementHTML, className) => {
        let element = document.querySelector(elementHTML);
        element.classList.remove(className);
    }

    const menuItems = () => {
        let menu_items = document.querySelectorAll(".menu-main li");
        return menu_items;
    }

    const onMouseEnterLi = (e) => {
        addClass(".header-submenu","active-flex");
        liActive = e.target.outerText;
        liClassActive(menuItems(), liActive, "active");
    }

    const onMouseLeaveLi = (e) => {
        removeClass(".header-submenu","active-flex");
        liClassActive(menuItems(), liActive, "");
    }

    const onMouseEnterSubMenu = (e) => {
        addClass(".header-submenu","active-flex");
        liClassActive(menuItems(), liActive, "active");
    }

    const onMouseLeaveSubMenu = (e) => {
        removeClass(".header-submenu","active-flex");
        liClassActive(menuItems(), liActive, "");
    }

    return (
        <>
            <header>

                <div className="header-contact">
                    <a href="#">
                        <i className="fas fa-map-marker-alt"></i>
                        Tiendas
                    </a>
                    <p>
                        <i className="fas fa-phone-alt"></i>
                        Fono compras 017482402 / 936121553 / 989114786 / 968212785
                    </p>
                    <a href="#">
                        <i className="far fa-question-circle"></i>
                        Ayuda
                    </a>
                </div>

                <div className="header-face">
                    <a href="#">
                        <img src={companyLogo} alt="Logo Empresarial" />
                    </a>
                    <div className="face-options">
                        <p>
                            <a href="#">
                                <i className="far fa-user-circle fa-lg"></i>
                                Iniciar sesión / Registrarse
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                <i className="fas fa-shopping-cart fa-lg"></i>
                                Carrito
                            </a>
                            <span className="circle">0</span>
                        </p>
                        <a className="button" href="#">Únete al catálogo <br/>Footloose</a>
                    </div>
                </div>

                <div className="header-search">
                    <div className="search-container">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Encuentra + de 20 mil productos..." />
                    </div>
                </div>

                <div className="header-menu">
                    <ul className="menu-main">
                        <li
                            onMouseEnter={onMouseEnterLi}
                            onMouseLeave={onMouseLeaveLi}>MUJER
                        </li>
                        <li
                            onMouseEnter={onMouseEnterLi}
                            onMouseLeave={onMouseLeaveLi}>HOMBRE
                        </li>
                        <li
                            onMouseEnter={onMouseEnterLi}
                            onMouseLeave={onMouseLeaveLi}>NIÑOS
                        </li>
                        <li
                            onMouseEnter={onMouseEnterLi}
                            onMouseLeave={onMouseLeaveLi}>MARCAS
                        </li>
                        <li
                            onMouseEnter={onMouseEnterLi}
                            onMouseLeave={onMouseLeaveLi}>LO + NUEVO
                        </li>
                        <li
                            onMouseEnter={onMouseEnterLi}
                            onMouseLeave={onMouseLeaveLi}>SALE
                        </li>
                    </ul>
                    <div className="header-submenu"
                         onMouseEnter={onMouseEnterSubMenu}
                         onMouseLeave={onMouseLeaveSubMenu}>
                        <div className="submenu-container">
                            <a href="#">ACCESORIOS</a>
                            <ul className="submenu-main">
                                <li><a href="#">Carteras y Bolsos</a></li>
                                <li><a href="#">Billetera</a></li>
                                <li><a href="#">Lentes de Sol</a></li>
                                <li><a href="#">Maletas</a></li>
                                <li><a href="#">Maletín</a></li>
                                <li><a href="#">Mochilas</a></li>
                                <li><a href="#">Morral</a></li>
                                <li><a href="#">Pelota</a></li>
                                <li><a href="#">Tomatodo</a></li>
                                <li><a href="#">Vanite</a></li>
                            </ul>
                        </div>
                        <div className="submenu-container">
                            <a href="#">CALZADO</a>
                            <ul className="submenu-main">
                                <li><a href="#">Balerinas</a></li>
                                <li><a href="#">Botas</a></li>
                                <li><a href="#">Botines</a></li>
                                <li><a href="#">Mocasin</a></li>
                                <li><a href="#">Sandalias</a></li>
                                <li><a href="#">Slip</a>-on</li>
                                <li><a href="#">Zapatos</a></li>
                                <li><a href="#">Urbanas</a></li>
                                <li><a href="#">Zapatillas</a></li>
                            </ul>
                        </div>
                        <div className="submenu-container">
                            <a href="#">ROPA</a>
                            <ul className="submenu-main">
                                <li><a href="#">Buzos</a></li>
                                <li><a href="#">Casaca</a></li>
                                <li><a href="#">Joggers</a></li>
                                <li><a href="#">Pantalón</a></li>
                                <li><a href="#">Polera</a></li>
                                <li><a href="#">Leggins</a></li>
                                <li><a href="#">Polo</a></li>
                                <li><a href="#">Shorts</a></li>
                                <li><a href="#">Tank</a></li>
                                <li><a href="#">Tight</a></li>
                                <li><a href="#">Top</a></li>
                            </ul>
                        </div>
                        <div className="submenu-best-offers">
                            <a href="#">Mejores ofertas ► ► ►</a>
                        </div>
                    </div>
                </div>

                <div className="header-advertisements">
                    <a href="#"></a>
                </div>

            </header>
        </>
    )

}
