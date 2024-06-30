export const generateRandomId = (id: string): string => {
	return '_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36) + id
}
