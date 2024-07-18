<template>
	<div class="flex items-center space-x-4">
		<FormLabel :label="props.label" :required="props.required" />
		<el-radio-group :value="checkValue">
			<el-radio v-for="item in props.options" :key="item.code" disabled :label="item.val" :value="item.code" />
		</el-radio-group>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { ITemplateSingleItem } from '../types/record'
import FormLabel from './FormLabel.vue'

const checkValue = ref()

const props = defineProps<ITemplateSingleItem>()
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
