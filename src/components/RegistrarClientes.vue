<template>
    <div class="inicio">
        <h1>{{ registro }}</h1><br>
    
    <div class="form-group">
      <form @submit.prevent="register" method="post">
        <div>
          <label for="Id">Id del cliente</label>
          <input type="number"
              id="Id"
              class="form-control"
              v-model="datosUsuario.id">
        </div>
        <div>
          <label for="Nombre">Nombre del cliente</label>
          <input type="text"
              id="Nombre"
              class="form-control"
              v-model="datosUsuario.nombre">
        </div>
        <div>
          <label for="Nombre">Apellidos del cliente</label>
          <input type="text"
              id="Apellidos"
              class="form-control"
              v-model="datosUsuario.apellidos">
        </div>
        <div>
          <label for="Direccion">Dirección</label>
          <input type="text"
              id="Direccion"
              class="form-control"
              v-model="datosUsuario.direccion">
        </div>
        <div>
          <label for="Telefono">Teléfono</label>
          <input type="text"
              id="Telefono"
              class="form-control"
              v-model="datosUsuario.telefono">
        </div>
        <div>
          <label for="email">Correo electronico</label>
          <input type="text"
              id="email"
              class="form-control"
              v-model="datosUsuario.email">
        </div>
        <div>
          <button @click="guardarCliente" class="btn btn-success">Crear</button>
          
          <button @click="actualizarCliente" class="btn btn-success">Actualizar</button>
          <p>{{ mensaje }}</p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Clientes from "../services/Clientes";
    export default {
        data() {
            return {
                registro: "Registro o actualización de Clientes",
                mensaje:"",
                datosUsuario: {
                    id: null,
                    nombre:'',
                    apellidos: '',
                    email: '',
                    direccion:'',
                    telefono: '',

                }
            }
        },
        methods: {
          guardarCliente(){
            var data = {
              id_cliente: this.datosUsuario.id,
              nombre_cliente: this.datosUsuario.nombre,
              apellidos_cliente: this.datosUsuario.apellidos,
              email_cliente: this.datosUsuario.email,
              direccion_cliente: this.datosUsuario.direccion,
              telefono_cliente: this.datosUsuario.telefono
            };
            Clientes.create(data)
            .then(response => {
              this.datosUsuario.id = response.data.id;
              this.mensaje = "Cliente creado con éxito"
              console.log(response.data);
            })
            .catch(e => {
              this.mensaje = "Error al crear el cliente"
              console.log(e);
            });
          },
          actualizarCliente(){
            var data = {
              nombre_cliente: this.datosUsuario.nombre,
              apellidos_cliente: this.datosUsuario.apellidos,
              email_cliente: this.datosUsuario.email,
              direccion_cliente: this.datosUsuario.direccion,
              telefono_cliente: this.datosUsuario.telefono
            };
            Clientes.update(this.datosUsuario.id,data)
            .then(response => {
              this.datosUsuario.id = response.data.id;
              console.log(response.data);
              this.mensaje = "Cliente actualizado con éxito"
            })
            .catch(e => {
              this.mensaje = "Error al actualizar el cliente"
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
