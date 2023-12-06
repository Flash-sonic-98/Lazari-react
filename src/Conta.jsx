import './contac.css'
function Conta(props){
    return(
        <>
      <a name="Conta"><section>
        <div className="container">
    <div className="row">

      <div className="col-sm-12 col-xl-12">
        <div className="col-sm-12 col-xl-12 text-center">
          <h1 className="text-center">Equipo de trabajo</h1>

          <img id="" className="h-50 img-fluid" src="img/david.png" alt=""
            onclick="mostrarAlert('Juan David','Pieza clave para el ascenso de la compañia. Es multifuncional')"/>

          <img id="" className="h-50 img-fluid" src="img/jeni.png" alt=""
            onclick="mostrarAlert('Jenifer','Miembro escencial de lazarí. Experta en diseño')"/>

        </div>

        <div className="col-sm-12 col-xl-12 text-center">

          <a href="https://web.whatsapp.com/"><img className=" h-25 img-fluid" src="img/whatsapp.png" alt=""/></a>
          <a href="https://www.facebook.com/"><img className=" h-25 img-fluid" src="img/facebook.png" alt=""/></a>
          <a href="https://www.instagram.com/"><img clasnaclassNames=" h-25 img-fluid" src="img/instagram.png" alt=""/></a>
          <a href="https://www.google.com/intl/es-419/gmail/about/"><img class=" h-25 img-fluid" src="img/gmail.png"
              alt=""/></a>

        </div>


        <div id="roro" class="indi">
          <div className="happy">
            <h1 id="sirena" className="dross"></h1>
            <p id="creado" clasnameclassNames="flag"></p>
            <br/>
            <button className="x" onclick="cerrarAlert()">aceptar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
  </section>
  </a>  
        </>
    )
}
export default Conta