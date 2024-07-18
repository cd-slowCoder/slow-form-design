import { IRecord } from './form_designer/types/record'

export const demo: IRecord[] = [
	{
		createTime: '2023-01-30 13:14:03',
		creatorName: 'system',
		updateTime: '2023-01-30 13:14:03',
		updaterName: 'system',
		upVer: 1,
		sort: 1,
		tenantId: 2,
		deleted: false,
		id: 1520633363344,
		parentId: 0,
		type: 'food_record',
		groupCode: 'QYJG',
		name: '被抽样单位',
		isSign: false,
		children: [
			{
				createTime: '2023-01-30 13:14:03',
				creatorName: 'system',
				updateTime: '2023-01-30 13:14:03',
				updaterName: 'system',
				upVer: 1,
				sort: 1,
				tenantId: 2,
				deleted: false,
				id: 1520633363345,
				parentId: 1520633363344,
				type: 'food_record',
				groupCode: 'QYJG',
				name: '被抽样单位',
				isSign: false,
				children: [],
				templateSingleItemList: [
					{
						id: 1645543665408,
						templateId: 1520633363345,
						type: 'input',
						limsField: 'lcgl_order_org_b.sj_org_name',
						field: 'QYJG.sj_org_name',
						label: '单位名称',
						multiSample: 'N',
						value: '1',
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-14T06:50:30.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571640,
						required: false
					},
					{
						id: 1645544490184,
						templateId: 1520633363345,
						type: 'input',
						limsField: 'lcgl_order_org_b.sj_addr',
						field: 'QYJG.sj_addr',
						label: '单位地址',
						multiSample: 'N',
						value: '1',
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-14T06:52:13.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571640,
						required: false
					},
					{
						id: 1645547507552,
						templateId: 1520633363345,
						type: 'radio',
						limsField: '',
						field: 'QYJG.f1',
						label: '区域类型',
						multiSample: 'N',
						value: '1',
						dicParentCode: null,
						required: false,
						options: [
							{
								val: '景点',
								code: '1'
							},
							{
								val: '城市',
								code: '2'
							},
							{
								val: '乡镇',
								code: '3'
							},
							{
								val: '学校周边',
								code: '4'
							},
							{
								val: '其他',
								code: '5'
							}
						],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-14T06:58:30.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571640
					},
					{
						id: 1645551761024,
						templateId: 1520633363345,
						type: 'input',
						limsField: 'lcgl_order_org_b.sj_legal_person',
						field: 'QYJG.sj_legal_person',
						label: '法定代表',
						multiSample: 'N',
						value: '1',
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-14T07:07:22.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571640,
						required: false
					},
					{
						id: 1646187244992,
						templateId: 1520633363345,
						type: 'input',
						limsField: 'lcgl_order_org_b.sj_qylx',
						field: 'QYJG.sj_qylx',
						label: '受检单位-区域类型',
						multiSample: 'N',
						value: '1',
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:11:18.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571640,
						required: false
					},
					{
						id: 1646187483456,
						templateId: 1520633363345,
						type: 'input',
						limsField: 'lcgl_order_org_b.sj_xkzlx',
						field: 'QYJG.sj_xkzlx',
						label: '受检单位-许可证类型',
						multiSample: 'N',
						value: '1',
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:11:47.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571640,
						required: false
					},
					{
						id: 1646187541496,
						templateId: 1520633363345,
						type: 'input',
						limsField: 'lcgl_order_org_b.sj_business_licence_no',
						field: 'QYJG.sj_business_licence_no',
						label: '受检单位-许可证号',
						multiSample: 'N',
						value: '1',
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:11:55.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571640,
						required: false
					}
				],
				templateMultiItemList: [[]]
			}
		]
	},
	{
		createTime: '2023-01-30 13:14:03',
		creatorName: 'system',
		updateTime: '2023-01-30 13:14:03',
		updaterName: 'system',
		upVer: 1,
		sort: 1,
		tenantId: 2,
		deleted: false,
		id: 1520633363444,
		parentId: 0,
		type: 'food_record',
		groupCode: 'QYJG',
		name: '标称生产企业/代理商信息',
		isSign: false,
		children: [
			{
				createTime: '2023-01-30 13:14:03',
				creatorName: 'system',
				updateTime: '2023-01-30 13:14:03',
				updaterName: 'system',
				upVer: 1,
				sort: 1,
				tenantId: 2,
				deleted: false,
				id: 1520633363445,
				parentId: 1520633363444,
				type: 'food_record',
				groupCode: 'QYJG',
				name: '标称生产企业/代理商信息',
				isSign: false,
				children: [],
				templateSingleItemList: [
					{
						id: 1646187959024,
						templateId: 1520633363445,
						type: 'input',
						limsField: 'lcgl_order_org_b.sc_org_name',
						field: 'QYJG.sc_org_name',
						label: '生产单位-名称',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:12:47.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571736,
						required: false
					},
					{
						id: 1646188039744,
						templateId: 1520633363445,
						type: 'input',
						limsField: 'lcgl_order_org_b.sc_addr',
						field: 'QYJG.sc_addr',
						label: '生产单位-地址',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: '查询企业信息',
						buttonCode: 'company',
						classify: 1,
						createTime: '2024-05-15T05:12:57.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571736,
						required: false
					},
					{
						id: 1646188136632,
						templateId: 1520633363445,
						type: 'input',
						limsField: 'lcgl_order_org_b.sc_business_licence_no',
						field: 'QYJG.sc_business_licence_no',
						label: '生产单位-许可证号',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:13:09.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571736,
						required: false
					},
					{
						id: 1646188233864,
						templateId: 1520633363445,
						type: 'input',
						limsField: 'lcgl_order_org_b.sc_zip',
						field: 'QYJG.sc_zip',
						label: '生产单位-邮编',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:13:21.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571736,
						required: false
					},
					{
						id: 1646188301216,
						templateId: 1520633363445,
						type: 'input',
						limsField: 'lcgl_order_org_b.sc_tel',
						field: 'QYJG.sc_tel',
						label: '生产单位-联系电话',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'QYJG',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:13:30.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571736,
						required: false
					}
				],
				templateMultiItemList: [[]]
			}
		]
	},
	{
		createTime: '2023-01-30 13:14:03',
		creatorName: 'system',
		updateTime: '2023-01-30 13:14:03',
		updaterName: 'system',
		upVer: 1,
		sort: 1,
		tenantId: 2,
		deleted: false,
		id: 1520633363544,
		parentId: 0,
		type: 'food_record',
		groupCode: 'CYYP',
		name: '样品信息',
		isSign: false,
		children: [
			{
				createTime: '2023-01-30 13:14:03',
				creatorName: 'system',
				updateTime: '2023-01-30 13:14:03',
				updaterName: 'system',
				upVer: 1,
				sort: 1,
				tenantId: 2,
				deleted: false,
				id: 1520633363545,
				parentId: 1520633363544,
				type: 'food_record',
				groupCode: 'CYYP',
				name: '抽检样品信息',
				isSign: false,
				children: [],
				templateSingleItemList: [
					{
						id: 1646125248960,
						templateId: 1520633363545,
						type: 'radio',
						limsField: 'lcgl_order_sample_zj_b.sample_residue_deal_type',
						field: 'CYYP.sample_residue_deal_type',
						label: '余样处理方式',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						required: false,
						options: [
							{
								val: '退样',
								code: 'YPYY_TY'
							},
							{
								val: '报废',
								code: 'YPYY_BF'
							},
							{
								val: '正常处理',
								code: 'YPYY_ZCCL'
							}
						],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T03:02:08.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824
					},
					{
						id: 1646188579560,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.cydd',
						field: 'CYYP.cydd',
						label: '抽样地点',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:14:04.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646188756576,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.sample_name',
						field: 'CYYP.sample_name',
						label: '样品名称',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:14:27.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646188818160,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.sample_batch_no',
						field: 'CYYP.sample_batch_no',
						label: '产品批号',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:14:34.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646188909544,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.sample_manuDate',
						field: 'CYYP.sample_manu_date',
						label: '生产日期',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:14:46.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646189191000,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.sampling_quantity',
						field: 'CYYP.sampling_quantity',
						label: '抽样数量',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:15:21.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646189270632,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.sample_store_condition',
						field: 'CYYP.sample_store_condition',
						label: '样品储存条件',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:15:31.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646189355384,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.original_place',
						field: 'CYYP.original_place',
						label: '原产地',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:15:41.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646189436816,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.sampling_base',
						field: 'CYYP.sampling_base',
						label: '抽样基数',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:15:52.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646189539208,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.sample_backup_quantity',
						field: 'CYYP.sample_backup_quantity',
						label: '备样数量',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:16:04.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					},
					{
						id: 1646189636184,
						templateId: 1520633363545,
						type: 'input',
						limsField: 'lcgl_order_sample_zj_b.zxbz',
						field: 'CYYP.zxbz',
						label: '抽样执行标准',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYYP',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:16:17.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571824,
						required: false
					}
				],
				templateMultiItemList: [[]]
			}
		]
	},
	{
		createTime: '2023-01-30 13:14:03',
		creatorName: 'system',
		updateTime: '2023-01-30 13:14:03',
		updaterName: 'system',
		upVer: 1,
		sort: 1,
		tenantId: 2,
		deleted: false,
		id: 1520633363644,
		parentId: 0,
		type: 'food_record',
		groupCode: 'CYXX',
		name: '签名/图片',
		isSign: false,
		children: [
			{
				createTime: '2023-01-30 13:14:03',
				creatorName: 'system',
				updateTime: '2023-01-30 13:14:03',
				updaterName: 'system',
				upVer: 1,
				sort: 1,
				tenantId: 2,
				deleted: false,
				id: 1520633363645,
				parentId: 1520633363644,
				type: 'food_record',
				groupCode: 'CYXX',
				name: '备注',
				isSign: false,
				children: [],
				templateSingleItemList: [
					{
						id: 1646189795584,
						templateId: 1520633363645,
						type: 'input',
						limsField: '',
						field: 'CYXX.req_biz_remark',
						label: '业务备注',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYXX',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:16:36.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243571920,
						required: false
					}
				],
				templateMultiItemList: [[]]
			},
			{
				createTime: '2023-01-30 13:14:03',
				creatorName: 'system',
				updateTime: '2023-01-30 13:14:03',
				updaterName: 'system',
				upVer: 1,
				sort: 1,
				tenantId: 2,
				deleted: false,
				id: 1520633363646,
				parentId: 1520633363644,
				type: 'food_record',
				groupCode: 'CYXX',
				name: '样品照片',
				isSign: false,
				children: [],
				templateSingleItemList: [
					{
						id: 1666977190393,
						templateId: 1520633363646,
						type: 'photos',
						limsField: '',
						field: 'CYXX.live_pic',
						label: '样品照片',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYXX',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-06-14T07:03:41.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243572008,
						required: false
					}
				],
				templateMultiItemList: [[]]
			},
			{
				createTime: '2023-01-30 13:14:03',
				creatorName: 'system',
				updateTime: '2023-01-30 13:14:03',
				updaterName: 'system',
				upVer: 1,
				sort: 1,
				tenantId: 2,
				deleted: false,
				id: 1520633363647,
				parentId: 1520633363644,
				type: 'food_record',
				groupCode: 'CYXX',
				name: '抽样单位签署',
				isSign: true,
				children: [],
				templateSingleItemList: [
					{
						id: 1646195997232,
						templateId: 1520633363647,
						type: 'signs',
						limsField: '',
						field: 'CYXX.sign_person3',
						label: '签名-抽样人3',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYXX',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:29:32.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243572088,
						required: false
					},
					{
						id: 1646196029120,
						templateId: 1520633363647,
						type: 'signs',
						limsField: '',
						field: 'CYXX.sign_person1',
						label: '签名-抽样人1',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYXX',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:29:36.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243572088,
						required: false
					},
					{
						id: 1646196054200,
						templateId: 1520633363647,
						type: 'signs',
						limsField: '',
						field: 'CYXX.sign_person2',
						label: '签名-抽样人2',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYXX',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:29:39.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243572088,
						required: false
					},
					{
						id: 1646196086456,
						templateId: 1520633363647,
						type: 'signs',
						limsField: '',
						field: 'CYXX.sign_person_market',
						label: '签名-市场监管人员',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [],
						rules: [],
						groupCode: 'CYXX',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1/2',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T05:29:43.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243572088,
						required: false
					}
				],
				templateMultiItemList: [[]]
			},
			{
				createTime: '2023-01-30 13:14:03',
				creatorName: 'system',
				updateTime: '2023-01-30 13:14:03',
				updaterName: 'system',
				upVer: 1,
				sort: 1,
				tenantId: 2,
				deleted: false,
				id: 1520633363648,
				parentId: 1520633363644,
				type: 'food_record',
				groupCode: 'CYXX',
				name: '是否打印签章',
				isSign: false,
				children: [],
				templateSingleItemList: [
					{
						id: 1666977190394,
						templateId: 1520633363648,
						type: 'radio',
						limsField: '',
						field: 'CYXX.f1',
						label: '是否签章',
						multiSample: 'N',
						value: null,
						dicParentCode: null,
						options: [
							{
								val: '是',
								code: 'Y'
							},
							{
								val: '否',
								code: 'N'
							}
						],
						rules: [],
						groupCode: 'CYXX',
						userId: null,
						enabled: null,
						showed: 1,
						labelWidth: null,
						col: '1',
						buttonText: null,
						buttonCode: null,
						classify: 1,
						createTime: '2024-05-15T03:02:08.000+00:00',
						creatorLid: null,
						creatorName: null,
						updateTime: null,
						updaterLid: null,
						updaterName: null,
						upVer: 1,
						sort: 1,
						tenantId: null,
						deleted: 0,
						tableId: 1675243572168,
						required: false
					}
				],
				templateMultiItemList: [[]]
			}
		]
	}
]
