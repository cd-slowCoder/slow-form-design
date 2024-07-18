import { IRecord, ITemplateSingleItem, GroupCode, MultiSample, TemplateSingleItemType } from '@/components'
export const defaultTabData: IRecord = {
	createTime: '',
	creatorName: '',
	updateTime: '',
	updaterName: '',
	upVer: 0,
	sort: 0,
	tenantId: 0,
	deleted: false,
	id: 0,
	parentId: 0,
	type: '',
	groupCode: '',
	name: '',
	isSign: false,
	children: []
}

export const defaultContainerData: IRecord = {
	createTime: '',
	creatorName: '',
	updateTime: '',
	updaterName: '',
	upVer: 0,
	sort: 0,
	tenantId: 0,
	deleted: false,
	id: 0,
	parentId: 0,
	type: '',
	groupCode: '',
	name: '',
	isSign: false,
	children: []
}

export const defaultItemData: ITemplateSingleItem = {
	id: 0,
	templateId: 0,
	type: TemplateSingleItemType.Input,
	limsField: '',
	field: '',
	label: '默认名称',
	multiSample: MultiSample.N,
	value: null,
	dicParentCode: null,
	options: [],
	rules: [],
	groupCode: GroupCode.Cyxx,
	userId: null,
	enabled: null,
	showed: 0,
	labelWidth: null,
	col: '',
	buttonText: null,
	buttonCode: null,
	classify: 0,
	createTime: '',
	creatorLid: null,
	creatorName: null,
	updateTime: null,
	updaterLid: null,
	updaterName: null,
	upVer: 0,
	sort: 0,
	tenantId: null,
	deleted: 0,
	tableId: 0,
	required: false
}
