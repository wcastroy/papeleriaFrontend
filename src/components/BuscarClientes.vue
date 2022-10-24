<template>
    <div class="list">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="number"
                id="Id"
                placeholder="Id del cliente o vacio para buscar todos"
                class="form-control"
                v-model="id">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button"
                @click="buscarCliente"
                >
                Buscar
                </button>
                <button class="btn btn-outline-secondary" type="button"
                @click="elminarCliente"
                >
                Eliminar
                </button>
            </div>
            </div>
        </div>
        <div v-if="clientes" class="container">
            <h3 class="p-3 text-center">Lista de clientes</h3>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr >
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in clientes" :key="cliente.id_cliente">
                        <td >{{cliente.nombre_cliente}} {{cliente.apellidos_cliente}}</td>
                        <td>{{cliente.direccion_cliente}}</td>
                        <td>{{cliente.email_cliente}}</td>
                        <td>{{cliente.telefono_cliente}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <br />
            <p>No se han encontrado clientes</p>
        </div>
        <p>{{ mensaje }}</p> 
    </div>
</template>

<script>
import Clientes from "../services/Clientes";
    export default {
        data() {
            return {
                id: null,
                clientes: null,
                mensaje:'',
            };
        },
        methods: {
            buscarCliente() {
                this.mensaje=''
                if(this.id != null){
                    Clientes.get(this.id)
                    .then(response => {
                    this.clientes = [response.data];
                    console.log(JSON.stringify(response.data));
                    })
                    .catch(e => {
                        this.clientes = null
                        console.log(e);
                    });
                }
                else{
                    Clientes.getAll()
                    .then(response => {
                    this.clientes = response.data;
                    console.log(JSON.stringify(response.data) );
                    })
                    .catch(e => {
                        this.clientes = null
                        console.log(e);
                    });
                }

            },
            elminarCliente(){
                Clientes.delete(this.id)
                    .then(response => {
                        this.mensaje = "Cliente eliminado con éxito"
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(e => {
                        this.mensaje = "Error al eliminar el cliente"
                        console.log(e);
                    });
            }
        },
};
</script>

<style>

.list {
  text-align: center;
  font: arial;
  color: white;
}
.table td {
    color: white;
}
.table tr {
    color: white;
}
</style>
