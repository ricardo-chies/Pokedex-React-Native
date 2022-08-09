import React, { useEffect, useState } from "react";
import {FlatList, Text, StyleSheet} from 'react-native';

import Pokemon from './pokemon';
import usePokemons from "../../../hooks/usePokemons";

export default function Pokemons({topo: Topo}) {
    const [titulo, lista] = usePokemons();

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo} >{titulo}</Text>
        </>
    }

    return <FlatList 
    data={lista}
    renderItem={({item}) => <Pokemon {...item}/> }
    //keyExtractor={(nome) => nome}
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