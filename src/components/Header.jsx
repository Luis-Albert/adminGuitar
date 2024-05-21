
function Header() {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img src="img/logo.svg" alt="imagen logo" className="img-fluid" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img src="/img/carrito.png" alt="imagen carrito" className="img-fluid" />
              <div className="bg-white p-3" id="carrito"></div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header