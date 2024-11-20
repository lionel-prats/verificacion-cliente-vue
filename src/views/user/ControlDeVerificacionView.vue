<script setup>
    import Button from "@/components/Button.vue"
    import RegistroTablaControlDeVerificacion from "@/components/RegistroTablaControlDeVerificacion.vue"

    const proyectos = [
        {
            id: 1,
            cantidad: 50,
            proyecto: "CABA",
        },
        {
            id: 2,
            cantidad: 15,
            proyecto: "Corrientes",
        },
        {
            id: 3,
            cantidad: 7,
            proyecto: "Salta",
        },
    ]
    const copiarRegistros = () => {
        console.log("copiando registros");
    }
</script>
<template>
    <div class="w-4/5">
        <div class="flex justify-between mb-6">
            <p class="text-2xl font-bold">Impactados</p>
            <Button 
                textButton="Copiar Registros" 
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
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Cantidad</th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Proyecto</th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acción</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <RegistroTablaControlDeVerificacion 
                                    v-for="proyecto in proyectos"
                                    :key="proyecto.id"
                                    :proyecto="proyecto"
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