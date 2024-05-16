import { Link } from "react-router-dom"
import { Logo } from '../../constant'

function navbar() {

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom container ">
      <Link to={'/'} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img width={60} src={Logo} alt="logo" />
        <span className="fs-4">
            <div className="nav-link fw-bold" >Ruziyev_N</div>
        </span>
      </Link>

      <ul className="nav nav-pills">

        <li className="nav-item"><Link to={'/login'} className="nav-link fs-4 fw-bold ">Login</Link></li>
        <li className="nav-item"><Link to={'/register'} className="nav-link fs-4 fw-bold ">Regiter</Link></li>
      </ul>
    </header>
  )
}

export default navbar