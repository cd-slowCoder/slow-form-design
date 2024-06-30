<template>
	<div>
		<h2 class="text-xl font-bold mb-4">元素属性配置</h2>
		<div v-if="selectedElement">
			<p>{{ selectedElement.name }}</p>
			<!-- 在这里添加更多属性配置项 -->
		</div>
		<div v-else>
			<p>请选择一个表单元素</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Element {
	id: number
	name: string
}

const selectedElement = ref<Element | null>(null)

// 通过事件或其他方式设置选中元素
</script>
