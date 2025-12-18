import axios from 'axios'

const getImg = (idPokemon) => {
  return (
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' +
    idPokemon +
    '.svg'
  )
}

const getName = async (idPokemon) => {
  const name = axios.get('https://pokeapi.co/api/v2/pokemon/' + idPokemon + '/').then((n) => n.data)
  return name
}

export { getImg, getName }
