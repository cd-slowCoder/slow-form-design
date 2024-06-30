<template>
	<div class="flex">
		<FormElements class="w-1/4 p-4 border-r" />
		<FormDisplay class="w-2/4 p-4 border-r" />
		<ElementProperties class="w-1/4 p-4" />
	</div>
</template>

<script setup lang="ts">
import FormElements from './child/FormElements.vue'
import FormDisplay from './child/FormDisplay.vue'
import ElementProperties from './child/ElementProperties.vue'
</script>

<style scoped>
.flex {
	display: flex;
	height: 100vh;
}
</style>
