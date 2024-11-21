import { ref, onMounted } from "vue"
import { defineStore } from "pinia"
import VerificacionAPI from "@/api/VerificacionApi"

export const useVerificacionStore = defineStore("verificacion", () => {

    const obtenerProyectos = ref([])
    
    onMounted(async() => {
        try {
            const { data } = await VerificacionAPI.obtenerProyectos()
            obtenerProyectos.value = data
        } catch(error) {
            console.log(error);
        }
    })

    return {
        // vars/consts

        // states
        obtenerProyectos,
        
        // getters

        // actions
    }
})