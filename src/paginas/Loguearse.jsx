import React from "react";
import './Loguearse.css'


function Loguearse() {
    
    return(
        <div className="registro">
            <h1>Loggin</h1>
            <form action="#" method="GET">
                    <label>
                        Email:
                    </label><br />
                    <input type="email" name="email" required placeholder="email"/><br />
                    <label>
                        Password:
                    </label><br />
                    <input type="password" name="password" placeholder="password" required />
                    <br />
                    <button type="submit" >Enviar</button><br />
                </form>
        </div>
    );
}

export default Loguearse;