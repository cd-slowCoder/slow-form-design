<template>
	<div>
		<div>
			<h2 class="text-xl font-bold mb-4">容器元素</h2>
			<div ref="containerEl" class="grid grid-cols-2 gap-4">
				<div v-for="element in containerElements" :key="element.id" class="p-4 bg-gray-200 rounded shadow" :type="element.type">
					{{ element.label }}
				</div>
			</div>
		</div>
		<div class="mt-4">
			<h2 class="text-xl font-bold mb-4">表单元素</h2>
			<div ref="formEl" class="grid grid-cols-2 gap-4">
				<div v-for="element in elements" :key="element.id" class="p-4 bg-gray-200 rounded shadow" :type="element.type">
					{{ element.label }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IElement } from '../types/Element'
import { useDraggable } from 'vue-draggable-plus'
import { generateRandomId } from '../utils/index'

const containerElements = ref<IElement[]>([
	{ id: '1', label: '卡片', type: 'container', value: '' },
	{ id: '2', label: '签名', type: 'signs', value: '' },
	{ id: '3', label: '照片', type: 'photos', value: '' }
])

const elements = ref<IElement[]>([
	{ id: '', label: '输入框', type: 'input', value: '' },
	{ id: '', label: '复选框', type: 'checkbox', value: '' },
	{ id: '', label: '单选框', type: 'radio', value: '' }
])

const formEl = ref(null)
const containerEl = ref(null)

useDraggable(formEl, elements, {
	animation: 150,
	group: {
		name: 'elements',
		pull: 'clone',
		put: false
	},
	sort: false,
	clone(element: IElement) {
		return {
			label: element.label,
			type: element.type,
			id: `${generateRandomId()}`,
			value: ''
		}
	}
})

useDraggable(containerEl, containerElements, {
	animation: 150,
	group: {
		name: 'container',
		pull: 'clone',
		put: false
	},
	sort: false,
	clone(element: IElement) {
		return {
			label: element.label,
			type: element.type,
			id: `${generateRandomId()}`,
			value: ''
		}
	}
})
</script>

<style scoped>
.draggable {
	display: grid;
	gap: 1rem;
}
</style>
../types/Element
