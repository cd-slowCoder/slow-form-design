import mitt from 'mitt'

type Events = {
	'element-dragged': any
}

export const eventBus = mitt<Events>()
