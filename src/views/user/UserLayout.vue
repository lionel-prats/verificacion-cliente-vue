<script setup>
    import { useRouter } from "vue-router"
    import Button from "@/components/Button.vue"
    import Logo from "@/components/Logo.vue"

    const router = useRouter()

    const logout = () => {
        router.push({ name: "login" })
    }
    
    const updateData = () => {
        console.log("actualizando");
    }
</script>
<template>
    <div class="bg-stone-300">
        <header class="fixed flex justify-between w-full items-center px-10 py-5 bg-gray-800">
            <h1 class="text-4xl md:text-5xl">
                <Logo />
            </h1>
            <div class="flex flex-col bgs-red-100">
                <p class="mb-2 text-center text-white">Usuario: <span class="font-bold">Lionel Prats</span></p>
                <Button 
                    textButton="Cerrar Sesión" 
                    colors="bg-blue-500 hover:bg-blue-600 text-white"
                    :onClick="logout"
                />
            </div>
        </header>
        <main class="flex h-screen overflow-y-hidden">
            <aside class="w-1/6 h-screen pt-32 overflow-y-scroll bg-white">
                <h3 class="mb-6 text-xl font-bold text-center">Verificación</h3>
                <ul>
                    <li class="flex justify-between shadow">
                        <RouterLink 
                            class="w-full p-4 text-sm"
                            active-class="bg-blue-500 text-white font-bold"    
                            :to="{ name: 'control-de-verificacion'}"
                        >Control de Verificación</RouterLink>
                    </li>
                    <li class="flex justify-between shadow">
                        <RouterLink 
                            class="w-full p-4 text-sm"
                            active-class="bg-blue-500 text-white font-bold"   
                            :to="{ name: 'verificar-protocolos'}"
                        >Verificar Protocolos</RouterLink>
                    </li>
                    <li class="flex justify-between shadow">
                        <RouterLink 
                            class="w-full p-4 text-sm"
                            active-class="bg-blue-500 text-white font-bold" 
                            :to="{ name: 'protocolos-asignados'}"
                        >Protocolos Asignados</RouterLink>
                    </li>
                </ul>
            </aside>
            <div class="w-5/6 pt-32 px-10 pb-24">
                <RouterView />
            </div>
        </main>
    </div>
</template>

<!-- 
estoy trabajando con vue3
tengo este componente (src\components\Button.vue)
<script setup>

</script>
<template>
    <button
        type="button"
        class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
    >Cerrar Sesion</button>
</template>


quiero pasarle el texto de manera dinamica


 -->