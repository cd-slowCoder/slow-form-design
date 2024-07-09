import { defineStore } from 'pinia'
import { IRecord } from '@/components'

interface State {
	data: IRecord[]
}

export const useDataStore = defineStore('dataStore', {
	state: (): State => ({
		data: []
	}),
	actions: {
		setData(newData: IRecord[]) {
			this.data = newData
		}
	},
	getters: {
		getData: (state: State) => state.data
	}
})
