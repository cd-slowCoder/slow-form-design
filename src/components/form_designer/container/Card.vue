<template>
	<div class="flex items-center space-x-4 cursor-pointer">
		<component :is="renderDialog({ type: 'warning' })" />
		<ElCard shadow="hover" class="w-full">
			<template #header>
				<div class="flex justify-between">
					<div class="text-left hover:text-blue-700 flex space-x-4 items-center">
						<span v-show="!editContainer || !showEdit">{{ props.name || '请编辑标题' }}</span>
						<div v-if="formCard">
							<el-input v-show="editContainer && showEdit" v-model="formCard.name" placeholder="请输入" @blur="() => (editContainer = false)" />
						</div>
						<el-button type="primary" text @click.stop="handleEdit">编辑</el-button>
					</div>
					<div>
						<el-button type="primary" @click="handleCopyContainer">复制</el-button>
						<el-button type="danger" @click="() => handleDelDialog(false)">删除</el-button>
					</div>
				</div>
			</template>
			<div class="min-h-28">
				<VueDraggable v-model="formElements" class="flex flex-wrap justify-between" group="elements" @add="e => handleAdd(e)" @end="onEnd">
					<div
						v-for="(element, eIndex) in formElements"
						:key="element.id"
						:class="
							store.slectedItemId === element.id
								? `pr-10 transition relative mb-4 ${element.col == '1/2' ? 'w-[48%]' : 'w-full'}`
								: `transition mb-4 ${element.col == '1/2' ? 'w-[48%]' : 'w-full'} `
						"
						:templateId="props.templateId"
						@click.stop="handleSelect(element.id, props.templateId)"
					>
						<div
							:class="
								store.slectedItemId === element.id
									? 'p-4 bg-gray-100 rounded shadow cursor-pointer border-2 border-blue-500 transition border-opacity-100'
									: 'p-4 bg-gray-100 rounded shadow cursor-pointer hover:border-2 hover:border-blue-500 transition border-opacity-0 hover:border-opacity-100'
							"
						>
							<FormInput v-if="element.type === 'input'" v-model="element.value" v-bind="element" />
							<FormCheckbox v-else-if="element.type === 'checkbox'" v-model="element.value" v-bind="element" />
							<FormRadio v-else-if="element.type === 'radio'" v-model="element.value" v-bind="element" />
							<span v-else> {{ element.label }}</span>
						</div>
						<div v-show="store.slectedItemId === element.id" class="absolute right-0 top-1/2 -translate-y-1/2">
							<img src="../../../assets/copy.png" alt="" class="w-6 h-6 cursor-pointer mb-4" @click.stop="() => handleCopy(element, eIndex)" />
							<img src="../../../assets/remove.png" alt="" class="w-6 h-6 cursor-pointer" @click.stop="() => handleDelDialog(true)" />
						</div>
					</div>
				</VueDraggable>
			</div>
		</ElCard>
	</div>
</template>

<script setup lang="ts">
import { ref, ComputedRef, computed, nextTick } from 'vue'
import { ElCard } from 'element-plus'
import { VueDraggable } from 'vue-draggable-plus'
import { ITemplateSingleItem, IRecord } from '../types/record'
import FormInput from '../elements/FormInput.vue'
import FormCheckbox from '../elements/FormCheckbox.vue'
import FormRadio from '../elements/FormRadio.vue'
import { useDialog } from '../../hooks/useDialog'
import { useDataStore } from '../stores/dataSource'
import { defaultTabData, defaultItemData } from '../stores/config/detaultData'
import { generateRandomId } from '../utils'

const store = useDataStore()

const delItem = ref<boolean>(true) // 是删除元素还是容器
const editContainer = ref<boolean>(false) // 是否编辑容器

const showEdit = computed(() => {
	return store.slectedContainerId === props.templateId
})

const formCard: ComputedRef<IRecord | undefined> = computed(() => store.getSelectedContainer)

const confirmCancel = () => {
	if (delItem.value) {
		store.removeItem(store.slectedItemId)
	} else {
		store.removeContainer(props.templateId)
	}
}
const { openDialog, renderDialog } = useDialog({ onOk: confirmCancel })

const props = defineProps<{ data: ITemplateSingleItem[]; name: string; templateId: number; index: number }>()

const emit = defineEmits(['copy'])

const formElements = computed(() => {
	return props.data
})

const handleEdit = () => {
	store.setId({ slectedContainerId: props.templateId })
	editContainer.value = true
}

const handleDelDialog = (bol: boolean) => {
	delItem.value = bol
	if (!bol) {
		store.setId({ slectedContainerId: props.templateId })
	}
	openDialog()
}

const handleCopy = (item: IRecord | ITemplateSingleItem, index: number) => {
	const parentId = props.templateId
	const newIndex = index + 1
	const newItem = {
		...item,
		parentId: parentId,
		id: generateRandomId()
	}

	store.insertExternalItem({ parentId, newIndex, newItem })
}
const handleCopyContainer = () => {
	emit('copy', props.data, props.index, props.name)
}

const handleAdd = (event: any) => {
	const newIndex = event.newIndex
	const parentId = props.templateId // 根据你的数据结构设定

	const itemType = event.item.getAttribute('type')

	const eleTemplateId = event.item.getAttribute('templateId')

	if (eleTemplateId && eleTemplateId != props.templateId) {
		return
	}

	const newItem = {
		...defaultItemData,
		parentId: parentId,
		id: generateRandomId(),
		type: itemType
	}

	store.insertExternalItem({ parentId, newIndex, newItem })
}

const onEnd = (event: any) => {
	const oldIndex = event.oldIndex
	const newIndex = event.newIndex
	const parentId = props.templateId // 根据你的数据结构设定

	store.moveItemWithinSameLevel({ parentId, oldIndex, newIndex })
}

const handleSelect = (id: number, templateId: number) => {
	if (id == store.slectedItemId) {
		store.setId({ slectedItemId: 0, slectedContainerId: 0 })
	} else {
		store.setId({ slectedItemId: id, slectedContainerId: templateId })
	}
}
</script>

<style scoped>
/* 可以根据需要添加更多的自定义样式 */
</style>
