<script setup>
import { ref, reactive, watch } from 'vue';
import { uid } from 'uid';
import { generarId  } from './helpers';
import Presupuesto from './components/Presupuesto.vue';
import ControlPresupuesto from './components/ControlPresupuesto.vue';
import ImagenAgregarGasto from './assets/img/nuevo-gasto.svg';
import Modal from './components/Modal.vue';
import Gasto from './components/Gasto.vue';

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

const gastos = ref([])

watch(gastos, () =>{
    const totalGastado = gastos.value.reduce((total, gasto) => gasto.cantidad + total, 0)
    gastado.value = totalGastado
    disponible.value = presupuesto.value - totalGastado
}, {
    deep:true
})

watch(modal, () =>{
    if(!modal.mostrar){
        limpiarModal()
    }
}, {
    deep:true
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

const guardarGasto = () => {
        if(gasto.id){
            //Editar registro
            const {id} = gasto
            const index = gastos.value.findIndex((g) => g.id === gasto.id)
            gastos.value[index] = {
                ...gasto
            }
        }else{
            //Registro nuevo
            gastos.value.push({
                ...gasto,
                id: generarId() // Generar id sin dependencias
                // id: uid(),
            })
        }
        ocultarModal()
        // Limpiar campos del modal
        limpiarModal()
    }
const limpiarModal = () => {
        Object.assign(gasto, {
        nombre: '',
        cantidad: '',
        categoria: '',
        id: null,
        fecha: Date.now()
    })
}

const editarGasto = id => {
    const gastoAEditar = gastos.value.filter(gasto => gasto.id === id)[0]
    Object.assign(gasto, gastoAEditar)
    mostrarModal()
}

</script>

<template>
    <div class="bg-gray-200 h-screen" :class="[modal.mostrar] ? 'overflow-scroll': 'overflow-hidden'">
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
                    :gastado="gastado"
                />
            </div>
        </header>
        <main v-if="presupuesto > 0">
            <div class="mt-38">
                <h1 class="font-bold text-gray-600 text-center italic">
                    {{ gastos.length > 0 ? 'Gastos' : 'No hay gastos' }}
                </h1>
                <div class="text-2xl italic font-light text-gray-600 flex justify-between w-4/5 mx-auto p-5 m-5">
                    <p>Nombre</p>
                    <p>Categoria</p>
                    <p>Precio</p>
                </div>
                <Gasto
                    v-for="gasto in gastos"
                    :key="gasto.id"
                    :gasto="gasto"
                    @editar-gasto="editarGasto"
                />
            </div>
            <img    :src="ImagenAgregarGasto"
                    alt="Imagen de agregar gasto"
                    class="w-20 p-2 m-2 fixed bottom-5 right-5 rounded-full shadow-xl cursor-pointer"
                    @click="mostrarModal"
            />
            <Modal  v-if="modal.mostrar"
                    @ocultar-modal="ocultarModal"
                    @guardar-gasto="guardarGasto"
                    :modal="modal"
                    :disponible="disponible"
                    v-model:nombre="gasto.nombre"
                    v-model:cantidad="gasto.cantidad"
                    v-model:categoria="gasto.categoria"
            />
        </main>
    </div>
</template>