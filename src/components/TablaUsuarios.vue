<template>
    <div id="tabla-usuarios">
        <table class="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>No. ID</th>
                    <th>Tipo de Usuario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="persona in personas" :key="persona.id">
                    <td>{{ persona.nombre}}</td>
                    <td>{{ persona.apellido }}</td>
                    <td>{{ persona.numeroId}}</td>
                    <td>{{ persona.tipoUsuario}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'tabla-usuarios',
        props: {
            personas: Array,
        },
    }
</script>

<style scoped>

</style>