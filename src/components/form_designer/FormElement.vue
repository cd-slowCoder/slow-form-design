<template>
	<div class="form-element">
		<input v-if="element.type === 'input'" type="text" placeholder="Input Field" />
		<button v-if="element.type === 'button'">Button</button>
		<!-- 添加更多类型 -->
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
	props: {
		element: {
			type: Object as PropType<{ id: string; type: string }>,
			required: true
		}
	}
})
</script>

<style>
.form-element {
	margin: 10px;
}
</style>
