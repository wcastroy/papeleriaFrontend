<template>
    <div class="inicial">
        <h1>{{ bienvenidos }}</h1><br>
        <h3>{{ saludo }}</h3><br>
        <p>{{ explicapp }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                bienvenidos: 'Bienvenidos a Papeleria.Com',
                saludo: 'Es un gusto que esté trabajando con nosotros!',
                explicapp: 'Papeleria.Com es una aplicación web con la que usted puede desarrollar sus tareas de ventas y gestionar sus inventarios sin preocuparse por el almacenamiento.'
            }
        }
    }
</script>

<style scoped>
.inicial {
    text-align: center;
    font: Verdana;
    margin: 20px;
}
</style>