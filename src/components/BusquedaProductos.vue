<template>
    <div class="list">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="number"
                id="Id"
                placeholder="Id del producto o vacio para buscar todos"
                class="form-control"
                v-model="id">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button"
                @click="buscarProducto"
                >
                Buscar
                </button>
                <button class="btn btn-outline-secondary" type="button"
                @click="elminarProducto"
                >
                Eliminar
                </button>
            </div>
            </div>
        </div>
        <div v-if="productos" class="container">
            <h3 class="p-3 text-center">Lista de productos</h3>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr >
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Costo</th>
                        <th>Cantidad en stock</th>
                        <th>Precio de venta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="producto in productos" :key="producto.codigo_producto">
                        <td >{{producto.codigo_producto}}</td>
                        <td >{{producto.nombre_producto}}</td>
                        <td>{{producto.descripcion_producto}}</td>
                        <td>{{producto.costo_producto}}</td>
                        <td>{{producto.cantidad_stock}}</td>
                        <td>{{producto.precio_venta}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <br />
            <p>No se han encontrado productos</p>
        </div>
        <p>{{ mensaje }}</p> 
    </div>
</template>

<script>
import Productos from "../services/Productos";
    export default {
        data() {
            return {
                id: null,
                productos: null,
                mensaje:'',
            };
        },
        methods: {
            buscarProducto() {
                this.mensaje=''
                if(this.id != null){
                    Productos.get(this.id)
                    .then(response => {
                    this.productos = [response.data];
                    console.log(JSON.stringify(response.data));
                    })
                    .catch(e => {
                        this.productos = null
                        console.log(e);
                    });
                }
                else{
                    Productos.getAll()
                    .then(response => {
                    this.productos = response.data;
                    console.log(JSON.stringify(response.data) );
                    })
                    .catch(e => {
                        this.productos = null
                        console.log(e);
                    });
                }

            },
            elminarProducto(){
                Productos.delete(this.id)
                    .then(response => {
                        this.mensaje = "Producto eliminado con éxito"
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(e => {
                        this.mensaje = "Error al eliminar el producto"
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
