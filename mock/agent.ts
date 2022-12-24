import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './_util';

export default [
    {
        url: '/api/agent/getAgentList',
        timeout: 200,
        method: 'post',
        response: () => {
            let agentResp = {
                "list": [{
                    id: 1,
                    agentName: '代理1测试一下努力v看到v重新考虑打开附件浮动空间范德萨范德萨反对',
                    model: 'GRT-100-45',
                    remark: 'This is a test',
                    vendor: '华为',
                    contact: '13700001234',
                    isAlert: true,
                    alertLevel: 1,
                    hysType: 1,
                    hysTime: 10,
                    hoverIndex: -1,
                    ports: [
                        {
                            id: 1,
                            portName: '端口1',
                            portNo: 1,
                            portType: 1
                        },
                        {
                            id: 2,
                            portName: '端口2',
                            portNo: 2,
                            portType: 1
                        },
                        {
                            id: 3,
                            portName: '端口3',
                            portNo: 3,
                            portType: 1
                        }
                    ]
                },
                {
                    id: 1,
                    agentName: '代理1测试一下努力v看到v重新考虑打开附件浮动空间范德萨范德萨反对',
                    vendor: '华为',
                    contact: '13700001234',
                    model: 'GRT-100-48',
                    remark: '代理1测试一下努力v看到v重新考虑打开附件浮动空间范德萨范德萨反对代理1测试一下努力v看到v重新考虑打开附件浮范德萨看风景幅度萨芬范德萨发大水开发进度是开放的的撒方法发生的覆盖广泛大使馆士大夫大师傅回家',
                    isAlert: false,
                    alertLevel: null,
                    hysType: null,
                    hysTime: null,
                    hoverIndex: -1,
                    ports: [
                        {
                            id: 1,
                            portName: '金端口',
                            portNo: 1,
                            portType: 1
                        },
                        {
                            id: 2,
                            portName: '银端口',
                            portNo: 2,
                            portType: 1
                        },
                        {
                            id: 3,
                            portName: '铜端口',
                            portNo: 3,
                            portType: 1
                        },
                        {
                            id: 4,
                            portName: '铁端口',
                            portNo: 4,
                            portType: 1
                        }
                    ]
                },
                {
                    id: 1,
                    agentName: '代理3',
                    vendor: '中兴',
                    contact: '13700001234',
                    model: 'GRT-200-45',
                    remark: '',
                    isAlert: false,
                    alertLevel: null,
                    hysType: null,
                    hysTime: null,
                    hoverIndex: -1,
                    ports: [
                        {
                            id: 1,
                            portName: 'DI口1',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 2,
                            portName: 'DI口2',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 3,
                            portName: 'DI口3',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 4,
                            portName: 'DI口4',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 5,
                            portName: 'DI口5',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 6,
                            portName: 'DI口6',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 7,
                            portName: 'DI口7',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 8,
                            portName: 'DI口8',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 9,
                            portName: 'DI口9',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 10,
                            portName: 'DI口10',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 11,
                            portName: 'DI口11',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 12,
                            portName: 'DI口12',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 13,
                            portName: 'DI口13',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 14,
                            portName: 'DI口14',
                            portNo: 1,
                            portType: 2
                        },
                        {
                            id: 15,
                            portName: 'DI口15',
                            portNo: 1,
                            portType: 2
                        },
                    ]
                }
                ],
                "total": 8,
                "page": 1,
                "pageSize": 10
            }
            return resultSuccess(agentResp);
        },
    }
] as MockMethod[];