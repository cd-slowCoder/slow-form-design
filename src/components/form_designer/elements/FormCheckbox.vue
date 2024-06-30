<template>
	<div class="flex items-center space-x-4">
		<label class="text-sm font-medium min-w-[100px]">{{ props.label }}</label>
		<ElCheckbox v-model="inputValue" label="1" />
		<ElCheckbox v-model="inputValue" label="2" />
	</div>
</template>

<script setup lang="ts">
import { ElCheckbox } from 'element-plus'
import { ref, defineProps, watch, defineEmits } from 'vue'
import { IElement } from '../states/Element'

const props = defineProps<IElement>()
const emits = defineEmits(['update:value'])

// 使用 ref 来创建响应式数据
const inputValue = ref(props.value)

// 监听输入框值的变化
watch(
	() => props.value,
	newValue => {
		inputValue.value = newValue
	}
)

// 监听输入框值的变化并传递到父组件
watch(inputValue, newValue => {
	emits('update:value', newValue)
})
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
