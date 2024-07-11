<template>
	<div>
		<el-form v-if="form" :model="form" label-width="auto" class="w-full">
			<el-form-item label="标题">
				<el-input v-model="form.label" />
			</el-form-item>
			<el-form-item label="字段">
				<el-select v-model="form.field" placeholder="please select your zone" class="w-full">
					<el-option label="Zone one" value="shanghai" />
					<el-option label="Zone two" value="beijing" />
				</el-select>
			</el-form-item>
			<el-form-item label="选项">
				<el-input v-model="form.label" />
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
