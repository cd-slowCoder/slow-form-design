import { defineStore } from 'pinia'
import { IRecord, ITemplateSingleItem } from '@/components'
import { defaultTabData, defaultContainerData, defaultItemData } from './config/detaultData'

interface State {
	data: IRecord[]
	selectedTabId: number
	slectedContainerId: number
	slectedItemId: number
}

export const useDataStore = defineStore('dataStore', {
	state: (): State => ({
		data: [],
		selectedTabId: 0,
		slectedContainerId: 0,
		slectedItemId: 0
	}),
	getters: {
		getData: (state: State) => state.data,

		getSelectedTab: (state: State): IRecord | undefined => {
			return state.data.find(tab => tab.id === state.selectedTabId)
		},

		getSelectedContainer: (state: State): IRecord | undefined => {
			const tab = state.data.find(tab => tab.id === state.selectedTabId)
			return tab?.children.find(container => container.id === state.slectedContainerId)
		},

		getSelectedItem: (state: State): ITemplateSingleItem | undefined => {
			const tab = state.data.find(tab => tab.id === state.selectedTabId)
			const container = tab?.children.find(container => container.id === state.slectedContainerId)
			return container?.templateSingleItemList?.find(item => item.id === state.slectedItemId)
		}
	},
	actions: {
		setId({ selectedTabId, slectedContainerId, slectedItemId }: { selectedTabId?: number; slectedContainerId?: number; slectedItemId?: number }) {
			this.selectedTabId = selectedTabId ?? this.selectedTabId
			this.slectedContainerId = slectedContainerId ?? this.slectedContainerId
			this.slectedItemId = slectedItemId ?? this.slectedItemId
		},
		setData(newData: IRecord[]) {
			this.data = newData
		},

		removeTabData(id: number) {
			this.data = this.data.filter(tab => tab.id !== id)
		},

		removeContainer(id: number) {
			const tab = this.data.find(tab => tab.id === this.selectedTabId)
			if (tab) {
				tab.children = tab.children.filter(container => container.id !== id)
			}
		},

		removeItem(id: number) {
			const tab = this.data.find(tab => tab.id === this.selectedTabId)
			const container = tab?.children.find(container => container.id === this.slectedContainerId)
			console.log('container-tab', id, container, this.selectedTabId)
			if (container && container.templateSingleItemList) {
				container.templateSingleItemList = container.templateSingleItemList.filter(item => item.id !== id)
			}
		},

		// 新增方法：调换同层级元素位置
		moveItemWithinSameLevel({ parentId, oldIndex, newIndex }: { parentId: number; oldIndex: number; newIndex: number }) {
			const tab = this.data.find(tab => tab.id === parentId)
			if (tab) {
				const movedItem = tab.children.splice(oldIndex, 1)[0]
				tab.children.splice(newIndex, 0, movedItem)
				return
			}

			const container = this.data.flatMap(tab => tab.children).find(container => container.id === parentId)
			if (container) {
				const movedItem = container.templateSingleItemList?.splice(oldIndex, 1)[0]
				if (movedItem) {
					container.templateSingleItemList?.splice(newIndex, 0, movedItem)
				}
			}
		},

		// 新增方法：从外部拖拽并插入元素
		insertExternalItem({ parentId, newIndex, newItem }: { parentId: number; newIndex: number; newItem: IRecord | ITemplateSingleItem }) {
			const tab = this.data.find(tab => tab.id === parentId)
			if (tab) {
				tab.children.splice(newIndex, 0, newItem as IRecord)
				return
			}

			const container = this.data.flatMap(tab => tab.children).find(container => container.id === parentId)
			if (container) {
				if (!container.templateSingleItemList) {
					container.templateSingleItemList = []
				}
				container.templateSingleItemList.splice(newIndex, 0, newItem as ITemplateSingleItem)
			}
		}
	}
})
