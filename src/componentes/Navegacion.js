import React from "react";
import CartWidget from "./CartWidget";

const Navegacion = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" >Hercules</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                         </li>
                         <li className="nav-item">
                        <a className="nav-link" href="#">DJ</a>
                         </li>
                         <li className="nav-item">
                        <a className="nav-link" href="#">AUDIO</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Novedades</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"><CartWidget/></a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navegacion