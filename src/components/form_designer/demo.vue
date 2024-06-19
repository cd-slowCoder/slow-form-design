<template>
	<draggable v-model="myArray" group="people" item-key="id" @start="drag = true" @end="drag = false">
		<template #item="{ element }">
			<div>{{ element.name }}</div>
		</template>
	</draggable>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import draggable from 'vuedraggable'

export default defineComponent({
	components: { draggable },
	setup() {
		const data = reactive({
			drag: false,
			myArray: [
				{ id: 1, name: 'Jenny' },
				{ id: 2, name: 'kevin' },
				{ id: 3, name: 'lili' }
			]
		})
		return { ...toRefs(data) }
	}
})
</script>
