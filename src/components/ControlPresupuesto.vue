<script setup>
import imagen from '../assets/img/grafico.jpg';
import { formatearCantidad } from '../helpers';


defineProps({
    presupuesto:{
        type: Number,
        required: true
    },
    disponible:{
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col lg:flex-row justify-center gap-5 bg-white shadow-xl rounded-xl p-5 m-5 items-center mx-auto -mb-40">
        <div class="flex w-1/2 mx-auto justify-center items-center">
            <img :src="imagen" alt="Imagen de gráfico">
        </div>
        <div class="flex flex-col w-1/2 mx-auto justify-center items-center">
            <button class="bg-red-500 text-white rounded-xl font-bold px-4 py-2 w-full cursor-pointer hover:bg-red-600 transition-colors">
                Resetear App
            </button>
            <div class="flex flex-col lg:justify-start lg:items-start gap-3 mt-3 text-xl lg:text-start text-center">
                <p class="text-gray-600">
                    <span class="font-bold text-blue-500">Presupuesto: </span>{{ formatearCantidad(presupuesto) }}
                </p>
                <p class="text-gray-600">
                    <span class="font-bold text-blue-500">Disponible: </span>{{ formatearCantidad(disponible) }}
                </p>
                <p class="text-gray-600">
                    <span class="font-bold text-blue-500">Gastado: </span>0$
                </p>
            </div>
        </div>
    </div>
</template>

