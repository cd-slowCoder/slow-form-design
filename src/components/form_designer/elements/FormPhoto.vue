<template>
	<div class="w-full h-20 relative">
		<img src="../../../assets/add-line.png" alt="" class="w-full h-20 invisible" />
		<span class="absolute left-0 top-1/2 -translate-y-1/2"> {{ $props.label }} </span>
		<span class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"> 选中设置照片 </span>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ITemplateSingleItem } from '../types/record'

const props = defineProps<ITemplateSingleItem>()
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
