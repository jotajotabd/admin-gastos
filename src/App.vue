<script setup>
import { ref, reactive } from 'vue';
import Presupuesto from './components/Presupuesto.vue';
import ControlPresupuesto from './components/ControlPresupuesto.vue';
import ImagenAgregarGasto from './assets/img/nuevo-gasto.svg';
import Modal from './components/Modal.vue';

const presupuesto = ref(0);
const disponible = ref(0);
const gastado = ref(0);

const modal = reactive({
    mostrar: false,
    animar: false
})

const gasto = reactive({
    nombre: '',
    cantidad: '',
    categoria: '',
    id: null,
    fecha: Date.now()
})

const definirPresupuesto = (cantidad) => {
    presupuesto.value = cantidad;
    disponible.value = cantidad;
}

const mostrarModal = () => {
    modal.mostrar = true;

    setTimeout(() => {
        modal.animar  = true;
    }, 300);
}

const ocultarModal = () => {
    modal.animar  = false;
    setTimeout(() => {
        modal.mostrar = false;
    }, 300);
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
                <ControlPresupuesto
                    v-else
                    :presupuesto="presupuesto"
                    :disponible="disponible"
                />
            </div>
        </header>
        <main v-if="presupuesto > 0">
            <div class="">
                <img    :src="ImagenAgregarGasto"
                        alt="Imagen de agregar gasto"
                        class="w-20 p-2 m-2 fixed bottom-5 right-5 rounded-full shadow-xl cursor-pointer"
                        @click="mostrarModal"
                />
            </div>
            <Modal  v-if="modal.mostrar"
                    @ocultar-modal="ocultarModal"
                    :modal="modal"
                    v-model:nombre="gasto.nombre"
                    v-model:cantidad="gasto.cantidad"
                    v-model:categoria="gasto.categoria"
            />
        </main>
    </div>
</template>