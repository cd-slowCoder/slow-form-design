<template>
	<div class="flex items-center space-x-4">
		<ElCard shadow="hover" class="w-full">
			<template #header>
				<h2 class="text-left">标题</h2>
			</template>
			<div class="min-h-28">
				<VueDraggable
					v-model="formElements"
					class="grid grid-cols-1 gap-4"
					:move="moveEle"
					group="elements"
					@add="e => handleAdd(e)"
					@change="handleChange"
					@end="onEnd"
					@remove="handleRemove"
				>
					<div v-for="element in formElements" :key="element.id" class="p-4 bg-white rounded shadow cursor-pointer hover:border-red-500">
						<FormInput v-if="element.type === 'input'" v-bind="element" />
						<FormCheckbox v-else-if="element.type === 'checkbox'" v-bind="element" />
						<span v-else> {{ element.label }}</span>
					</div>
				</VueDraggable>
			</div>
		</ElCard>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElCard } from 'element-plus'
import { VueDraggable } from 'vue-draggable-plus'
import { IElement } from '../states/Element'
import FormInput from '../elements/FormInput.vue'
import FormCheckbox from '../elements/FormCheckbox.vue'
import { generateRandomId } from '../utils/index'

const formElements = ref<IElement[]>([])

const removeEle = (element: Element) => {
	console.log('选中元素', element)
	// 在这里可以添加更多逻辑来处理选中元素
}
const handleChange = (event: any) => {
	console.log(
		'元素变动',
		formElements.value,
		formElements.value.find(item => item.id === '')
	)
	const { added } = event
	if (added) {
		const element = formElements.value[added.newIndex]
		console.log('插入的元素', element)
		// 在这里修改插入的元素数据
		element.label = '新插入的元素'
	}
}

const handleRemove = (event: any) => {
	const oldElement = event.item._underlying_vm_ // 获取移出的元素
	if (!oldElement || !oldElement.allowed) {
		// 根据某个属性判断是否允许移出
		// formElements.value.splice(event.oldIndex, 0, oldElement) // 如果不允许移出，将元素添加回去
	}
	// formElements.value.splice(event.oldIndex, 0, oldElement)
}

const moveEle = (element: Element) => {
	console.log('选中元素', element)
	// 在这里可以添加更多逻辑来处理选中元素
}

const onEnd = (element: any) => {
	console.log('选中元素end', element)
	// 在这里可以添加更多逻辑来处理选中元素
}

const handleAdd = (event: any) => {
	const newElement = event.item._underlying_vm_ // 获取新添加的元素
	if (!newElement || !newElement.allowed) {
		// 根据某个属性判断是否允许添加
	}
	console.log('event', event)
	// formElements.value.splice(event.newIndex, 1) // 移除不符合条件的元素
}
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
