<script setup>
defineProps(['filtro'])
defineEmits(['update:filtro'])
</script>

<template>
    <div>
        <form>
            <label for="filtro" class="text-gray-700 font-bold mb-2 mr-4 text-lg">
                Filtrar Gastos
            </label>
                <select id="filtro" class="p-2 border bg-white  border-gray-200 rounded-xl mb-4"
                    :value="filtro"
                    @input="$emit('update:filtro', $event.target.value)"

                    >
                    <option value="">-- Todos --</option>
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
        </form>
    </div>
</template>
