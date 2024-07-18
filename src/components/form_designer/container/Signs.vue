<template>
	<div class="flex items-center space-x-4 cursor-pointer">
		<component :is="renderDialog({ type: 'warning' })" />
		<ElCard shadow="hover" class="w-full">
			<template #header>
				<div class="flex justify-between" @click="() => (editContainer = false)">
					<div class="text-left hover:text-blue-700 flex space-x-4 items-center">
						<span v-show="!editContainer || !showEdit">{{ props.name || '请编辑标题' }}</span>
						<div v-if="formCard" @click.stop>
							<el-input v-show="editContainer && showEdit" v-model="formCard.name" placeholder="请输入" @blur.stop="() => (editContainer = false)" />
						</div>
						<el-button type="primary" text @click.stop="handleEdit">编辑</el-button>
					</div>
					<div>
						<el-button type="primary" @click="handleCopyContainer">复制</el-button>
						<el-button type="danger" @click="() => handleDelDialog(false)">删除</el-button>
					</div>
				</div>
			</template>
			<div class="grid grid-cols-5 gap-10 pr-4">
				<div
					v-for="(element, eIndex) in formElements"
					:key="element.id"
					:class="[store.slectedItemId === element.id ? 'relative' : '', 'transition w-full h-full']"
					:templateId="props.templateId"
					@click.stop="handleSelect(element.id, props.templateId)"
				>
					<div
						:class="[
							store.slectedItemId === element.id
								? 'border-2 border-blue-500 border-opacity-100'
								: 'hover:border-2 hover:border-blue-500 hover:border-opacity-100',
							'bg-gray-100 rounded shadow cursor-pointer transition border-opacity-0 w-full h-full'
						]"
					>
						<FormSign v-bind="element" />
					</div>
					<div v-show="store.slectedItemId === element.id" class="absolute right-[-30px] top-1/2 transform -translate-y-1/2">
						<img src="../../../assets/copy.png" alt="" class="w-6 h-6 cursor-pointer mb-4" @click.stop="() => handleCopy(element, eIndex)" />
						<img src="../../../assets/remove.png" alt="" class="w-6 h-6 cursor-pointer" @click.stop="() => handleDelDialog(true, element)" />
					</div>
				</div>
				<div class="col-span-1 border-dashed border-2 border-gray-400 flex items-center justify-center w-full h-full">
					<img src="../../../assets/add-line.png" alt="" class="cursor-pointer w-full h-full" @click="handleAdd" />
				</div>
			</div>
		</ElCard>
	</div>
</template>

<script setup lang="ts">
import { ref, ComputedRef, computed } from 'vue'
import { ElCard } from 'element-plus'
import { ITemplateSingleItem, IRecord, TemplateSingleItemType } from '../types/record'
import { useDialog } from '../../hooks/useDialog'
import { useDataStore } from '../stores/dataSource'
import { defaultItemData } from '../stores/config/detaultData'
import { generateRandomId } from '../utils'
import FormSign from '../elements/FormSign.vue'

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

const handleDelDialog = (bol: boolean, item?: ITemplateSingleItem) => {
	delItem.value = bol
	if (!bol) {
		store.setId({ slectedContainerId: props.templateId })
	}
	if (item && item.field === '') {
		confirmCancel()
		return
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

const handleAdd = () => {
	const newIndex = formElements.value.length
	const parentId = props.templateId // 根据你的数据结构设定

	const itemType = TemplateSingleItemType.Signs

	const newItem = {
		...defaultItemData,
		parentId: parentId,
		id: generateRandomId(),
		type: itemType
	}

	store.insertExternalItem({ parentId, newIndex, newItem })
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
