import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './_util';

export default [
    {
        url: '/api/device/getDeviceList',
        timeout: 200,
        method: 'post',
        response: () => {
            let deviceListResp = [
                {
                    id: 1,
                    deviceName: 'DS-C11N-VWMS1',
                    deviceType: 1,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: undefined,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceaddress","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"username","valType":2},{"name":"密码","key":"password","valType":2},{"name":"见到诚信","key":"whoiszhangben","valType":2},{"name":"孜然烤全羊","key":"greedisgood","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isEmitter: true,
                            isAlert: true,
                            hysType: 2,
                            hysTime: 10,
                            valMapping: '',
                            rules: [
                                {
                                    alertLevel: 1,
                                    timeSpan: 1,
                                    cond: [
                                        [
                                            {
                                                operator: 3,
                                                value: 30
                                            },
                                            {
                                                operator: 4,
                                                value: 60
                                            }
                                        ],
                                        [
                                            {
                                                operator: 5,
                                                value: 90
                                            }
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isEmitter: false,
                            isAlert: true,
                            hysType: 3,
                            hysTime: 10,
                            valMapping: '{"true":"开门","false":"关门"}',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: false,
                            isEmitter: false,
                            isAlert: false,
                            hysType: 1,
                            hysTime: null,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 4,
                            indexName: '状态量',
                            oId: 'Abc000000004',
                            indexNo: '4',
                            valueType: 4,
                            isControlable: false,
                            isEmitter: false,
                            isAlert: false,
                            hysType: 1,
                            hysTime: null,
                            valMapping: '{"1":"制冷","2":"制热","3":"混风","4":"除湿"}',
                            rules: []
                        }
                    ]
                },
                {
                    id: 2,
                    deviceName: 'DS-C11N-VWMS2',
                    deviceType: 1,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: undefined,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '4',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '5',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '6',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 3,
                    deviceName: 'DS-C11N-VWMS3',
                    deviceType: 1,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: false,
                            isAlert: false,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 4,
                    deviceName: 'DS-C22N-VWMS1',
                    deviceType: 2,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 5,
                    deviceName: 'DS-C22N-VWMS2',
                    deviceType: 2,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 6,
                    deviceName: 'DS-C22N-VWMS3',
                    deviceType: 1,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 7,
                    deviceName: 'DS-C33N-VWMS1',
                    deviceType: 3,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 8,
                    deviceName: 'DS-C33N-VWMS2',
                    deviceType: 3,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 9,
                    deviceName: 'DS-C33N-VWMS3',
                    deviceType: 3,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 10,
                    deviceName: 'DS-C44N-VWMS1',
                    deviceType: 4,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 11,
                    deviceName: 'DS-C44N-VWMS2',
                    deviceType: 4,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 12,
                    deviceName: 'DS-C44N-VWMS3',
                    deviceType: 4,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 13,
                    deviceName: 'DS-C55N-VWMS1',
                    deviceType: 5,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 14,
                    deviceName: 'DS-C55N-VWMS2',
                    deviceType: 5,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
                {
                    id: 15,
                    deviceName: 'DS-C55N-VWMS3',
                    deviceType: 5,
                    model: 'GRT-100-45',
                    brand: '',
                    plugin: 2,
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    extAttrs: '[{"name":"设备地址","key":"deviceAddr","valType":2},{"name":"端口","key":"port","valType":1},{"name":"用户名","key":"userName","valType":2},{"name":"密码","key":"password","valType":2}]',
                    indexs: [
                        {
                            id: 1,
                            indexName: '温度',
                            oId: 'Abc000000001',
                            indexNo: '1',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 2,
                            indexName: '门状态',
                            oId: 'Abc000000001',
                            indexNo: '2',
                            valueType: 3,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        },
                        {
                            id: 3,
                            indexName: '湿度',
                            oId: 'Abc000000003',
                            indexNo: '3',
                            valueType: 1,
                            isControlable: true,
                            isAlert: true,
                            hysType: 1,
                            hysTime: 10,
                            valMapping: '',
                            rules: []
                        }
                    ]
                },
            ]
            return resultSuccess(deviceListResp);
        },
    }
] as MockMethod[];