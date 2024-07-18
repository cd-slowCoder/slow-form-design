<template>
	<div>
		<el-form v-if="form" :model="form" label-width="auto" class="w-full"> </el-form>
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
