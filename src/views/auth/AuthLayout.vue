<script setup>
    import { useRoute } from "vue-router" 
    
    const route = useRoute() 

    const authRoutes = [
        { name: "login", text: "Iniciar Sesión"},
        { name: "recuperar-password", text: "Olvidé mi Password"},
    ]
</script>
<template>
    <div class="h-screen flex justify-center items-center p-5 lg:p-0 bg-gray-800">
        <div class="w-full md:w-8/12 xl:w-5/12">
            <RouterView />
            <nav class="flex justify-between">
                <RouterLink 
                    class="uppercase font-bold text-white"
                    v-for="(authRoute, index) in authRoutes"
                    :class="{ 
                        'hidden': route.name === authRoute.name, 
                        'text-end': index === authRoutes.length - 1
                    }" 
                    :key="authRoute.name"
                    :to="{ name: authRoute.name }"
                >{{ authRoute.text }}</RouterLink>
            </nav>
        </div>
    </div>
</template>
