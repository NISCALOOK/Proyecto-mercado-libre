import React from "react";
import './BarraNav.css';
import { Link } from "react-router-dom";

function BarraNav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/loguearse">Loguearse</Link>
                    </li>
                    <li>
                        <Link to="/registro">Registro</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default BarraNav;
