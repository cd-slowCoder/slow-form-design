<template>
	<div>
		<h2 class="text-xl font-bold mb-4">表单展示区域</h2>
		<VueDraggable v-model="formElements" class="grid grid-cols-1 gap-4" :move="moveEle" group="container">
			<div v-for="item in formElements" :key="item.id">
				<Card />
			</div>
		</VueDraggable>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { IElement } from '../states/Element'
import Card from '../container/Card.vue'
import { generateRandomId } from '../utils/index'

const formElements = ref<IElement[]>([])

const removeEle = (element: Element) => {
	console.log('选中元素', element)
	// 在这里可以添加更多逻辑来处理选中元素
}

const moveEle = (element: Element) => {
	console.log('选中元素', element)
	// 在这里可以添加更多逻辑来处理选中元素
}

const selectElement = (element: Element) => {
	console.log('选中元素', element)
	// 在这里可以添加更多逻辑来处理选中元素
}
</script>

<style scoped>
.draggable {
	display: grid;
	gap: 1rem;
}
</style>
