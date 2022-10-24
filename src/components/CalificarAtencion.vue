<template>
  <div class="inicio">
        <h1>{{  Calificacion }}</h1><br>

    <div class="form-group">
      <form @submit.prevent="busqueda" method="get">
        <div>
          <label for="Puntuacion">puntuacion de nuestro servicio</label>
          <input type="number"
              id="calificacion"
              class="form-control"
              v-model="datosUsuario.calificar">
        </div>
        <div>
          <label for="comentario">dejanos tu comentario</label>
          <input type="text"
              id="descripcion"
              class="form-control"
              v-model="datosUsuario.descripcion">
        </div>
        <div>
          <button class="btn btn-success">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                Calificacion: "como te sentistes con nosotros",
                datosUsuario: {
                    Puntuacion:'',
                    comentario: '',

                }
            }
        }
    }
</script>
<style>
.inicio {
    text-align: center;
    font: Verdana;
    margin: 20px;
}
.form-group {
  text-align: center;
  font: arial;
}

</style>