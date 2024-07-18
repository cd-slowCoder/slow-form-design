<template>
	<div>
		<h2 class="text-xl font-bold mb-4">元素属性配置</h2>
		<div v-if="currForeItem">
			<el-form-item label="标题">
				<el-input v-model="currForeItem.label" />
			</el-form-item>
			<el-form-item label="字段">
				<el-select v-model="currForeItem.field" placeholder="please select your zone" class="w-full">
					<el-option label="Zone one" value="shanghai" />
					<el-option label="Zone two" value="beijing" />
				</el-select>
			</el-form-item>
			<el-form-item v-if="currForeItem" label="是否必填">
				<el-switch v-model="currForeItem.required" />
			</el-form-item>
			<!-- 在这里添加更多属性配置项 -->
			<component :is="componentMap[currForeItem.type as  TemplateSingleItemType]" />
		</div>
		<div v-else>
			<p>请选择一个表单元素</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDataStore } from '../stores/dataSource'
import { TemplateSingleItemType } from '../types/record'
import { ProperInput, ProperRadio } from '../properites'
const store = useDataStore()

const currForeItem = computed(() => store.getSelectedItem)

// 这是一个对象 通过 TemplateSingleItemType 来返回生成的动态组件
const componentMap: Record<TemplateSingleItemType, any> = {
	[TemplateSingleItemType.Input]: ProperInput,
	[TemplateSingleItemType.Radio]: ProperRadio,
	[TemplateSingleItemType.Checkbox]: ProperRadio,
	[TemplateSingleItemType.Photos]: ProperInput,
	[TemplateSingleItemType.Signs]: ProperInput
}

// 通过事件或其他方式设置选中元素
</script>
