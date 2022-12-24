/**
 * @name 代理
 * @description 代理列表
 */

import { ResAgent } from './model';
import { ResList } from '../common/model'
import { post } from '/@/utils/http';

enum URL {
    agentList = '/api/agent/getAgentList',
}

const agentList = async () => post<ResList<ResAgent>>({ url: URL.agentList });


export default { agentList };
