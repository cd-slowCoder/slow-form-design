<template>
	<div :class="showControls ? ['pb-10', 'relative'] : ['relative']">
		<!-- 插槽内容 -->
		<slot></slot>

		<!-- 控制按钮 -->
		<div v-if="showControls" class="absolute right-0 bottom-0 p-2 space-x-2">
			<button class="border border-gray-300 px-3 py-1 rounded hover:bg-gray-200" @click="handleCopy">Copy</button>
			<button class="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-200" @click="handleDelete">Delete</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
	showControls: Boolean
})

const handleCopy = () => {
	// 复制操作
	console.log('Copying...')
}

const handleDelete = () => {
	// 删除操作
	console.log('Deleting...')
}
</script>

<style scoped></style>
