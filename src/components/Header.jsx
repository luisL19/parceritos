import React from 'react';
import Slider from 'react-slick';
import './Header.css'; // Importa los estilos aquí
import logo from '../assets/logo.png'; // Asegúrate de que esta ruta es correcta
import heroImage from '../assets/imagen_perro.jpeg'; // Asegúrate de que esta ruta es correcta
import guarderiaImage from '../assets/guarderia.png'; // Asegúrate de que esta ruta es correcta
import colegioImage from '../assets/colegio.png'; // Asegúrate de que esta ruta es correcta
import hotelImage from '../assets/hotel.png'; // Asegúrate de que esta ruta es correcta

const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Si no quieres mostrar flechas
        autoplay: true, // Activa el autoplay
        autoplaySpeed: 2000, // Tiempo en milisegundos entre cambios
    };

    return (
        <div>
            <header>
                <div className="container">
                    <nav id="nav">
                        <ul>
                            <img src={logo} alt="Logo" />
                            <li><a href="#nosotros">Nosotros</a></li>
                            <li><a href="#servicio">Servicios</a></li>
                            <li><a href="#ubicacion">Ubicación</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero">
                <div className="hero-text-container">
                    <h1>¡Sé Parte de Nosotros!</h1>
                    <p>Descubre un lugar donde el bienestar de tu mascota es nuestra prioridad. En Parceritos Fieles, nos dedicamos a ofrecer un entorno seguro y enriquecedor para que tu perro disfrute de cada momento, ya sea jugando con otros amigos peludos, aprendiendo nuevas habilidades o simplemente recibiendo el cuidado y cariño que se merece.
                    </p>
                    <p>Inicia Sesión o Regístrate</p>
                    <p>Tu mascota también tiene derecho a tener un buen bienestar</p>
                    <a href="/inicio_sesion" className="button">Entra Ahora</a>
                    <h4>Nuestras Redes Sociales</h4>
                    <div className="social-media">
                        <a href="https://www.instagram.com/guarderia_parceritos_fieles?igsh=eXBxaTIxbGg2NXpi" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=61555383941250" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.tiktok.com/@parceritosfieles?_t=8oLcvrq6wh3&_r=1" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src={heroImage} alt="Imagen de perro" />
                </div>
            </section>

             <section className="about" id="nosotros">
                <div className="container">
                     <div className="about-content">
                     <h2>Nosotros</h2>
                     <p>Bienvenidos a Parceritos Fieles, tu mejor opción para el cuidado de tu perro. Nos especializamos en brindar un ambiente seguro y acogedor donde tu mascota puede disfrutar de nuestros servicios de guardería, colegio y hotel.</p>
                     <p>En Parceritos Fieles, entendemos lo importante que es para ti el bienestar de tu perro. Por eso, ofrecemos un servicio de transporte para recoger a tu perrito y llevarlo a nuestras instalaciones, asegurándonos de que tenga una experiencia cómoda y sin estrés desde el primer momento.</p>
                     <p>Proporcionamos atención personalizada y actividades enriquecedoras para mantener a tu perro feliz, saludable y bien educado. Ya sea que necesites un lugar confiable para dejar a tu perro durante el día, una educación efectiva y divertida, o un hospedaje cómodo mientras estás fuera, Parceritos Fieles está aquí para ayudarte.</p>
                      <p>Confía en nosotros para cuidar a tu mejor amigo con el amor y la dedicación que se merece. ¡En Parceritos Fieles, tu perro es nuestra prioridad!</p>
               </div>
               </div>
                </section>


            <section className="services" id="servicio">
                <div className="container">
                    <h2>Servicios</h2>
                    <Slider {...settings} className="services-slider">
                        <div className="service">
                            <img src={guarderiaImage} alt="Guardería" />
                            <h3>Guardería</h3>
                            <p>En nuestra guardería, tu perro pasa el día jugando y socializando. Lo cuidamos y nos aseguramos de que esté feliz y seguro. ¡Trae a tu perro y deja que se divierta!</p>
                        </div>
                        <div className="service">
                            <img src={colegioImage} alt="Colegio" />
                            <h3>Colegio</h3>
                            <p>En nuestro colegio, enseñamos a tu perro a comportarse mejor. Usamos métodos amables y efectivos para que tu perro aprenda de manera divertida. ¡Ven y mejora la conducta de tu mascota!</p>
                        </div>
                        <div className="service">
                            <img src={hotelImage} alt="Hotel" />
                            <h3>Hotel</h3>
                            <p>En nuestro hotel, tu perro se queda en un lugar cómodo y seguro mientras tú estás fuera. Le damos atención las 24 horas del día para que esté feliz y tranquilo. ¡Viaja con la tranquilidad de que tu perro está bien cuidado!</p>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className="location" id="ubicacion">
                <div className="container">
                    <h2>Ubicación</h2>
                    <center>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7951.205551718149!2d-74.1458227!3d4.8380667!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTAnMjguNyJOIDc0wrAwOCc0Mi4yIlc!5e0!3m2!1ses!2sco!4v1721949617744!5m2!1ses!2sco"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </center>
                </div>
            </section>

            <section className="contact" id="contacto">
                <div className="container">
                    <h2>Contáctanos</h2>
                    <p>Comuníquese con nosotros:</p>
                    <div className="card">
                        <div className="card-body">
                            <span>
                                <i className="fa-solid fa-phone"><a href="tel:3103409688">3103409688</a></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
