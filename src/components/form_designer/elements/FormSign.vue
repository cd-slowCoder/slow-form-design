<template>
	<div class="w-full h-full relative">
		<img src="../../../assets/add-line.png" alt="" class="w-full h-full invisible" />
		<span class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
			<FormLabel :label="props.label" :required="props.required" />
		</span>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ITemplateSingleItem } from '../types/record'
import FormLabel from './FormLabel.vue'
const props = defineProps<ITemplateSingleItem>()
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
