import React, { useEffect, useState } from "react";
import {FlatList, Text, StyleSheet} from 'react-native';
import { carregaPokemons } from "../../../servicos/carregaDados";

export default function Pokemons({topo: Topo}) {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState('');

    useEffect(() =>{
        const retorno = carregaPokemons();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo} >{titulo}</Text>
        </>
    }

    return <FlatList 
    data={lista}
    renderItem={({item: {nome}}) => <Text>{nome}</Text> }
    // keyExtractor={(nome) => nome}
    ListHeaderComponent={TopoLista}
    />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
})