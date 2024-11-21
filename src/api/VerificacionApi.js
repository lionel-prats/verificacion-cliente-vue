import api from "@/lib/axios"

export default {
    obtenerProyectos() { // GET a http://localhost:8082/api/obtenerProyectos
        return api.get("/obtenerProyectos")
    },
    verificacionListing() { // GET a http://localhost:8082/api/verificacionListing?...
        return api.get("/verificacionListing?page=page&role=99&userId=292&estados=30")
    },
}