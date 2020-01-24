import React, { Component } from 'react'

export default class Coordenadas extends Component {
    state = { 
        latitud: null,
        longitud: null
    }

    componentDidMount() { 
        this.geoId = window.navigator.geolocation.watchPosition( position => {
            this.setState({
                latitud: position.coords.latitude,
                longitud : position.coords.longitude
            })
        } )
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.geoId)
    }

    render() {
        return this.state.latitud == null ? (
            <div>Cargando...</div>
        ) : (
            <div>
                <h2>latitud: {this.state.latitud}</h2>
                <h2>Longitud: {this.state.longitud}</h2>
            </div>
        )
    }

}
