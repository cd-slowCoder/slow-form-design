<template>
	<div id="app">
		<FormDesigner ref="formRef" :data="demo" />
	</div>
</template>

<script lang="ts" setup>
import FormDesigner from './components/form_designer/FormDesigner.vue'
import { demo } from '@/components/demo'
import { ref, onMounted } from 'vue'

const formRef = ref<typeof FormDesigner | null>(null)

onMounted(() => {
	setTimeout(() => {
		console.log('formRef.value?.storeData', formRef.value?.storeData)
	}, 3000)
})
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: #2c3e50;
	margin-top: 20px;
}
</style>
