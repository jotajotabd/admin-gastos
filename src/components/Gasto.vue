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
    <div class="bg-white shadow-xl rounded-xl w-4/5 p-5 m-5 mx-auto">
        <div class="text-2xl flex justify-between font-black items-center">
            <p class="flex flex-col justify-center items-center">
                <img
                    :src="diccionarioIconos[gasto.categoria]"
                    alt="Icono Gasto"
                    class="w-14 mb-2"
                >
                {{ gasto.nombre }}
            </p>
            <p class="first-letter:uppercase pl-28">
                {{ gasto.categoria }}
            </p>
            <p class="flex flex-col items-end">
                {{ formatearCantidad(gasto.cantidad) }}
                <span class="text-sm italic font-extralight">
                    Fecha: {{ formatearFecha(gasto.fecha) }}
                </span>
            </p>
        </div>
    </div>
</template>
