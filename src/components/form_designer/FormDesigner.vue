<template>
	<div class="flex">
		<FormElements class="w-1/4 p-4 border-r" />
		<FormDisplay :data="currData" class="w-2/4 p-4 border-r" />
		<ElementProperties class="w-1/4 p-4" />
	</div>
</template>

<script setup lang="ts">
import FormElements from './child/FormElements.vue'
import FormDisplay from './child/FormDisplay.vue'
import ElementProperties from './child/ElementProperties.vue'
import { defineProps, ref, defineExpose } from 'vue'
import { IRecord } from './types/record'
import { useDataStore } from './stores/dataSource'
const props = defineProps<{ data: IRecord[] }>()
const store = useDataStore()
store.setData(props.data)
const currData = ref(store.getData)

// 使用 expose 将方法和数据暴露给父组件
defineExpose({
	storeData: store.getData
})
</script>

<style scoped></style>
