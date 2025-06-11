<script setup>
    import { formatearCantidad, formatearFecha  } from '../helpers';
    import IconoAhorro from '../assets/img/icono_ahorro.svg'
    import IconoCasa from '../assets/img/icono_casa.svg'
    import IconoComida from '../assets/img/icono_comida.svg'
    import IconoGastos from '../assets/img/icono_gastos.svg'
    import IconoOcio from '../assets/img/icono_ocio.svg'
    import IconoSalud from '../assets/img/icono_salud.svg'
    import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'
    import IconoNovia from  '../assets/img/novia.png'
    import IconoDeuda from '../assets/img/deuda.png'
    import IconoLicor from '../assets/img/licor.png'
    import IconoChuches from '../assets/img/chuches.png'
    import IconoApuestas from '../assets/img/apuestas.png'

    const props = defineProps({
        gasto:{
            type: Object,
            required: true
        }
    })

    defineEmits(['editar-gasto'])

    const diccionarioIconos = {
        ahorro : IconoAhorro,
        comida : IconoComida,
        casa : IconoCasa,
        gastos : IconoGastos,
        ocio : IconoOcio,
        salud : IconoSalud,
        suscripciones : IconoSuscripciones,
        novia : IconoNovia,
        deudas : IconoDeuda,
        licor : IconoLicor,
        chuches : IconoChuches,
        apuestas : IconoApuestas
    }
</script>

<template>
    <div class="bg-white shadow-xl rounded-xl lg:w-2/4 w-4/5 p-5 m-5 mx-auto cursor-pointer hover:bg-green-200"
            @click="$emit('editar-gasto',gasto.id)"
    >
        <div class="text-1xl md:text-2xl flex font-black items-center">
            <div class="w-1/3 flex flex-col justify-center items-start text-center">
                <img
                    :src="diccionarioIconos[gasto.categoria]"
                    alt="Icono de Gasto"
                    class="w-14 mb-2"
                >
                <p class="text-center">
                    {{ gasto.nombre }}
                </p>
            </div>
            <div class="w-1/3 flex items-center justify-center">
                <p class="first-letter:uppercase">
                    {{ gasto.categoria }}
                </p>
            </div>
            <div class="flex flex-col justify-center items-end w-1/3">
                <p>
                    {{ formatearCantidad(gasto.cantidad) }}
                </p>
                <span class="text-sm italic font-extralight">
                    Fecha: {{ formatearFecha(gasto.fecha) }}
                </span>
            </div>
        </div>
    </div>
</template>
