<template>
    <header>
        <div class="inicio">
            <h1>{{ bienvenida2 }}</h1><br>
            <h3>{{ instruccion }}</h3>
            <h5>{{ indicaciones }}</h5><br>
        </div>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Inicio</RouterLink>
                <RouterLink to="/TablaUsuarios">Gestión de usuarios</RouterLink>
                <RouterLink to="/about">Prueba de extensión</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import TablaUsuarios from './components/TablaUsuarios.vue'
</script>

<style scoped>
header {
            line-height: 1.5;
            max-height: 100vh;
        }
    
        .logo {
            display: block;
            margin: 0 auto 2rem;
        }
    
        nav {
            width: 100%;
            font-size: 12px;
            text-align: center;
            margin-top: 2rem;
        }
    
        nav a.router-link-exact-active {
            color: var(--color-text);
        }
    
        nav a.router-link-exact-active:hover {
            background-color: transparent;
        }
    
        nav a {
            display: inline-block;
            padding: 0 1rem;
            border-left: 1px solid var(--color-border);
        }
    
        nav a:first-of-type {
            border: 0;
        }
    
        @media (min-width: 1024px) {
            header {
                display: flex;
                place-items: center;
                padding-right: calc(var(--section-gap) / 2);
            }
    
            .logo {
                margin: 0 2rem 0 0;
            }
    
            header .wrapper {
                display: flex;
                place-items: flex-start;
                flex-wrap: wrap;
            }
    
            nav {
                text-align: right;
                margin-left: -1rem;
                font-size: 1rem;
    
                padding: 1rem 0;
                margin-top: 1rem;
            }
        }
</style>
