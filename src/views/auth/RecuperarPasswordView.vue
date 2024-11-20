<script setup>
    import Logo from "@/components/Logo.vue"
</script>

<template>
    <h1 class="flex flex-col items-center gap-4 mb-10 text-4xl md:text-5xl font-bold text-white">
        <Logo />
        Recuperar Password
    </h1>
    
    
    <FormKit
        type="form"
        :actions="false"
        incomplete-message="La información de uno o más campos es incorrecta"
    >   
    <!-- @submit="handleSubmit"  -->
        <FormKit 
            type="email"
            label="Email"
            name="email"
            placeholder="email@ejemplo.com"
            validation="required|email"
            :validation-messages="{ 
                required: 'El email es obligatorio',
                email: 'Email no válido',
            }" 
        />
            
        <FormKit type="submit">Recuperar Password</FormKit>
    </FormKit>
</template>
