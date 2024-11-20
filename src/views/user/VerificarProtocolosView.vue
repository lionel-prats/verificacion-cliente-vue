<script setup>
    import Button from "@/components/Button.vue"
    import RegistroTablaVerificarProtocolos from "@/components/RegistroTablaVerificarProtocolos.vue"

    const protocolos = [
        {
            id: 1,
            protocolo: 308793,
            equipo: "ENFORCER_129",
            proyecto: "CABA",
            fechaTS: "19/11/2024 - 10:20:57",
            estado: "Verificado",
        },
        {
            id: 2,
            protocolo: 307285,
            equipo: "ENFORCER_135",
            proyecto: "CABA",
            fechaTS: "19/11/2024 - 11:40:19",
            estado: "Verificado",
        },
        {
            id: 3,
            protocolo: 308793,
            equipo: "ENFORCER_151",
            proyecto: "CABA",
            fechaTS: "19/11/2024 - 10:43:13",
            estado: "Verificado",
        },
    ]
    const copiarRegistros = () => {
        console.log("copiando registros");
    }
</script>
<template>
    <div class="w-full">
        <div class="flex gap-4 mb-6">
            <p class="text-2xl font-bold">Total: <span class="text-blue-600">124</span></p>
            <Button 
                textButton="Procesar Todo" 
                colors="bg-red-500 hover:bg-red-600 text-white"
                :onClick="copiarRegistros"
            />
            <p class="text-2xl font-bold">Ver Totales</p>
            <Button 
                textButton="Verificadores" 
                colors="bg-blue-500 hover:bg-blue-600 text-white"
                :onClick="copiarRegistros"
            />
        </div>
        <div class="min-h-full">
            <div class="flow-root mx-auto mt-10 p-5 bg-white shadow">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nº Protocolo</th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Equipo</th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Proyecto</th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Cantidad</th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Fecha TS</th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <RegistroTablaVerificarProtocolos 
                                    v-for="protocolo in protocolos"
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