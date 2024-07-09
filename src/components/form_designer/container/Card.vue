<template>
	<div class="flex items-center space-x-4 cursor-pointer">
		<component :is="renderDialog({ type: 'warning' })" />
		<ElCard shadow="hover" class="w-full">
			<template #header>
				<div class="flex justify-between">
					<h2 class="text-left hover:text-blue-700">{{ props.name }}</h2>
					<div>
						<el-button type="primary">复制</el-button>
						<el-button type="danger" @click="openDialog">删除</el-button>
					</div>
				</div>
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
					<div
						v-for="element in formElements"
						:key="element.id"
						class="p-4 bg-white rounded shadow cursor-pointer hover:border-2 hover:border-blue-500 transition border-opacity-0 hover:border-opacity-100"
					>
						<FormInput v-if="element.type === 'input'" v-model="element.value" v-bind="element" />
						<FormCheckbox v-else-if="element.type === 'checkbox'" v-model="element.value" v-bind="element" />
						<FormRadio v-else-if="element.type === 'radio'" v-model="element.value" v-bind="element" />
						<span v-else> {{ element.label }}</span>
					</div>
				</VueDraggable>
			</div>
		</ElCard>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElCard } from 'element-plus'
import { VueDraggable } from 'vue-draggable-plus'
import { ITemplateSingleItem } from '../types/record'
import FormInput from '../elements/FormInput.vue'
import FormCheckbox from '../elements/FormCheckbox.vue'
import FormRadio from '../elements/FormRadio.vue'
import { useDialog } from '../../hooks/useDialog'

const confirmCancel = () => {
	console.log('Dialog confirmed')
	// 在这里添加你要执行的逻辑
}

const { openDialog, renderDialog } = useDialog({ onOk: confirmCancel })

const formElements = ref<ITemplateSingleItem[]>([])

const props = defineProps<{ data: ITemplateSingleItem[]; name: string }>()

onMounted(() => {
	formElements.value = props.data
})

const removeEle = (element: Element) => {
	console.log('选中元素', element)
	// 在这里可以添加更多逻辑来处理选中元素
}
const handleChange = (event: any) => {
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
../types/Element ../../hooks/useDialog
