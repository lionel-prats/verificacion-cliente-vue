<script setup>
    import { onMounted, ref, computed } from "vue"
    import VerificacionAPI from "@/api/VerificacionApi"

    import RegistroTablaProtocolosAsignados from "@/components/RegistroTablaProtocolosAsignados.vue"

    onMounted(async() => {
        try {
            const { data } = await VerificacionAPI.verificacionListing()
            verificacionListing.value = data
        } catch(error) {
            console.log(error);
        }
    })

    // states
    const verificacionListing = ref([])

    // actions
    const copiarRegistros = () => {
        console.log("copiando registros");
    }

    // computed properties
    const totalRegistros = computed( () => {
        return verificacionListing.value.length
    })

</script>
<template>
    <div class="w-full">
        <div class="flex gap-4 mb-11">
            <p class="text-2xl font-bold">Total: <span class="text-blue-600">{{ totalRegistros }}</span></p>
        </div>
        <div class="min-h-full">
            <div class="flow-root mx-auto mt-10 p-5 bg-white shadow">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300 text-xs">
                            <thead>
                                <tr>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">NºProtocolo</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Equipo</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Proyecto</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Cantidad</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Fecha TS</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Verificador</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Estado</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <RegistroTablaProtocolosAsignados 
                                    v-for="protocolo in verificacionListing"
                                    :key="protocolo.id"
                                    :protocolo="protocolo"
                                />
                                <!-- @actualizar-estado="actualizarEstado"
                                @eliminar-cliente="eliminarCliente" -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>