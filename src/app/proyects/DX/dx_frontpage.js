import React, {useState} from 'react';
import logo from '../../img/dx/logo.png';
import juegosOlimpicos from '../../img/dx/juegos-olimpicos.jpg';
import f1 from '../../img/dx/f1.jpg';
import firpo from '../../img/dx/firpo.jpg';
import rally from '../../img/dx/rally.jpg';
import sorteo from '../../img/dx/sorteo-libertadores.jpg';
import tickets from '../../img/dx/tickets-rusia-mundial.jpg';



const Dx = () => {

  return (
  <div className="dx">

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <h1 className="h4">
          <img src={logo} width="35" className="d-inline-block align-center" alt=""/>            
          DeporteXtremo
        </h1>
      </a>
        
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Futbol <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">NBA</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Tenis</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Fórmula 1</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Boxeo</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">JJOO</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Moto GP</a>
          </li>
        </ul>
      </div>
    </nav>
    {/*<!--FIN HEADER-->*/}

    {/*<!--INICIO NOTICIAS DESTACADAS-->*/}

      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

          <figure className="carousel-item active">
            <img src={juegosOlimpicos} className="d-block w-100" alt="juegos olimpicos"/>
            <figcaption className="carousel-caption d-none d-md-block position-static bg-dark text-left px-3">
              <h2 className="h1">Paris y Los Angeles serán las próximas sedes de los juegos olímpicos</h2>
            </figcaption>
          </figure>

          <figure className="carousel-item">
            <img src={f1} className="d-block w-100" alt="formula 1"/>
            <figcaption className="carousel-caption d-none d-md-block position-static bg-dark text-left px-3">
              <h2 className="h1">Ricciardo marcó el ritmo en los libres de Azerbaiyán</h2>
            </figcaption>
          </figure>

          <figure className="carousel-item">
            <img src={rally} className="d-block w-100" alt="Rally"/>
            <figcaption className="carousel-caption d-none d-md-block position-static bg-dark text-left px-3">
              <h2 className="h1">En Córdoba arrancó la 1er etapa del 38° Rally de la Argentina</h2>
            </figcaption>
          </figure>
        </div>

          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
      </div>
      {/*<!--FIN NOTICIAS DESTACADAS-->*/}

      {/*<!--INICIO NOTICA #1-->*/}
      <section className="container">
        <article className="row">
          <figure className="col-12 col-md-3 col-lg-4">
            <img src={sorteo} alt="sorteo libertadores" className="img-fluid"/>
          </figure>

          <div className="col-12 col-md-9 col-lg-8">
            <a href="#" target="_blank"><h3>La tecnología llega a la actual edición de la Libertadores</h3></a>
            <cite>Publicado por <span className="autor">Joaquín Angeli</span></cite>
            <p>La Conmebol anunció la implementación del sistema VAR (asistencia arbitral por video) desde las semifinales de la actual Libertadores.</p>
          </div>
        </article>
      </section>
      {/*<!--FIN NOTICA #1-->*/}

      {/*<!--INICIO NOTICIA #2-->*/}
      <section className="container">
          <article className="row">
              <figure className="col-12 col-md-3 col-lg-4">
                  <img src={tickets} alt="sorteo libertadores" className="img-fluid"/>
              </figure>

              <div className="col-12 col-md-9 col-lg-8">
                  <a href="#" target="_blank"><h3>Comenzó la venta de entradas para el Mundial de Rusia 2018</h3></a>
                  <cite>Publicado por <span className="autor">Laura Smasnatta</span></cite>
                  <p>Hoy se abrió la venta al público de tickets, a través del sitio oficial de la FIFA. El proceso se dividirá en dos partes y los espectadores deberán solicitar una tarjeta de hincha 'Fan ID'</p>
              </div>
          </article>
      </section>
      {/*<!--FIN NOTICA #2-->*/}

      {/*<!--INICIO NOTICIA #3-->*/}
      <section className="container">
          <article className="row">
              <figure className="col-12 col-md-3 col-lg-4">
                  <a href="#" target="_blank"><img src={firpo} alt="Firpo"  className="img-fluid"/></a>
              </figure>

              <div className="col-12 col-md-9 col-lg-8">
                  <a href="#" target="_blank"><h3>A 94 años del derechazo que convirtió en leyenda a Luis Ángel Firpo</h3></a>
                          <cite>Publicado por <span className="autor">Diego Di Marco</span></cite>
                          <p>El 14/9/1923 el boxeador argentino enfrento en Nueva York a Jack Dempsey, uno de los mejores pesos pesados de la historia.</p>
              </div>
          </article>
      </section>
    {/*<!--FIN NOTICA #3-->*/}
      
  </div> 
  )
 }

 export default Dx;