<script setup>

    import { useVerificacionStore } from '@/stores/verificacion';

    import Button from "@/components/Button.vue"
    import RegistroTablaControlDeVerificacion from "@/components/RegistroTablaControlDeVerificacion.vue"

    const verificacionStore = useVerificacionStore()
    
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
                        <table class="min-w-full divide-y divide-gray-300 text-xs">
                            <thead>
                                <tr>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Cantidad</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Proyecto</th>
                                    <th scope="col" class="p-2 text-left font-extrabold text-gray-600">Acción</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <RegistroTablaControlDeVerificacion 
                                    v-for="proyecto in verificacionStore.obtenerProyectos"
                                    :key="proyecto.id"
                                    :proyecto="proyecto"
                                />
                                <!-- v-for="proyecto in proyectos" -->
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