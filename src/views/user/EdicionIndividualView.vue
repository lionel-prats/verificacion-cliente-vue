<script setup lang="ts">
    // https://vue-magnifier.js.org/
    // npm install @websitebeaver/vue-magnifier
    import VueMagnifier from '@websitebeaver/vue-magnifier'
    import '@websitebeaver/vue-magnifier/styles.css'

    import Button from "@/components/Button.vue"
    import Logo from "@/components/Logo.vue"

    const teclasValor = {1:'DESC 01', 2:'DESC 02', 3:'DESC 03', 4:'DESC 04', 5:'DESC 05', 6:'DESC 06', 7:'DESC 07', 8:'DESC 08', 9:'DESC 09', "0.":'DESC 10', "Q":'DESC 11', "W":'DESC 12', "E":'DESC 13', "R":'DESC 14', "A":'APROBADO'}
    
    /* cias.tipo_descartes_verificacion */
    const tipo_descarte = [
        {
            id: 1,
            descripcion: "DATOS DEL BANER ERRONEO / PRUEBA / TEST / FECHA VENCIDA / BANER AMPLIADO"
        },
        {
            id: 2,
            descripcion: "FOTO EN BLANCO O INEXISTENTE"
        },
        {
            id: 3,
            descripcion: "CORTES DE CALLE / AGENTE DE TRANSITO / ACCCIDENTES / DESVIOS"
        },
        {
            id: 4,
            descripcion: "ERROR EN CARRIL / 2 VEHICULOS EN CARRIL DE MEDICION"
        },
        {
            id: 5,
            descripcion: "OBSTACULO EN VEHICULO O PATENTE / RAMA / CINTA"
        },
        {
            id: 6,
            descripcion: "PATENTE ILEGIBLE  / ADULTERADA / INEXISTENTE / INVENTADA"
        },
        {
            id: 7,
            descripcion: "PATENTE EXTRANJERA / VEHICULOS OFICIALES"
        },
        {
            id: 8,
            descripcion: "SEMAFORO VERDE  - AMARILLO / ROJO AMARILLO / VEHICULO SIN INFRACCION"
        },
        {
            id: 9,
            descripcion: "FOTOS DE NOCHE / VEHICULO NO SE VISUALIZA / PATENTE ILEGIBLE"
        },
        {
            id: 10,
            descripcion: "PUNTERO MAL ENFOCADO"
        },
        {
            id: 11,
            descripcion: "SECUENCIA DE FOTOS NO COINCIDE VEHICULO / AUSENCIA DE VEHICULO"
        },
        {
            id: 12,
            descripcion: "CAMARA FUERA DE FOTO / CAMARA MAL ENFOCADA"
        },
        {
            id: 13,
            descripcion: "CAMARA SUCIA"
        },
        {
            id: 14,
            descripcion: "NOCHE / FOTO OSCURA / FUERA DE FOCO"
        },
        {
            id: 15,
            descripcion: "FILTRO GENERAL ANTIGUO"
        },
    ]

    const logout = () => {
        console.log("cerrar sesion");   
    }
    
    const eliminar = idDescarte => {
        console.log(`Codigo de descarte = ${idDescarte}`);   
    }
    
    const rotarsecuencia = () => {
        console.log("Rotando secuencia");   
    }

</script>

