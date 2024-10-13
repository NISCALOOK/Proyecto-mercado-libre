import React from "react";
import './BarraNav.css';
import { Link } from "react-router-dom";
import { Nav} from "react-bootstrap";

function BarraNav() {

    return (
        <div>
            <nav>
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/loggin">
                    Loguearse
                </Nav.Link>
                <Nav.Link as={Link} to="/registro">
                    Registro
                </Nav.Link>
            </nav>
        </div>
    );
}

export default BarraNav;