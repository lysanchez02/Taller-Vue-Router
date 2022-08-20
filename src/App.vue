<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/inicio">Inicio</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/dashboardAdmin">Admin</router-link> |
      <router-link to="/create">Crear</router-link> |
      <router-link to="/index">Index</router-link> |
      <router-link to="/update">Update</router-link> |
      <router-link to="/dashboardUser">User</router-link> |
      <router-link to="/rol">Rol</router-link> |
      <router-link to="/inicioSesion">Iniciar Sesion</router-link> |
      <sidebar></sidebar>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import sidebar from '../src/components/sidebar.vue'
export default{
  components:{
    sidebar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
