<template>
    <div id="formulario-usuarios">
        <form>
            <div class="container">
                <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                    <label>Apellido</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                    <label>Tipo de Usuario</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                    <button class="btn btn-primary">Añadir persona</button>
                    </div>
                </div>
                </div>
            </div>
    </form>
    </div>
</template>

<script>
    export default {
        name: 'formulario-usuarios',
        data() {
            return {
                persona: {
                nombre: '',
                apellido: '',
                id: '',
                tipoUsuario: '',
            },
        }
        },
    }
</script>

<style scoped>
    form {
        margin-bottom: 2rem;
    }
</style>