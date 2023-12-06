import './menu.css'

function Menu (props){
    return (
        <>
        <section>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container-fluid">
    <a href="#Prin"><img src="./img/logo.png" className="navbar-brand h-75 w-75"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <a href="#Info"> <img src="./img/informacion.png" className="nav-link active w-75 h-100 ms-5 ps-5" aria-current="page"
              /></a>
        </li>
        <li className="nav-item">
          <a href="#Comic" > <img src="./img/comic.png" className="nav-link w-75 h-100 com"/></a>
        </li>
        <li className="nav-item dropdown">
          <a href="#Publi" ><img src="./img/objetivo.png" className="nav-link w-75 h-100" aria-expanded="false"/>
          </a>
        </li>
        <li className="nav-item">
          <a href="#Conta" ><img src="./img/contactos.png"  className="nav-link  w-75 h-100" aria-disabled="true"/></a>
        </li>
      </ul>

    </div>
  </div>
</nav>
</section>
<a name="Prin">
    <section>
<div className="container">
    <div className="row">
      <div className="col-sm-12 col-lg-12 text-center">
        <h1 className="text-center">{props.Hola}</h1>
        <img src="./img/vienvenido.png" alt="" className="img-fluid w-75"/>

      </div>
    </div>
  </div>
</section>
</a>

        </>
    )
}
export default Menu