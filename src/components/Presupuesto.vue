<script setup>
import { ref } from 'vue';
import Alerta from './Alerta.vue';

const presupuesto = ref(0);
const error = ref ('');

const emit = defineEmits(['definir-presupuesto']);

const definirPresupuesto = () => {
    if (presupuesto.value <= 0 ) {
        error.value = 'El presupuesto no es válido';
        setTimeout(() => {
            error.value = '';
        }, 3000);
        return;
    }else {
        emit('definir-presupuesto', presupuesto.value);
    }
}
</script>

<template>
    <form   class="p-5 -mb-30 items-center w-full bg-white shadow-xl rounded-xl"
            @submit.prevent="definirPresupuesto"
    >

    <Alerta v-if="error">
        {{ error }}
    </Alerta>

        <div class="p-2 m-2 font-black text-center text-gray-600">
            <label for="nuevo-presupuesto" class="block text-2xl mb-5">
                Definir Presupuesto
            </label>
            <input  type="number"
                    id="nuevo-presupuesto"
                    placeholder="Añade tu presupuesto"
                    class="text-center border-2 border-gray-300 p-2 w-full placeholder:text-center"
                    v-model.number="presupuesto"
            />
        </div>
        <div class="p-2 m-2 ">
            <input  type="submit"
                    value="Añadir"
                    class="bg-blue-500 text-white rounded-xl font-bold p-2 w-full cursor-pointer hover:bg-blue-600 transition-colors" 
            />
        </div>
    </form>
</template>


