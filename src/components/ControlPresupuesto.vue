<script setup>
import { computed } from "vue";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { formatearCantidad } from '../helpers';


const props = defineProps({
    presupuesto:{
        type: Number,
        required: true
    },
    disponible:{
        type: Number,
        required: true
    },
    gastado:{
        type: Number,
        required: true
    }
})

defineEmits(['resetear-app'])

// Forma para dar el total de disponible por el envio de props --> Cambiar la forma de llamarlo en el span "formatearCantidad(totalDisponible)"
// const totalDisponible = computed(() => {
//         return props.presupuesto - props.gastado
// })

const porcentaje = computed(() => {
    return parseInt(((props.presupuesto - props.disponible) / props.presupuesto) * 100)
})

</script>

<template>
    <div class="flex flex-col lg:flex-row justify-center gap-5 bg-white shadow-xl rounded-xl p-5 m-5 items-center mx-auto -mb-40">
        <div class="flex w-1/2 mx-auto justify-center items-center flex-col gap-5">
            <CircleProgress
                :percent="porcentaje"
                :size="200"
                :border-width="30"
                :border-bg-width="30"
            />
            <div class="text-blue-500 font-black text-4xl relative -top-35">
                {{ porcentaje }}%
            </div>
        </div>
        <div class="flex flex-col w-1/2 mx-auto justify-center items-center">
            <button type="button"
                    @click="$emit('resetear-app')"
                    class="bg-red-500 text-white rounded-xl font-bold px-4 py-2 w-full cursor-pointer hover:bg-red-600 transition-colors">
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
                    <span class="font-bold text-blue-500">Gastado: </span> {{ formatearCantidad(gastado) }}
                </p>
            </div>
        </div>
    </div>
</template>

