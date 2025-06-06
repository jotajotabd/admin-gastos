<script setup>
import { ref } from 'vue';
import Presupuesto from './components/Presupuesto.vue';

const presupuesto = ref(0);

const definirPresupuesto = (cantidad) => {
    presupuesto.value = cantidad;
}
</script>

<template>
    <div>
        <header class="bg-blue-500 p-10">
            <h1 class="text-white font-bold text-center">
                Planificador de Gastos
            </h1>
            <div class="bg-white shadow-xl rounded-xl w-1/2 mx-auto">
                <Presupuesto
                    v-if="presupuesto === 0"
                    @definir-presupuesto="definirPresupuesto"
                />
                <p v-else> Presupuesto válido: {{ presupuesto }}</p>
            </div>
        </header>
    </div>
</template>