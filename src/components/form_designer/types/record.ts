type allFieldType = string | number | null | undefined
export interface IRecord {
	createTime: string
	creatorName: RName | string
	updateTime: string
	updaterName: RName | string
	upVer: number
	sort: number
	tenantId: number
	deleted: boolean
	id: number
	parentId: number
	type: IRecordType | string
	groupCode: GroupCode | string
	name: string
	isSign: boolean
	children: IRecord[]
	templateSingleItemList?: ITemplateSingleItem[]
	templateMultiItemList?: Array<ITemplateSingleItem[]>
}

export enum RName {
	System = 'system'
}

export enum GroupCode {
	Cyxx = 'CYXX',
	Cyyp = 'CYYP',
	Qyjg = 'QYJG'
}

export interface ITemplateSingleItem {
	id: number
	templateId: number
	type: TemplateSingleItemType | string
	limsField: string
	field: string
	label: string
	multiSample: MultiSample | string
	value: allFieldType
	dicParentCode: string | null
	options: Option[]
	rules: any[]
	groupCode: GroupCode | string
	userId: allFieldType
	enabled: allFieldType
	required: boolean
	showed: number
	labelWidth: allFieldType
	col: string
	buttonText: allFieldType
	buttonCode: allFieldType
	classify: number
	createTime: string
	creatorLid: allFieldType
	creatorName: allFieldType
	updateTime: allFieldType
	updaterLid: allFieldType
	updaterName: allFieldType
	upVer: number
	sort: number
	tenantId: allFieldType
	deleted: number
	tableId: number
}

export enum MultiSample {
	N = 'N'
}

export interface Option {
	val: string
	code: string
}

export enum TemplateSingleItemType {
	Input = 'input',
	Photos = 'photos',
	Radio = 'radio',
	Checkbox = 'checkbox',
	Signs = 'signs'
}

export enum IRecordType {
	FoodRecord = 'food_record'
}
