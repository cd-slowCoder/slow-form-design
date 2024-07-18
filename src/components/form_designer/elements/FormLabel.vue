<template>
	<div class="flex items-center">
		<span v-if="props.required" class="text-red-500 ml-1">*</span>
		<span class="text-sm font-medium min-w-[100px]">{{ props.label }} </span>
	</div>
</template>

<script setup lang="ts">
import { defineProps, watchEffect } from 'vue'

interface IProps {
	label: string
	required?: boolean
}

const props = defineProps<IProps>()

watchEffect(() => {
	console.log('FormLabel', props.label)
	console.log('FormLabel', props)
})
</script>

<style scoped></style>
