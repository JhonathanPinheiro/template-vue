<script setup lang="ts">
import { appToast } from '@/shared/ui/toast'
import Button from 'primevue/button'

function forcarError() {
  appToast.error({
    title: 'Erro Forçado',
    description: 'Este é um erro simulado para demonstrar o Toast do PrimeVue',
  })
}

function forcarSucesso() {
  appToast.success({
    title: 'Sucesso!',
    description: 'Esta é uma mensagem de sucesso para você.',
  })
}
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
    <div class="max-w-lg w-full bg-white p-10 rounded-xl shadow-lg text-center">
      <h1 class="text-4xl font-extrabold mb-6">Template Demo PrimeVue</h1>

      <p class="mb-10 text-gray-700 text-lg leading-relaxed">
        Este template inicial vem com PrimeVue configurado e pronto para uso, incluindo sistema de
        notificações via Toast e estrutura pronta para consumo de dados e manipulação de estados. É
        um ponto de partida funcional e moderno para acelerar o desenvolvimento do seu projeto Vue
        3.
      </p>

      <div class="flex justify-center gap-6">
        <Button
          label="Forçar Erro"
          severity="danger"
          raised
          class="min-w-[140px]"
          @click="forcarError"
        />
        <Button
          label="Forçar Sucesso"
          severity="success"
          raised
          class="min-w-[140px]"
          @click="forcarSucesso"
        />
      </div>
    </div>
  </main>
</template>
