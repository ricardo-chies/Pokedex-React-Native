import { useState, useEffect } from "react";

import { carregaPokemons } from "../servicos/carregaDados";

export default function usePokemons() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaPokemons();
        retorno.lista.sort(
            (pokemon1, pokemon2) => pokemon2.poder +- pokemon1.poder,
        );
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);


    return [titulo, lista];
}