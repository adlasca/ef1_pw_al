<template >
  <h1>Juego Casino</h1>
  <h2>Puntaje: {{ puntaje }}</h2>
  <h2>Intento: {{ intento }}</h2>
  <div id="container-gen">
    <img :src="img1" alt="pokemon1" />
    <h2>{{ pokemon1 }}</h2>
    <img :src="img2" alt="pokemon2" />
    <h2>{{ pokemon2 }}</h2>
    <img :src="img3" alt="pokemon3" />
    <h2>{{ pokemon3 }}</h2>
  </div>
  <button @click="jugar">Jugar</button>
</template>

<script>
import { getImg, getName } from '@/clients/apiClient'

export default {
  data() {
    return {
      puntaje: 0,
      intento: 0,
      pokemon1: 'XXXXX',
      pokemon2: 'XXXXX',
      pokemon3: 'XXXXX',
      img1: 'https://dummyimage.com/250x250',
      img2: 'https://dummyimage.com/250x250',
      img3: 'https://dummyimage.com/250x250',
      aleatorio1: 0,
      aleatorio2: 0,
      aleatorio3: 0,
    }
  },
  methods: {
    async getPokemon() {
      const poke1 = await getName(this.aleatorio1)
      const poke2 = await getName(this.aleatorio2)
      const poke3 = await getName(this.aleatorio3)
      this.pokemon1 = poke1.name
      this.pokemon2 = poke2.name
      this.pokemon3 = poke3.name
      this.img1 = getImg(this.aleatorio1)
      this.img2 = getImg(this.aleatorio2)
      this.img3 = getImg(this.aleatorio3)
    },
    async jugar() {
      this.aleatorio1 = Math.floor(Math.random() * 898) + 1
      this.aleatorio2 = Math.floor(Math.random() * 898) + 1
      this.aleatorio3 = Math.floor(Math.random() * 898) + 1
      this.intento += 1
      await this.getPokemon()
    },
  },
}
</script>
<style scoped>
h1 {
  font-size: 36px;
  margin-bottom: 10px;
}
h2 {
  font-size: 24px;
  margin: 5px 0;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
}
img {
  width: 150px;
  height: 150px;
  margin: 10px;
}
</style>
