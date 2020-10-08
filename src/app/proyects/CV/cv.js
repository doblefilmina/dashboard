import React, {useState} from 'react';
import FbCircSb from '../../img/cv/avatar_FB_sb_circ.png';
import FbCircB from '../../img/cv/avatar_FB_b_circ.png';
import ML from '../../img/cv/logo__large_plus.png';
import globant from '../../img/cv/globant.png';
import despegar from '../../img/cv/despegar.png';
import Galperin from '../../img/cv/avatar_galperinv02.png';
import Migoya from '../../img/cv/avatar_migoya.png';
import Marley from '../../img/cv/avatar_marley.png';



const Cv = () => {

  return (
    <div className="cv">
      {/*<!--INICIO NAVBAR-->*/}
      <section className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Mi Portfolio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#presentacion">Presentacion <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experiencia">Experiencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonios">Testimonios</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#habilidades">Habilidades</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      {/*<!--FIN NAVBAR-->*/}


      <div className="container-fluid">
     
        <section id="presentacion" className="impar">
          {/*<!--INICIO PRESENTACIÓN-->*/}
          <section className="row">
            <div id="foto-presentacion" className="col-sm-12 col-md-6 p-5">
              <div id="capa-1">
                <img id="foto-perfil" src={FbCircSb} alt="Federico Brusa" className="img-fluid rounded-circle"/>
              </div>
              <div id="capa-2">
                <img id="foto-perfil2" src={FbCircB} alt="Federico Brusa" className="img-fluid rounded-circle"/>
              </div>
              <div id="capa-3">
                <img id="foto-perfil3" src={FbCircB} alt="Federico Brusa" className="img-fluid rounded-circle"/>
              </div>  
            </div>
            <div className="col-sm-12 col-md-6 p-3">
              <h1 className="mt-3">Federico Brusa</h1>
              <h2 className="h3 mt-3"> <span>Ingeniero Civil </span> Desarrollador 
                <div className="spinner-border" role="status" id="spinner">
                  <span className="sr-only">Loading...</span>
                </div>
              </h2> 
              <p className="mt-3"> De formación Ingeniero Civil, motivado por la curiosidad y el analfabetismo digital en el rubro de la construcción decidí reorientar mi carrera hacia la creación de productos digitales. </p>
            </div>
          </section>
        {/*<!--FIN PRESENTACIÓN-->*/}
        </section>

        <section id="experiencia" className="par">    
          {/*<!--INICIO TÍTULO-->*/}
          <section id="experiencia-titulo" className="row">
            <div className="col-sm-12">
              <p id="TITULO" className="h1 text-center m-1">(IN)Experiencia</p>
            </div>
          </section>
          {/*<!--FIN TÍTULO-->*/}

          {/*<!--INICIO EXPERIENCIA-->*/}
          <section id="experiencia-contenido" className="row">
            <ul id="lista-experiencia" className="list-unstyled p-4">
              <li className="media">
                <img src={ML} className="mr-3 mt-3 img-fluid" alt="Mercado Libre"/>
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Mercado Libre</h5>
                  <p>NO trabajé en Mercado Libre, pero si lo hubiera hecho, me hubiera gustado analizar el comportamiento de los usuarios en base a los datos de búsquedas y compras.</p>
                </div>
              </li>
              <hr/>
              <li className="media">
                <img src={globant} className="mr-3 mt-3 img-fluid" alt="Globant"/>
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Globant</h5>
                  <p>NO trabajé en esta empresa, pero si lo hubiera hecho, me hubiera gustado trabajar en el desarrollo de algun servicio sobre plataformas, en el sector back-end. <br/> También me gustaría resolver los problemas de referenciamiento que tiene la navbar de la página principal. </p>
                </div>
              </li>
              <hr/>
              <li className="media">
                <img src={despegar} className="mr-3" alt="Despegar"/>
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Despegar</h5>
                  <p>NO trabajé en esta empresa, pero si lo hubiera hecho, eliminaría toda la publicidad de absolutamente todos los medios y distribuiría toda la plata de esos contratos entre los empleados &#128521</p>
                </div>
              </li>
            </ul>
          </section>
        {/*<!--FIN EXPERIENCIA-->*/}
        </section>    

        <section id="testimonios" className="impar">
          {/*<!--INICIO TÍTULO-->*/}
          <section id="testimonios-titulo" className="row">
            <div className="col-sm-12">
              <p id="TITULO" className="h1 text-center m-5">TESTIMONIOS</p>
            </div>
          </section>
          {/*<!--FIN TÍTULO-->*/}

          {/*<!--INICIO TESTIMONIOS-->*/}
          <section id="testimonios-contenido" className="row">
            <div className="col-sm-12 col-md-3 col-lg-4">
              <div className="card">
                <img src={Galperin} className="card-img-top" alt="Marcos Galperin"/>
                <div className="card-body">
                  <h5 className="card-title">Marcos Galperín</h5>
                  <h6>Mercado Libre</h6>
                  <p className="card-text">"Me hubiese encantado trabajar con Federico. Es un muchacho con muchas <a href="#titulo-habilidades">habilidades</a>."</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-4">
              <div className="card">
                <img src={Migoya} className="card-img-top" alt="Marley"/>
                <div className="card-body">
                  <h5 className="card-title">Martín Migoya</h5>
                  <h6>Globant</h6>
                  <p className="card-text">"Me hubiese encantado trabajar con Federico. Increíble cantidad de <a href="#titulo-recursos">recursos</a> maneja."</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-4">
              <div className="card">
                <img src={Marley} className="card-img-top" alt="Marley"/>
                <div className="card-body">
                  <h5 className="card-title">Marley</h5>
                  <h6>Despegar</h6>
                  <p className="card-text">"Me hubiese encantado trabajar con Federico. Tiene una muy buena red de <a href="#titulo-contactos">contactos</a>."</p>
                </div>
              </div>
            </div>
          </section>
          {/*<!--FIN TESTIMONIOS-->*/}
        </section> 

        <section id="recursos" className="par">    
          {/*<!--INICIO TÍTULO-->*/}
          <section id="recursos-titulo" className="row">
            <div className="col-sm-12">
              <p id="TITULO" className="h1 text-center m-1">Recursos</p>
            </div>
          </section>
          {/*<!--FIN TÍTULO-->*/}

          {/*<!--INICIO RECURSOS-->*/}
          <section id="recursos-contenido" className="row">
            <div className="col-sm-6 col-md-3 p-auto">
              <i className="fab fa-html5"></i>
            </div>
            <div className="col-sm-6 col-md-3  p-auto">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="col-sm-6 col-md-3 p-auto">
              <i className="fab fa-js"></i>
            </div>
            <div className="col-sm-6 col-md-3 p-auto">
              <i className="fab fa-bootstrap"></i>
            </div>
          </section>
          {/*<!--FIN RECURSOS-->*/}
        </section>

        <section id="habilidades" className="impar">
          {/*<!--INICIO TÍTULO-->*/}
          <section id="habilidades-titulo" className="row">
            <div className="col-12">
              <p id="TITULO" className="h1 text-center m-5">Habilidades</p>
            </div>
          </section>
          {/*<!--FIN TÍTULO-->*/}

          {/*<!--INICIO HABILIDADES-->*/}
          <section id="habilidades-contenido" className="row">
            <div className="progress barra col-12 my-2">
              <div id="decision" className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><p>Decisión</p></div>
            </div>
            <div className="progress barra col-12 my-2">
              <div id="trabajo-equipo" className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><p>Trabajo en equipo</p></div>
            </div>
            <div className="progress barra col-12 my-2">
              <div id="perseverancia" className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"  aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"><p>Perseverancia</p></div>
            </div>
            <div className="progress barra col-12 my-2">
              <div id="creatividad" className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"><p>Creatividad</p></div>
            </div>
            <div className="progress barra col-12 my-2">
              <div id="flexibilidad" className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"><p>Flexibilidad</p></div>
            </div>
          </section>
        {/*<!--FIN HABILIDADES-->*/}
        </section>     

        <section id="contacto" className="par">    
          {/*<!--INICIO TÍTULO-->*/}
          <section id="contacto-titulo" className="row">
            <div className="col-sm-12">
                <p id="TITULO" className="h1 text-center m-1">Contacto</p>
            </div>
          </section>
          {/*<!--FIN TÍTULO-->*/}

          {/*<!--INICIO CONTACTO-->*/}
          <section id="contacto-contenido" className="row">
            <form className="col-12" action="https://webhook.site/4bb04849-9c79-4403-8f72-157e57a26141" method="post" encType="multipart/form-data">
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="Nombre">Nombre</label>
                  <input type="text" className="form-control" id="nombre"/>
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="apellido">Apellido</label>
                  <input type="text" className="form-control" id="Apellido"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-sm-12 col-md-8">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group col-sm-12 col-md-4">
                  <label htmlFor="telefono">Telefono (opcional)</label>
                  <input type="tel" className="form-control" id="telefono"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="msj">Mensaje</label>
                <textarea className="form-control" id="msj" rows="3"></textarea>
              </div>
                
              <button type="submit" className="btn btn-primary">Enviar</button>         
            </form>
          </section>
          {/*<!--FIN CONTACTO-->*/}
        </section>
      </div>
    </div>
  )
 }

 export default Cv;