<template>
    <div class="inicio">
        <h1>{{ bienvenida }}</h1><br>
        <h3>{{ instruccion }}</h3>
        <h5>{{ indicaciones }}</h5><br>
    </div>
    <div class="recuadro">
        <div class="botonera">
            <span class="textonombre">Usuario: </span><br>
            <input type="text" placeholder="Digite su usuario = #ID"  /><br>
            <span class="textocontrasenia">Contraseña: </span><br>
            <input type="password" placeholder="********"  />
        </div>
    </div>
</template>

<script>
   export default ({
    data(){
        return {
            bienvenida: "Bienvenido!",
            instruccion: "Por favor ingrese con su usuario y contraseña:",
            indicaciones: "(Recuerde que su usuario es el número de su identificación!)"
        }
    }
   })
</script>

<style scoped>
.inicio {
    text-align: center;
    font: Verdana;
    margin: 20px;
}

.recuadro {
    max-width: 100%;
    text-align: center;
}
.botonera{
    text-align: center;
    font: arial;
    border-radius: 5px;
    background-color: lightgrey;
    width: 300px;
    border: 5px double black;
    padding: 50px;
    margin: 0px auto;

}
</style>