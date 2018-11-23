<template>
  <div id="MenuNav">
    <v-bottom-nav
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="inicio"
        :to="{name: 'home'}"
      >
        <span>Inicio</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="mapa"
        :to="{name: 'map'}"
      >
        <span>Mapa</span>
        <v-icon>map</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="historial"
        :to="{name: 'history'}"
      >
        <span>Historial</span>
        <v-icon>history</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
  export default {
    name: 'MenuNav',
    data () {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>

<style>

</style>
