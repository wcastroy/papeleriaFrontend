<template>
    <div class="inicio">
        <h1>{{ registro }}</h1><br>
    
    <div class="form-group">
      <form @submit.prevent="register" method="post">
        <div>
          <label for="Id">Código del producto</label>
          <input type="number"
              id="Id"
              class="form-control"
              v-model="datosProducto.id">
        </div>
        <div>
          <label for="Nombre">Nombre del producto</label>
          <input type="text"
              id="Nombre"
              class="form-control"
              v-model="datosProducto.nombre">
        </div>
        <div>
          <label for="Nombre">Descripción del producto</label>
          <input type="text"
              id="Descripcion"
              class="form-control"
              v-model="datosProducto.descripcion">
        </div>
        <div>
          <label for="Costo">Costo del producto</label>
          <input type="text"
              id="Costo"
              class="form-control"
              v-model="datosProducto.costo">
        </div>
        <div>
          <label for="Cantidad">Cantidad en stock</label>
          <input type="text"
              id="Cantidad"
              class="form-control"
              v-model="datosProducto.cantidad">
        </div>
        <div>
          <label for="precioventa">Precio de venta</label>
          <input type="text"
              id="precioventa"
              class="form-control"
              v-model="datosProducto.precioventa">
        </div>
        <div>
          <button @click="guardarProducto" class="btn btn-success">Crear</button>
          
          <button @click="actualizarProducto" class="btn btn-success">Actualizar</button>
          <p>{{ mensaje }}</p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Productos from "../services/Productos";
    export default {
        data() {
            return {
                registro: "Registro o actualización de Productos",
                mensaje:"",
                datosProducto: {
                    id: null,
                    nombre:'',
                    descripcion: '',
                    precioventa: '',
                    costo:'',
                    cantidad: '',

                }
            }
        },
        methods: {
          guardarProducto(){
            var data = {
              codigo_producto: this.datosProducto.id,
              nombre_producto: this.datosProducto.nombre,
              descripcion_producto: this.datosProducto.descripcion,
              precio_venta: this.datosProducto.precioventa,
              costo_producto: this.datosProducto.costo,
              cantidad_stock: this.datosProducto.cantidad
            };
            Productos.create(data)
            .then(response => {
              this.datosProducto.id = response.data.id;
              this.mensaje = "Producto creado con éxito"
              console.log(response.data);
            })
            .catch(e => {
              this.mensaje = "Error al crear el producto"
              console.log(e);
            });
          },
          actualizarProducto(){
            var data = {
              nombre_producto: this.datosProducto.nombre,
              descripcion_producto: this.datosProducto.descripcion,
              precio_venta: this.datosProducto.precioventa,
              costo_producto: this.datosProducto.costo,
              cantidad_stock: this.datosProducto.cantidad
            };
            Productos.update(this.datosProducto.id,data)
            .then(response => {
              this.datosProducto.id = response.data.id;
              console.log(response.data);
              this.mensaje = "Producto actualizado con éxito"
            })
            .catch(e => {
              this.mensaje = "Error al actualizar el producto"
              console.log(e);
            });
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
