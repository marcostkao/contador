import React, { Component } from 'react';

import './contador.css'

class Contador extends Component {
    state = {
        numero: 0
    }

    aumentar = () => {
        let novoNumero = this.state.numero

        novoNumero++

        this.setState({ numero: novoNumero })

    }

    diminuir = () => {
        let novoNumero = this.state.numero

        if (novoNumero === 0) {
            return alert('Hoje não faro')
        }

        novoNumero--

        this.setState({ numero: novoNumero })

    }


    render() {
        return (
            <div>
                <h1 className="contador-titulo">
                    {this.state.numero}
                </h1>
                <button className="contador-aumentar" type="button" onClick={this.aumentar} >Aumentar</button>
                <button className="contador-diminuir" type="button" onClick={this.diminuir} >Diminuir</button>
            </div>
        )
    }

}

export default Contador;

