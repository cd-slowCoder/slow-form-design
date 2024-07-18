<template>
	<div class="flex items-center space-x-4">
		<FormLabel :label="props.label" :required="props.required" />
		<el-checkbox-group v-model="checkList">
			<el-checkbox v-for="item in props.options" :key="item.code" readonly :label="item.val" :value="item.code" />
		</el-checkbox-group>
	</div>
</template>

<script setup lang="ts">
import { ElCheckbox, ElCheckboxGroup } from 'element-plus'
import { defineProps, defineEmits, ref } from 'vue'
import { ITemplateSingleItem } from '../types/record'
import FormLabel from './FormLabel.vue'

const checkList = ref([])

const props = defineProps<ITemplateSingleItem>()

const emits = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const onInput = (value: string) => {
	emits('update:modelValue', value)
}
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
