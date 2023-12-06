import './mas.css'
function Mas (props){
    return(
        <a name="Ver">
<section>
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-xl-6 text-center">

        <div>

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content bg-dark-subtle">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Adam</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body tert">
                  Adam fue durante muchos años un respetable doctor muy amado hasta que un grave accidente le cambió la
                  vida para siempre, la discriminacion que sufrió después alimentaria su sed de venganza convirtiéndolo
                  en el protagonista de esta historia.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="py-4">Personajes</h1>
          <img src="img/adam.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" alt=""
            className="w-50 h-50 btn bg-primary-subtle shadow rounded-circle"/>


          <h1>Adam</h1>

        </div>


      </div>
      <div className="col-sm-12 col-xl-6 text-center">
        <h1 className="">Comic</h1>
        <div id="comicCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/capitulo1.png" alt="Capítulo 1" className="d-block mx-auto h-50 my-5"/>
            </div>
            <div className="carousel-item">
              <img src="./img/capitulo2.png" alt="Capítulo 2" className="d-block mx-auto h-50 my-5"/>
            </div>

          </div>
          
          <a className="carousel-control-prev" href="#comicCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-primary-subtle" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#comicCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-primary-subtle" ariahidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </a>
        </div>
        <div className="modal fade" id="comicModal" tabindex="-1" aria-labelledby="comicModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark-subtle">
              <div className="modal-header">
                <h5 className="modal-title" id="comicModalLabel">Comic</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <div className="modal-body">

                <div id="Comic" class="carousel slide bg-info" data-bs-ride="carousel">
                  <div className="carousel-inner ">
                    <div className="carousel-item active">
                      <img src="img/capitulo1.png" alt="Capítulo 1" className="d-block mx-auto h-50 my-5"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./img/capitulo2.png" alt="Capítulo 2" className="d-block mx-auto h-50 my-5"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./img/capitulo3.png" alt="Capítulo 2" className="d-block mx-auto h-50 my-5"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./img/capitulo4.png" alt="Capítulo 2" className="d-block my-5 mx-auto peg"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./img/capitulo5.png" alt="Capítulo 2" className="d-block my-5 mx-auto peg"/>
                    </div>
                    <div className="carousel-item">
                      <img src="./img/capitulo6.png" alt="Capítulo 2" className="d-block my-5 mx-auto peg"/>
                    </div>

                  </div>
                  <a className="carousel-control-prev" href="#Comic" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </a>
                  <a className="carousel-control-next" href="#Comic" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </a>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <img src="./img/capitulo1.png" alt="" className="h-25"/>
        <img src="./img/capitulo2.png" alt="" className="h-25"/>
        <img src="./img/capitulo3.png" alt="" className="h-25"/>
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#comicModal">
          ver comic
        </button>
      </div>
      
    </div>
  </div>
</section>
</a>
    )
}
export default Mas