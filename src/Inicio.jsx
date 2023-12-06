import './info.css'
function Info (props){
    return(
        <>
        <a name="Info"></a><section>
        <div className="container">
    <div className="row">
      <div className="col-sm-12 col-lg-12">
        <h1 id="merte" className="text-center">Lazari</h1>
      </div>
      <div className="col-sm-12 col-lg-12">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active mt-5 pt-5">
              <img src="./img/logo.png" alt="Slide 1" className="d-block ms-auto me-5 img-fluid"/>
              <div className="carousel-caption">
                <h4 className="text-center text-secondary">Mostrar complicaciones acciones y el impacto que <br/> podria
                  causar
                  como procesos que
                  conlleva tener esta <br/> discapacidad, eliminando estigmas de la sociedad en <br/> relación en el tema
                  de
                  la
                  ceguera incentivar humanos <br/> para en el momento de actuar de verdad hacer una <br/> honorable acción
                  y
                  romper esa exclusión por parte de la sociedad</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <h4 className="text-center text-secondary">Nosotros como equipo formativo notamos <br/> la falta de contenido
                  que
                  expresa detalladamente la discapacidad de la ceguera. <br/> Es necesario que las personas miren con
                  profundidad
                  cómo es la vida de las personas con esta discapacidad ceguera y como desarrollan <br/> sus actividades
                  cotidianas, que las personas exteriores <br/> socialicen sin temores con estas personas , e
                  identifiquen
                  gestos <br/> acciones y términos para una ayuda eficaz, buscamos que no limiten las oportunidades de
                  participar en diversos <br/> aspectos de la vida al máximo , Dependerá de su capacidad y deseos.</h4>
              </div>
              <img src="./img/ni ide.png" alt="Slide 2" className="d-block ms-auto mt-5 pt-5 img-fluid"/>

            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <h4 className="text-center text-secondary">Queremos hacer un cómic digital interactivo <br/> para informar y
                  concientizar a las personas por la lucha contra <br/> los estereotipos
                  y la discriminación que a menudo se asocian <br/> con la discapacidad
                  visual, por la necesidad de una mayor <br/> comprensión por parte de la
                  sociedad para que vean lo importante <br/> que es la accesibilidad e
                  inclusión para la discapacidad <br/> visual y lleven una vida más
                  satisfactoria.

                </h4>
              </div>
              <img src="./img/tira.png" alt="Slide 2" className="d-block ms-auto mt-5 pt-5 img-fluid"/>

            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </a>
        </div>
      </div>
    </div>
  </div>
        </section>
        </>
    )
}
export default Info