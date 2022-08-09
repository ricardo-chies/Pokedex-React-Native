import React from 'react';
import Topo from './componentes/topo';
import Pokemons from './componentes/pokemons';

export default function Home() {
    return <Pokemons topo={Topo}/>
}