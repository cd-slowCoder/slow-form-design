<template>
	<div>
		<el-form v-if="form" :model="form" label-width="auto" class="w-full">
			<el-form-item label="选项">
				<el-input v-model="form.label" />
			</el-form-item>
			<el-form-item label="宽度">
				<el-select v-model="form.col" class="w-full">
					<el-option label="1" value="1" />
					<el-option label="1/2" value="1/2" />
				</el-select>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useDataStore } from '../stores/dataSource'
import { ITemplateSingleItem } from '../types/record'
const store = useDataStore()

const form: ComputedRef<ITemplateSingleItem | undefined> = computed(() => store.getSelectedItem)

// 通过事件或其他方式设置选中元素
</script>
