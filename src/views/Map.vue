<template>
  <div class="Map">
    <h1>Mapa</h1>
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap';
export default {
  name: 'Map',
  components: {
    GoogleMap
  }
}
</script>

