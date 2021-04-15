import React from 'react'

import NavBar from '../components/NavBar'
import CardMusica from '../components/CardMusica'
import Button from '../components/Button'

function MinhasMusicas() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="filter">
                    <button className="btn-green right">Adicionar</button>
                </div>
            </div>
            <div className="container">
                <div className="music-boxes">

                    <CardMusica nome="Goosebumps" genero="Trap" ano="2017" />
                    <CardMusica nome="Vida loka pt 1" genero="Rap" ano="2000" />
                    <CardMusica nome="Fogo" genero="Trap" ano="2021" />
                </div>
            </div>


        </>
    )
}

export default MinhasMusicas