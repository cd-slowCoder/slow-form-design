<template>
	<div id="app">
		<h1>Form Designer Demo</h1>
		<FormDesigner />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormDesigner from './components/form_designer/FormDesigner.vue'

export default defineComponent({
	name: 'App',
	components: {
		FormDesigner
	}
})
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
