<template>
	<div class="element-palette">
		<draggable v-model="paletteElements" :options="{ group: 'elements', sort: false }">
			<template #item="{ element }">
				<div :key="element.id" class="palette-item">
					{{ element.type }}
				</div>
			</template>
		</draggable>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import draggable from 'vuedraggable'

export default defineComponent({
	components: {
		draggable
	},
	setup() {
		const paletteElements = ref([
			{ id: '1', type: 'input' },
			{ id: '2', type: 'button' }
			// 添加更多类型
		])

		return { paletteElements }
	}
})
</script>

<style>
.element-palette {
	display: flex;
	flex-direction: column;
}

.palette-item {
	padding: 10px;
	margin-bottom: 10px;
	background-color: #ddd;
	cursor: pointer;
	text-align: center;
}
</style>
