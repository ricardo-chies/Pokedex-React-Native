import { useState, useEffect } from "react";

import { carregaPokemons } from "../servicos/carregaDados";

export default function usePokemons() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() =>{
        const retorno = carregaPokemons();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);


    return [titulo, lista];
}