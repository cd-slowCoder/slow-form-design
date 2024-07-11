<template>
	<div>
		<h2 class="text-xl font-bold mb-4">元素属性配置</h2>
		<div v-if="currForeItem">
			<!-- 在这里添加更多属性配置项 -->
			<component :is="componentMap[currForeItem.type as  TemplateSingleItemType]" />
			<!-- 公共配置 -->
			<div>
				<el-form-item label="宽度">
					<el-select v-model="currForeItem.col" class="w-full">
						<el-option label="1" value="1" />
						<el-option label="1/2" value="1/2" />
					</el-select>
				</el-form-item>
			</div>
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
	[TemplateSingleItemType.Checkbox]: ProperInput,
	[TemplateSingleItemType.Photos]: ProperInput,
	[TemplateSingleItemType.Signs]: ProperInput
}

// 通过事件或其他方式设置选中元素
</script>
