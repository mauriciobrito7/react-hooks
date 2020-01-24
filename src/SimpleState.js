import React, { Component, useState } from 'react'

class SimpleState extends Component { 

    state = { 
        cuenta: 0
    }

    render(){
        return(
            <div>
                La cuenta es: {this.state.cuenta}
                <button onClick={()=>{
                    this.setState({cuenta: this.state.cuenta + 1})
                }}>
                    Aumentar cuenta
                </button>
            </div>
        )
    }

}

function SimpleStateFunction() { 
    // guardamos lo que retorna useState hook destructurando
    /*Le pasamos por parametro con el valor que se quiere iniciar, y devolvemos la variable y una funcion para poder modificar ese valor */
    const [cuenta, setCuenta] = useState(0)

    return(
        <div>
            La cuenta es: {cuenta}
            <button onClick={()=>{
                setCuenta(cuenta + 1)
            }}>aumentar cuenta</button>
        </div>        
    )
}

export default SimpleStateFunction

