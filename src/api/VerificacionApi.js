import api from "@/lib/axios"

export default {
    obtenerProyectos() { // GET a http://localhost:8082/api/obtenerProyectos
        return api.get("/obtenerProyectos")
    },
    verificacionListing() { // GET a http://localhost:8082/api/verificacionListing?...
        return api.get("/verificacionListing?page=page&role=99&userId=292&estados=30")
    },
    listadoTipoDescartes() { // GET a http://localhost:8082/api/listadoTipoDescartes
        return api.get("/listadoTipoDescartes")
    },
    api_edicion_individual(protocolo) { // GET a http://localhost:8082/api/api_edicion_individual/:protocolo
        return api.get(`/api_edicion_individual/${protocolo}`)
    },
    ver_fotos_ssti(queryStringsObject) { // GET a http://localhost:8082/api/ver_fotos_ssti/?...
        queryStringsObject.c = "50"
        queryStringsObject.t = "1"
        queryStringsObject.w = "192"
        queryStringsObject.h = "108"
       
        const queryString = new URLSearchParams(queryStringsObject).toString();
        
        return api.get(`/ver_fotos_ssti/?${queryString}`);
        // return api.get(`/ver_fotos_ssti/?p=293322&f=NE_00611%2020240313155241.jpg&c=50&t=1&w=192&h=108`)
    },
}