<template>
	<div class="h-full overflow-y-auto pb-16">
		<component :is="renderDialog(renderDialogParams)">
			<template #default>
				<div v-for="(item, index) in settingTabs" :key="index" class="flex items-center mb-4">
					<label class="text-sm font-medium min-w-[70px]">Tab标题：</label>
					<ElInput v-model="item.name" placeholder="Enter value" />
					<img src="../../../assets/remove.png" alt="" class="ml-4 w-6 h-6 cursor-pointer" @click="handleSetting('del', index)" />
					<img src="../../../assets/copy.png" alt="" class="ml-4 w-6 h-6 cursor-pointer" @click="handleSetting('copy', index)" />
				</div>
				<img src="../../../assets/add.png" alt="" class="w-8 h-8 cursor-pointer" @click="handleSetting('add')" />
			</template>
			<template #footer>
				<component :is="renderFooter()"></component>
			</template>
		</component>
		<h2 class="text-[30px] font-bold mb-4">表单展示区域 <el-button type="primary" text class="ml-4" @click="openSetting">Tab 配置</el-button></h2>
		<el-tabs v-model="editableTabsValue" type="card" @tab-change="tabChange">
			<el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.name" :name="item.id">
				<VueDraggable v-model="formElements" class="grid grid-cols-1 gap-4" group="container" @add="handleAdd" @end="onEnd">
					<div v-if="formElements.length === 0" class="text-center text-gray-500">
						<p>将元素拖拽到此处</p>
					</div>
					<div v-for="(ele, index) in formElements" :key="ele.id">
						<Signs
							v-if="ele.isSign || false"
							:key="ele.id"
							:index="index"
							:data="ele.templateSingleItemList || []"
							:name="ele.name"
							:template-id="ele.id"
							@copy="handleCopy"
						/>
						<Card
							v-else
							:key="ele.id + ''"
							:index="index"
							:data="ele.templateSingleItemList || []"
							:name="ele.name"
							:template-id="ele.id"
							@copy="handleCopy"
						/>
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
import Signs from '../container/Signs.vue'

import { useDataStore } from '../stores/dataSource'
import { defaultTabData, defaultContainerData, defaultItemData } from '../stores/config/detaultData'
import { generateRandomId } from '../utils'
import { ITemplateSingleItem, IRecord, TemplateSingleItemType } from '../types/record'
import { IDialogProps, useDialog } from '../../hooks/useDialog'

const store = useDataStore()

const formElements = computed(() => {
	return store.getSelectedTab?.children || []
})

const editableTabs = computed(() => {
	return store.getData || []
})

const settingTabs = ref<IRecord[]>([])

const editableTabsValue = ref()

onMounted(() => {
	const tableId = editableTabs.value.length ? editableTabs.value[0].id : 0
	store.selectedTabId = tableId
	editableTabsValue.value = tableId
})

const confirmDialog = () => {
	store.setData(
		settingTabs.value.map(item => {
			return {
				...item
			}
		})
	)
}
const { openDialog, renderDialog, renderFooter } = useDialog({ onOk: confirmDialog })
const renderDialogParams = ref<IDialogProps>({
	type: 'warning',
	title: 'Tab 配置'
})

const openSetting = () => {
	settingTabs.value = editableTabs.value.map(item => {
		return {
			...item
		}
	})
	openDialog()
}

const handleSetting = (type: 'add' | 'copy' | 'del', index?: number) => {
	switch (type) {
		case 'add':
			settingTabs.value.push({
				...defaultTabData,
				id: generateRandomId(),
				name: '标题示例'
			})
			break
		case 'copy':
			if (index !== undefined) {
				settingTabs.value.push({
					...settingTabs.value[index],
					id: generateRandomId(),
					name: '标题示例'
				})
			}
			break
		case 'del':
			if (index !== undefined) {
				settingTabs.value.splice(index, 1)
			}
			break
		default:
			break
	}
}

const tabChange = (name: string | number) => {
	store.selectedTabId = parseFloat(`${name}`)
	editableTabsValue.value = name
}

const handleAdd = (event: any) => {
	const newIndex = event.newIndex
	const parentId = store.selectedTabId // 根据你的数据结构设定

	const itemType = event.item.getAttribute('type')

	console.log(event.item, itemType, newIndex, parentId)

	const tabId = generateRandomId()

	const newItem = {
		...defaultContainerData,
		parentId: parentId,
		isSign: itemType == TemplateSingleItemType.Signs ? true : false,
		id: tabId
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
