<script setup>
    import {computed} from "vue"
    import {RouterLink} from "vue-router"

    import ButtonXS from "@/components/ButtonXS.vue"

    // defineEmits(["actualizar-estado", "eliminar-cliente"])

    const props = defineProps({
        protocolo: {
            type: Object,
        }
    })

    /* const nombreCliente = computed( () => {
        const {nombre, apellido} = props.cliente
        return `${nombre} ${apellido}`
    }) */
    
    /* const estadoCliente = computed( () => {
        return props.cliente.estado
    }) */
    const verDetalles = () => {
        console.log("copiando registros");
    }

</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-2 pr-3">
            <p class="text-gray-900 font-bold">{{protocolo.id_protocolo}}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-gray-500">
            <p class="text-gray-900 font-bold">{{protocolo.equipo_serie}}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-gray-500">
            <p class="text-gray-900 font-bold">{{protocolo.proyecto}}</p>
        </td>
        <td class="whitespace-nowrap py-4 text-gray-500">
            <ButtonXS 
                textButton="Ver Detalles" 
                colors="bg-blue-500 hover:bg-blue-600 text-white"
                :onClick="verDetalles"
            />
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-gray-500">
            <p class="text-gray-900 font-bold">{{protocolo.ts}}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-gray-500">
            <p class="text-gray-900 font-bold">{{protocolo.name_verificador}}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-gray-500">
            <p class="pb-2 text-gray-900 font-bold">{{protocolo.verificacion_nombre}}</p>
            <button title="Volver a Asignar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 p-1 bg-yellow-500 text-white rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
            </button>

        </td>
        <td class="whitespace-nowrap flex gap-2 px-3 pt-10 text-gray-500 ">
            <button title="Descarte General">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-7 p-1 bg-indigo-500 text-white rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>


            <RouterLink 
                target="_blank"
                title="Edición Individual"
                active-class="bg-blue-500 text-white font-bold"  
                :to="{ name: 'edicion-individual', params: { idprotocolo: protocolo.id_protocolo } }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 p-1 bg-orange-400 text-white rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </RouterLink>
            
            <!-- <button title="Edición Individual">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 p-1 bg-orange-400 text-white rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </button> -->
            
            
            
            
            <button title="Revisar Protocolo">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 p-1 bg-red-500 text-white rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>


            </button>
            <button title="Cerrar Asignación">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 p-1 bg-green-700 text-white rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            </button>
        </td>
    </tr>
</template>