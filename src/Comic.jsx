import './comic.css'

function Comic(props){
    return(
        <>
        <a name="Comic">
            <section>
        <div className="container">
    <div className="row">
      <div className="col-sm-12 col-xl-6 my-5">
        <img src="./img/desinopsis.png" alt="" className="img-fluid d-flex flex-column justify-content-center align-items-center"/>
        
      </div>
      <div className="col-sm-12 col-xl-6 my-5 text-center">
        <h3 className="text-center">{props.Logline}</h3>
        <p className="text-center"> Adam, Un hombre que se enfrenta a constantes rechazos y <br/>
          prejuicios En un mundo donde la discriminación hacia las personas <br/>
          con discapacidad es desgarradoramente común. Harto de la crueldad <br/>
          que ha experimentado, se embarca en un oscuro camino de venganza <br/>
          contra aquellos que lo han menospreciado.
          </p>
          <a href="#Ver"><img src="./img/ver.jpeg" alt="" className="w-50"/></a>
      </div>
      
      <div className="col-sm-12 col-lg-12 text-center">
        
      </div>
      
    </div>
    </div>
    </section>
    </a>
        </>
    )
}
export default Comic