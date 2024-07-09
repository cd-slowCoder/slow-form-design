<template>
	<div>
		<h2 class="text-[30px] font-bold mb-4">表单展示区域</h2>

		<el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab" @tab-change="tabChange">
			<el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.name" :name="item.name">
				<VueDraggable v-model="formElements" class="grid grid-cols-1 gap-4" :move="moveEle" group="container">
					<div v-if="formElements.length === 0" class="text-center text-gray-500">
						<p>将元素拖拽到此处</p>
					</div>
					<div v-for="ele in formElements" :key="ele.id">
						<Card :key="ele.id" :data="ele.templateSingleItemList || []" :name="ele.name" />
					</div>
				</VueDraggable>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { IRecord } from '../types/record'
import { defineProps } from 'vue'
import Card from '../container/Card.vue'
import ControllBox from './ControllBox.vue'

const formElements = ref<IRecord[]>([])

const props = defineProps<{ data: IRecord[] }>()

const editableTabsValue = ref()
const editableTabs = ref<IRecord[]>()

onMounted(() => {
	const currData = props.data
	editableTabs.value = currData
	editableTabsValue.value = currData.length > 0 ? currData[0].name : ''
	const currForm = currData[0].children || []
	formElements.value = currForm
	console.log('formElements.value ', currForm, formElements.value)
})

const removeTab = (name: string | number) => {}

const tabChange = (name: string | number) => {
	const currData = props.data
	const currForm = currData.find(item => item.name === name)?.children || []
	formElements.value = currForm
}

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
