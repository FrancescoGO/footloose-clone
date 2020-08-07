import React from 'react'

// ANUNCIOS PRINCIPALES

import banner_canjea_vale30s from '../../assets/images/banner_canjea_vale30s.webp';
import banner_diversion_50calzado_ninos from '../../assets/images/banner_diversion_50calzado_ninos.webp';
import banner_zapatillas_50 from '../../assets/images/banner_zapatillas_50.gif';
import banner_invierno_40 from '../../assets/images/banner_invierno_40.webp';
import banner_accesorios_30 from '../../assets/images/banner_accesorios_30.webp';
import banner_nuevos_ingresos from '../../assets/images/banner_nuevos_ingresos.webp';

// ANUNCIOS

import advertisements_1 from '../../assets/images/advertisements-1.gif';
import advertisements_2 from '../../assets/images/advertisements-2.gif';

// MARCAS

import ma_footloose from '../../assets/images/brands/ma-footloose.webp';
import ma_r18 from '../../assets/images/brands/ma-r18.webp';
import ma_renzoenzini from '../../assets/images/brands/ma-renzorenzini.webp';
import ma_topmodel from '../../assets/images/brands/ma-topmodel.webp';
import ma_faena from '../../assets/images/brands/ma-faena.webp';
import ma_fresh from '../../assets/images/brands/ma-fresh.webp';
import ma_tmsport from '../../assets/images/brands/ma-tmsport.webp';
import ma_adidas from '../../assets/images/brands/ma-adidas.webp';
import ma_nike from '../../assets/images/brands/ma-nike.webp';
import ma_reebok from '../../assets/images/brands/ma-reebok.webp';
import ma_beirario from '../../assets/images/brands/ma-beirario.webp';
import ma_vizzano from '../../assets/images/brands/ma-vizzano.webp';
import ma_calimod from '../../assets/images/brands/ma-calimod.webp';
import ma_dauss from '../../assets/images/brands/ma-dauss.webp';
import ma_modare from '../../assets/images/brands/ma-modare.webp';
import ma_moleca from '../../assets/images/brands/ma-moleca.webp';
import ma_rider from '../../assets/images/brands/ma-rider.webp';
import ma_umbro from '../../assets/images/brands/ma-umbro.webp';
import ma_converse from '../../assets/images/brands/ma-converse.webp';
import ma_grendha from '../../assets/images/brands/ma-grendha.webp';
import ma_ipanema from '../../assets/images/brands/ma-ipanema.webp';
import ma_hitec from '../../assets/images/brands/ma-hitec.webp';
import ma_vans from '../../assets/images/brands/ma-vans.webp';
import ma_puma from '../../assets/images/brands/ma-puma.webp';

export const HomeScreen = () => {

    let position = 0;

    const addClass = (elementHTML, className) => {
        let element = document.querySelector(elementHTML);
        element.classList.add(className);
    }

    const sliderChangeAutomatic = () => {
        let root = document.documentElement;
        position -= 100;

        if(position === -600) {
            position = 0;
        }

        root.style.setProperty('--slider-position', position + "%");

        addClass('.slider ul','position');
    }

    const backwardClick = () => {
        clearInterval(myInterval);
        position += 100;

        if(position >= 100) {
            position = 0;
        }

        let root = document.documentElement;
        root.style.setProperty('--slider-position', position + "%");
        addClass('.slider ul','position');

        myInterval = setInterval(sliderChangeAutomatic, 4000);
    }

    const forwardClick = () => {
        clearInterval(myInterval);
        position -= 100;

        if(position <= -600) {
            position = 0;
        }

        let root = document.documentElement;
        root.style.setProperty('--slider-position', position + "%");
        addClass('.slider ul','position');

        myInterval = setInterval(sliderChangeAutomatic, 4000);
    }

    let myInterval = setInterval(sliderChangeAutomatic, 4000);    

    return (
        <>
            <main>
                <section className="slider-container">
                    <div className="slider">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={banner_canjea_vale30s} alt="Banner Canjea Vales de 30 Soles"></img>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={banner_diversion_50calzado_ninos} alt="Banner Diversion 50% Calzado Niños"></img>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={banner_zapatillas_50} alt="Banner Zapatillas 50%"></img>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={banner_invierno_40} alt="Banner Colección Invierno 40%"></img>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={banner_accesorios_30} alt="Banner Accesorios 30%"></img>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={banner_nuevos_ingresos} alt="Banner Nuevos Ingresos"></img>
                                </a>
                            </li>
                        </ul>
                        <div className="slider-direction">
                            <a  onClick={backwardClick}
                                href="#" 
                                className="direction-backward">
                                <i className="fas fa-angle-left fa-3x"></i>
                            </a>
                            <a  onClick={forwardClick}
                                href="#"
                                className="direction-forward">
                            <i className="fas fa-angle-right fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="advertisements-container">
                    <a href="">
                        <img src={advertisements_1} alt="Publicidad 1"/>
                    </a>
                    <a href="">
                        <img src={advertisements_2} alt="Publicidad 2"/>
                    </a>
                </section>
                <section className="slider-brand-container">
                    <div className="for_slick_slider mulltiple-items">
                        <div className="items">
                            <a href="#"><img src={ma_footloose} alt="Marca Footloose" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_r18} alt="Marca R18" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_renzoenzini} alt="Marca Renzoenzini" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_topmodel} alt="Marca Topmodel" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_faena} alt="Marca Faena" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_fresh} alt="Marca Fresh" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_tmsport} alt="Marca Tmsport" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_adidas} alt="Marca Adidas" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_nike} alt="Marca Nike" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_reebok} alt="Marca Reebok" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_beirario} alt="Marca Beirario" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_vizzano} alt="Marca Vizzano" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_calimod} alt="Marca Calimod" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_dauss} alt="Marca Dauss" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_modare} alt="Marca Modare" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_moleca} alt="Marca Moleca" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_rider} alt="Marca Rider" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_umbro} alt="Marca Umbro" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_converse} alt="Marca Converse" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_grendha} alt="Marca Grendha" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_ipanema} alt="Marca Ipanema" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_hitec} alt="Marca Hitec" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_vans} alt="Marca Vans" /></a>
                        </div>
                        <div className="items">
                            <a href="#"><img src={ma_puma} alt="Marca Puma" /></a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
