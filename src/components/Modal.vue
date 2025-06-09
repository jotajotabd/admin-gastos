<script setup>
import { ref } from 'vue';
import ImagenCerrarGasto from '../assets/img/cerrar.svg';
import Alerta from './Alerta.vue';

const error = ref('')
const emit = defineEmits(['ocultar-modal','guardar-gasto', 'update:nombre', 'update:cantidad', 'update:categoria']);
const props = defineProps({
    modal:{
        type: Object,
        required: true
    },
    nombre: {
        type: String,
        required:true
    },
    cantidad: {
        type: [String, Number],
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    disponible:{
        type: Number,
        required: true
    }
})

const agregarGasto = () => {
    // Validando los campos
    const { nombre, cantidad, categoria, disponible } = props
    if ([nombre, cantidad, categoria].includes('')){
        error.value = 'Todos los campos son obligatorios'
        setTimeout(() => {
            error.value = ''
        },3000)
        return;
    }

    // if (!nombre || !cantidad || !categoria) {
    //     alert('Todos los campos son obligatorios');
    //     return;
    // }

    // Validar la cantidad
    if (isNaN(cantidad) || cantidad <= 0) {
        error.value = 'Cantidad no válida'
        setTimeout(() => {
            error.value = ''
        },3000)
        return;
    }
    // Validar Disponible
    if (cantidad > disponible) {
        error.value = 'Has excedido el presupuesto'
        setTimeout(() => {
            error.value = ''
        },3000)
        return;
    }


    emit('guardar-gasto')
    // // Emitir el evento para agregar el gasto
    // emit('agregar-gasto', {
    //     nombre,
    //     cantidad: +cantidad,
    //     categoria,
    //     id: Date.now(),
    //     fecha: new Date().toISOString()
    // });

    // // Limpiar los campos
    // emit('update:nombre', '');
    // emit('update:cantidad', '');
    // emit('update:categoria', '');
}
</script>

<template>
    <div class="absolute top-0 left-0 w-full h-screen bg-black opacity-96 flex items-center justify-center">
        <div>
            <img    :src="ImagenCerrarGasto" alt="Imagen de cerrar gastos"
                    class="w-20 p-2 m-2 fixed top-5 right-5 rounded-full shadow-xl cursor-pointer"
                    @click="$emit('ocultar-modal')"
            >
        </div>
        <!-- Ventana Modal -->
        <div    class="w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg mb-48 transition-all"
                :class="(props.modal.animar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10')"
        >
        <h2 class="text-white text-2xl font-bold text-center mb-4">Agregar Nuevo Gasto</h2>
        <Alerta v-if="error">
            {{ error }}
        </Alerta>
        <form   class="bg-white p-6 rounded-lg shadow-lg"
                @submit.prevent="agregarGasto"
        >
                <div class="mb-4">
                    <label for="nombre" class="block text-gray-700 font-bold mb-2">
                        Nombre del Gasto
                    </label>
                    <input id="nombre" type="text" placeholder="Añade el nombre del gasto"
                           class="w-full p-2 border border-gray-300 rounded-lg mb-4"
                           :value="nombre"
                           @input="$emit('update:nombre', $event.target.value)"
                    >
                </div>
                <div class="mb-4">
                    <label for="cantidad" class="block text-gray-700 font-bold mb-2">
                        Cantidad del Gasto
                    </label>
                    <input id="cantidad" type="number" placeholder="Añade la cantidad del gasto"
                           class="w-full p-2 border border-gray-300 rounded-lg mb-4"
                           :value="cantidad"
                            @input="$emit('update:cantidad', +$event.target.value)"

                    >
                </div>
                <div class="mb-4">
                    <label for="categoria" class="block text-gray-700 font-bold mb-2">
                        Cantidad del Gasto
                    </label>
                    <select id="categoria" class="w-full p-2 border border-gray-200 rounded-lg mb-4"
                            :value="categoria"
                            @input="$emit('update:categoria', $event.target.value)"

                    >
                        <option value="">-- Seleccione --</option>
                        <option value="salud">Salud</option>
                        <option value="comida">Comida</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="deudas">Deudas</option>
                        <option value="novia">Novia</option>
                        <option value="apuestas">Apuestas</option>
                        <option value="ocio">Ocio</option>
                        <option value="licor">Licor</option>
                        <option value="chuches">Chucherias</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="gastos">Gastos Varios</option>
                    </select>
                </div>
                    <input  class="bg-green-500 text-white text-center rounded-xl font-bold px-4 py-2 w-full cursor-pointer hover:bg-green-600 transition-colors"
                            type="submit"
                            value="Añadir Gasto"
                    >
            </form>
        </div>
    </div>
</template>


