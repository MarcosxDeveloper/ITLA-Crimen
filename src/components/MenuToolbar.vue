<template>
  <div id="MenuToolbar">
    <v-card flat>
      <v-toolbar color="primary" dark flat>
        <MenuSettings>
          <v-toolbar-side-icon class="menuItem"></v-toolbar-side-icon>
        </MenuSettings>
        <v-toolbar-title>ITLA CRIMEN</v-toolbar-title>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
  import MenuSettings from '@/components/MenuSettings';
  export default {
    name: 'MenuToolbar',
    components: {
      MenuSettings
    }
  }
</script>

<style>
  .card--flex-toolbar {
    margin-top: -64px;
  }
  .menuItem {
    position: fixed !important;
    left: 10px !important;
    top: 8px !important;
  }
</style>