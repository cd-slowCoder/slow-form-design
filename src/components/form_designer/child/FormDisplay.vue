<template>
	<div class="h-full overflow-y-auto pb-16">
		<h2 class="text-[30px] font-bold mb-4">表单展示区域</h2>
		<el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab" @tab-change="tabChange">
			<el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.name" :name="item.id">
				<VueDraggable v-model="formElements" class="grid grid-cols-1 gap-4" group="container" @add="handleAdd" @end="onEnd">
					<div v-if="formElements.length === 0" class="text-center text-gray-500">
						<p>将元素拖拽到此处</p>
					</div>
					<div v-for="(ele, index) in formElements" :key="ele.id">
						<Card :key="ele.id" :index="index" :data="ele.templateSingleItemList || []" :name="ele.name" :template-id="ele.id" @copy="handleCopy" />
					</div>
				</VueDraggable>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import Card from '../container/Card.vue'
import { useDataStore } from '../stores/dataSource'
import { defaultTabData, defaultContainerData } from '../stores/config/detaultData'
import { generateRandomId } from '../utils'
import { ITemplateSingleItem, IRecord } from '../types/record'

const store = useDataStore()

const formElements = computed(() => {
	return store.getSelectedTab?.children || []
})

const editableTabs = computed(() => {
	return store.data || []
})

const editableTabsValue = ref()
// const editableTabs = ref<IRecord[]>()

onMounted(() => {
	const tableId = editableTabs.value.length ? editableTabs.value[0].id : 0
	store.selectedTabId = tableId
	editableTabsValue.value = tableId
})

const removeTab = (name: string | number) => {}

const tabChange = (name: string | number) => {
	store.selectedTabId = parseFloat(`${name}`)
	editableTabsValue.value = name
}

const handleAdd = (event: any) => {
	const newIndex = event.newIndex
	const parentId = store.selectedTabId // 根据你的数据结构设定

	const itemType = event.item.getAttribute('type')

	console.log(event.item, itemType, newIndex, parentId)

	const newItem = {
		...defaultContainerData,
		parentId: parentId,
		id: generateRandomId()
	}

	store.insertExternalItem({ parentId, newIndex, newItem })
}

const onEnd = (event: any) => {
	const oldIndex = event.oldIndex
	const newIndex = event.newIndex
	const parentId = store.selectedTabId // 根据你的数据结构设定

	store.moveItemWithinSameLevel({ parentId, oldIndex, newIndex })
}

const handleCopy = (item: ITemplateSingleItem[], index: number, name: string) => {
	const parentId = store.selectedTabId
	const newIndex = index + 1
	const newItem = {
		...defaultContainerData,
		templateSingleItemList: item,
		parentId: parentId,
		name: name,
		id: generateRandomId()
	}

	store.insertExternalItem({ parentId, newIndex, newItem })
}
</script>

<style scoped></style>
