import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { getPokemonsDetailsApi} from "../api/pokemon";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header  from "../components/Pokemon/Header";
import Type from '../components/Pokemon/Type';
import Stats from "../components/Pokemon/Stats";

export default function Pokemon(props) {
  const { 
    navigation,
    route:{params}, 
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => 
        <Icon 
          name="arrow-left"  
          color="#fff"
          size={20}
          style={{marginLeft: 20}}
            
        />,
    })
  }, [navigation, params]);

  useEffect(() => {
    (async() => {
      try{
        const response = await getPokemonsDetailsApi(params.id);
        setPokemon(response);
      }catch(e){
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header 
        name={pokemon.name} 
        order={pokemon.order} 
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types}>

      </Type>
      <Stats stats={pokemon.stats}>

      </Stats>
    </ScrollView>
  );
}