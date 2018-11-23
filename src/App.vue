<template>
  <v-app>
    <v-card height="100vh" flat>
      <MenuToolbar />
      <v-container text-xs-center>
        <router-view />
      </v-container>
      <MenuNav />
    </v-card>
  </v-app>
</template>

<script>
import MenuNav from '@/components/MenuNav';
import MenuToolbar from '@/components/MenuToolbar';

export default {
  name: 'App',
  components: {
    MenuNav,
    MenuToolbar
  }
}
</script>