<template>
    <div>
        <header class="flex justify-between w-full items-center px-10 py-5 bg-gray-800">
            <h1 class="text-4xl md:text-5xl">
              <Logo fontSize="text-4xl" />
            </h1>
            <div class="flex flex-col">
                <p class="mb-2 text-center text-white">Usuario: <span class="font-bold">Lionel Prats</span></p>
                <Button 
                    textButton="Cerrar Sesión" 
                    colors="bg-blue-500 hover:bg-blue-600 text-white"
                    :onClick="logout"
                />
            </div>
        </header>
        <div class="flex gap-8 px-3 py-4 mb-8 bg-stone-300">
          <p>Edición individual</p>
          <p>Registros A editar: <span class="font-semibold text-blue-500">91</span></p>
          <p>Equipo: <span class="font-semibold text-amber-950">NEO_0061</span></p>
          <p>Proyecto: <span class="font-semibold text-amber-950">Bahía Blanca</span></p>
          <p class="flex-1 pr-8 text-end">Protocolo Nº 293322</p>
        </div>

        <div class="grid grid-cols-2 w-11/12 m-auto">
        
            <div>
                <VueMagnifier 
                    src="/edicion/209125.PNG" 
                    width="100%"
                    mgWidth="300"
                    mgHeight="200"
                    mgShape="square"
                />
            </div>
        
            <div class="px-4 bg-blue-100x">

                <div class="flex justify-between mb-2">
                    <div class="flex gap-6 items-center">
                        <Button 
                            textButton="Aprobar" 
                            colors="bg-green-700 hover:bg-blue-600 text-white"
                            :onClick="logout"
                        />

                        <!-- Ayuda Atajos de teclado -->
                        <span class="ayuda">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16" style="vertical-align: middle;">
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
                                <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25z"/>
                            </svg>

                            <!-- menu oculto -->
                            <div class="tooltip text-sm">
                                <b style="margin-left: 20px;">Atajos de Teclado</b>
                                <ul class="grid grid-cols-2" style="list-style: none;">
                                    <div class="col-md-4">
                                        <li class="row" v-for="(valor, key) in teclasValor" :key="key" >
                                            Tecla {{ key }} : <b>  {{ valor }}</b>
                                        </li>
                                    </div>
                                    <div class="col-md-6">
                                        <li class="row flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 64 64">
                                                <rect data-name="stroke" x="2" y="2" width="60" height="60" rx="7.8" ry="7.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"/>
                                                <path data-name="stroke" d="M20 46h-2a8 8 0 0 1-8-8v-4a8 8 0 0 1 8-8h2m8 20a2 2 0 0 1-2-2V26m20 20a2 2 0 0 1-2-2V26M34 46V36a2 2 0 0 1 2-2h2m-14-4h6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"/>
                                            </svg>  : Editar Patente
                                        </li>
                                        <li class="row flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                                            </svg>     Enter : Confirmar 
                                        </li>
                                        <li class="row flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                                            </svg>  Arriba   : 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diamond-half" viewBox="0 0 16 16">
                                                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.5.5 0 0 1-.35.145z"/>
                                            </svg>                    
                                            Filtros Imagen
                                        </li>
                                        <li class="row flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                                            </svg>   Abajo  : 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-expand" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8"/>
                                            </svg>
                                            Foto Secuencia
                                        </li>
                                        <li class="row flex gap-2">
                                            Fin : Salir <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                                                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
                                                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
                                            </svg>
                                        </li>
                                        <li class="row flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                            </svg> : Edición Semáforos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stoplights-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6 0a2 2 0 0 0-2 2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1c1.2-.4 1.833-1.5 2-2h-2V8c1.2-.4 1.833-1.5 2-2h-2V4c1.2-.4 1.833-1.5 2-2h-2a2 2 0 0 0-2-2zm3.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                            </svg>

                                        </li>
                                        <li class="row flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
                                            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
                                            </svg> : Cambio Opciones 
                                            <!-- </svg> -->
                                        </li>
                                        <li class="row flex gap-2">
                                            Z : DESHACER ELIMINAR 
                                        </li>                
                                    </div>
                                </ul>
                            </div>

                        </span>
                    </div>
                    <div class="flex gap-2">
                        <Button 
                            textButton="Salir" 
                            colors="bg-red-700 hover:bg-blue-600 text-white"
                            :onClick="logout"
                        />
                        <Button 
                            textButton="Deshacer último" 
                            colors="bg-yellow-600 hover:bg-blue-600 text-white"
                            :onClick="logout"
                        />
                    </div>
                </div>

                <!-- Ayuda Eliminar -->
                <div class="w-24 mb-4">
                    <span class="ayuda">
                        <div class="flex items-center gap-2 font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <label>Eliminar:</label>
                        </div>
                        <!-- Cuadro flotante - Menu oculto -->
                        <div class="tooltip top-10xxx text-xs">
                            <b style="margin-left: 20px;">
                                CODIGOS DE DESCARTE
                            </b>
                            <ul>
                                <div class="col-md-12 p-4">
                                    <li class="row" v-for="descarte in tipo_descarte" style="list-style: none; margin-top: 5px;">
                                        {{ descarte.id }} : {{ descarte.descripcion }}
                                    </li>       
                                </div>
                            </ul>
                            
                        </div>
                    </span>
                </div>  

                <div class="flex gap-2 mb-4">
                    <button 
                        class="w-16 py-3 rounded font-semibold text-center bg-indigo-400" 
                        v-for="descarte in tipo_descarte" 
                        :key="descarte.id" 
                        :value="descarte.id"
                        @click="eliminar(descarte.id)" 
                    >{{ descarte.id }}</button>
                </div>

                <div class="relative w-8/12 mb-9 space-y-3">
                    <p class="font-semibold">Dominio:</p>
                    <img src="/edicion/auto_nuevo.jpg" width="100%" alt="auto_nuevo.jpg">
                    <input 
                        type="text" 
                        class="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 text-5xl text-center uppercase font-extrabold focus:outline-none"
                    >
                </div>

                <div class="flex items-center gap-8">
                    <button class="p-3 rounded font-semibold text-center bg-indigo-400">Guardar</button>
                    <div class="flex items-stretch gap-2">
                        <input 
                            class="w-8 p-3 rounded bg-gray-300"
                            type="text" 
                            disabled 
                            value="1"
                        >
                        <span class="self-center font-bold">Fotos: </span>
                        <button 
                            class="p-3 rounded bg-yellow-500 text-white" 
                            @click="rotarsecuencia"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layer-forward" viewBox="0 0 16 16">
                                <path d="M8.354.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708 0L7 4.207V12H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9V4.207l.646.647a.5.5 0 0 0 .708 0l1-1a.5.5 0 0 0 0-.708z"/>
                                <path d="M1 7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5a.5.5 0 0 0 0-1H1V8h4.5a.5.5 0 0 0 0-1zm9.5 0a.5.5 0 0 0 0 1H15v2h-4.5a.5.5 0 0 0 0 1H15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"/>
                            </svg>
                        </button>
                        <input 
                            class="w-80 p-3 rounded bg-gray-300"
                            type="text" 
                            disabled 
                            value="NE_02661 20241101121431.jpg"
                        >
                    </div>
                    
                </div>

            </div>
        </div>
    </div>  
</template>

<style scoped>
    /* lang="scss" */
    .tooltip {
        visibility: hidden;
        width: 560px;
        /* width: 680px; */
        background-color: #19190A;
        color: #ECF5EA;
        text-align: left;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        /* font-size:1em; */
        left: 50%;
        margin-left: -20px;
        opacity: 0;
        transition: opacity 0.8s;
        font-family: Arial;
    }

    .ayuda:hover .tooltip {
    /* .ayuda .tooltip { */
        visibility: visible;
        opacity: 0.85;
    }
</style>