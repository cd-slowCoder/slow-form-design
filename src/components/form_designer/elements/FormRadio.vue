<template>
	<div class="flex items-center space-x-4">
		<label class="text-sm font-medium min-w-[100px]">{{ props.label }}</label>
		<el-radio-group :value="checkValue">
			<el-radio v-for="item in props.options" :key="item.code" disabled :label="item.val" :value="item.code" />
		</el-radio-group>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { ITemplateSingleItem } from '../types/record'

const checkValue = ref()

const props = defineProps<ITemplateSingleItem>()
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
