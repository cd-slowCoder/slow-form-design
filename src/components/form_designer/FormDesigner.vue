<template>
	<div class="form-designer">
		<div class="palette">
			<ElementPalette />
		</div>
		<div class="design-area">
			<draggable v-model="elements" :options="{ group: 'elements' }">
				<template #item="{ element }">
					<FormElement :element="element" />
				</template>
			</draggable>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import draggable from 'vuedraggable'
import ElementPalette from './ElementPalette.vue'
import FormElement from './FormElement.vue'

export default defineComponent({
	components: {
		draggable,
		ElementPalette,
		FormElement
	},
	setup() {
		const elements = ref<Array<{ id: string; type: string }>>([])

		const log = () => {}

		return { elements, log }
	}
})
</script>

<style>
.form-designer {
	display: flex;
	height: 100vh;
}

.palette {
	width: 20%;
	background-color: #f0f0f0;
	padding: 10px;
	box-sizing: border-box;
	overflow-y: auto;
}

.design-area {
	width: 80%;
	background-color: #fff;
	padding: 10px;
	box-sizing: border-box;
	overflow-y: auto;
}
</style>
