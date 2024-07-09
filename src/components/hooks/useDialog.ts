// useDialog.ts
import { ref, h, Ref } from 'vue'
import { ElDialog, ElButton } from 'element-plus'

export interface IDialogProps {
	title?: string
	message?: string
	type: DialogType
}

// type的类型
export type DialogType = 'info' | 'success' | 'warning' | 'error'

// type映射的title和messgge
export const typeMap: Record<DialogType, { title: string; message: string }> = {
	info: {
		title: '提示',
		message: '默认提示'
	},
	success: {
		title: '成功',
		message: '提交成功！'
	},
	warning: {
		title: '确认删除吗',
		message: '删除后数据不可恢复，是否删除！！！'
	},
	error: {
		title: 'Error',
		message: '出现错误！！！'
	}
}
export function useDialog({ onOk, onCancel }: { onOk: () => void; onCancel?: () => void }) {
	const dialogVisible: Ref<boolean> = ref(false)

	const openDialog = () => {
		console.log('dialogVisible', dialogVisible)
		dialogVisible.value = true
	}

	const closeDialog = () => {
		dialogVisible.value = false
		onCancel && onCancel()
	}

	const handleClose = (done: () => void) => {
		done()
	}

	const renderDialog = ({ title, message, type }: IDialogProps) => {
		title = title || typeMap[type].title
		message = message || typeMap[type].message

		return h(
			ElDialog,
			{
				modelValue: dialogVisible.value,
				'onUpdate:modelValue': (value: boolean) => (dialogVisible.value = value),
				title,
				width: '500px',
				beforeClose: handleClose
			},
			{
				default: () => h('span', {}, message),
				footer: () =>
					h('div', { class: 'dialog-footer flex justify-end space-x-4 p-4 border-t border-gray-200' }, [
						h(
							'button',
							{ onClick: closeDialog, class: 'px-8 py-2 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors' },
							'取消'
						),
						h(
							'button',
							{
								onClick: () => {
									closeDialog()
									onOk()
								},
								class: 'px-8 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition-colors'
							},
							'确认'
						)
					])
			}
		)
	}

	return {
		dialogVisible,
		openDialog,
		closeDialog,
		handleClose,
		renderDialog
	}
}
