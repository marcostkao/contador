import React, { Component } from 'react';

import { Button } from 'reactstrap';

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
                <Button className="mr-2" color="success" outline onClick={this.aumentar}>
                    Aumentar
                </Button>
                <Button color="danger" outline onClick={this.diminuir}>
                    Diminuir
                </Button>
            </div>
        )
    }

}

export default Contador;

