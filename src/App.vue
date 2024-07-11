<template>
	<div id="app">
		<div>
			<button @click="getData">获取数据</button>
		</div>
		<FormDesigner ref="formRef" :data="demo" />
	</div>
</template>

<script lang="ts" setup>
import FormDesigner from './components/form_designer/FormDesigner.vue'
import { demo } from '@/components/demo'
import { ref, onMounted } from 'vue'

const formRef = ref<typeof FormDesigner | null>(null)

const getData = () => {
	console.log('formRef.value?.storeData', formRef.value?.storeData)
}
</script>

<style>
html,
body,
#app {
	height: 100%;
	width: 100%;
}
* {
	padding: 0;
	box-sizing: border-box;
	margin: 0;
}
</style>
