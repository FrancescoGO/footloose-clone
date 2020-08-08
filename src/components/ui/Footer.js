
import React from 'react'

// BANNER

import banner_tracking from '../../assets/images/banner_tracking.png';

// CARDS

import card_visa from '../../assets/images/cards-payments/visa.png';
import card_mastercard from '../../assets/images/cards-payments/mastercard.png';
import card_american_express from '../../assets/images/cards-payments/american_express.png';
import card_diners_club from '../../assets/images/cards-payments/diners_club.png';
import card_pago_efectivo from '../../assets/images/cards-payments/pago_efectivo.png';

export const Footer = () => {
    return (
        <>
            <footer>
                <section className="info-options-container">
                    <div className="option">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                            Compra online retira en tienda
                    </div>
                    <div className="option">
                        <i className="fas fa-truck fa-lg"></i>
                        <p>Delivery gratis desde S/ 199</p>
                    </div>
                    <div className="option">
                        <i className="far fa-credit-card fa-lg"></i>
                        <p>Paga con cualquier medio</p>
                    </div>
                    <div className="option">
                        <i className="fas fa-map-marker-alt fa-lg"></i>                                
                        <p>Seguimiendo de despacho</p>
                    </div>
                </section>
                <section className="tracking-container">
                    <img src={banner_tracking} alt="Banner de seguimiento"></img>
                    <div className="tracking-title">
                        <p>¡ Ingresa tu correo y empieza a recibir todas las <span>promociones</span> que tenemos para ti !
                        </p>
                    </div>
                    <div className="tracking-info">
                        <input type="email" placeholder="Ingrese su e-mail"></input>
                        <label><input type="radio" name="genre"/>M</label>
                        <label><input type="radio" name="genre"/>F</label>
                    </div>
                    <button>SUSCRIBIRME</button>
                    <div className="tracking-policy">
                        <label>
                            <input type="checkbox" /> Acepto la Política de protección de datos personales.
                        </label>
                    </div>
                </section>
                <section className="details-container">
                    <div className="details-aboutus">
                        <h4>SOBRE NOSOTROS</h4>
                        <ul>
                            <li><a href="#">Sobre footloose</a></li>
                            <li><a href="#">Trabaja con nosotros</a></li>
                            <li><a href="#">Ventas Corporativas</a></li>
                        </ul>
                    </div>
                    <div className="details-help">
                        <h4>AYUDAR Y SOPORTE</h4>
                        <ul>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Preguntas frecuentes</a></li>
                            <li><a href="#">Políticas para cambios y devoluciones</a></li>
                            <li><a href="#">Políticas de protección de datos personales</a></li>
                            <li><a href="#">Libro de reclamaciones</a></li>
                            <li><a href="#">Nuestras tiendas</a></li>
                            <li><a href="#">Revista tu boleta</a></li>
                            <li><a href="#">Formas de pago</a></li>
                            <li><a href="#">Envios</a></li>
                            <li><a href="#">Legales por camapaña</a></li>
                        </ul>
                    </div>
                    <div className="details-contact">
                        <h4>CONTÁCTANOS</h4>
                        <ul>
                            <li>
                                <i className="fas fa-shopping-cart fa-lg"></i>
                                Calle Vulcano 176 Ate, Lima - Perú
                            </li>
                            <li>atencionalcliente@footloose.pe</li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                01 7482402
                            </li>
                            <li>(Lunes a Sábados de 9:00am - 8:00pm)</li>
                        </ul>
                        <div className="details-payments">
                            <h4>Medios de pago</h4>
                            <div className="cards">
                                <img src={card_visa} alt="Tarjeta Visa"></img>
                                <img src={card_mastercard} alt="Tarjeta Mastercard"></img>
                                <img src={card_american_express} alt="Tarjeta American Express"></img>
                                <img src={card_diners_club} alt="Tarjeta Diners Club"></img>
                                <img src={card_pago_efectivo} alt="Tarjeta Pago Efectivo"></img>
                            </div>
                        </div>
                        <div className="details-socials">
                            <h4>Síguenos en nuestras redes sociales</h4>
                            <span>
                                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                            </span>
                            <span>
                                <a href="#"><i className="fab fa-youtube fa-2x"></i></a>
                            </span>
                            <span>
                                <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                            </span>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
