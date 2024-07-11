<template>
	<div class="flex items-center space-x-4">
		<label class="text-sm font-medium min-w-[100px]">{{ props.label }}</label>
		<ElInput :value="modelValue" readonly placeholder="Enter value" @input="onInput" />
	</div>
</template>

<script setup lang="ts">
import { ElInput } from 'element-plus'
import { defineProps, defineEmits, ref, onMounted } from 'vue'
import { ITemplateSingleItem } from '../types/record'

const modelValue = ref('')

const props = defineProps<ITemplateSingleItem>()

const emits = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

onMounted(() => {
	modelValue.value = `${props.value || ''}`
})

const onInput = (value: string) => {
	emits('update:modelValue', value)
}
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
