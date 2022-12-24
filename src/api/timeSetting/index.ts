/**
 * @name 时段配置
 * @description 时段配置管理
 */

 import { ResTimeSpan } from './model';
 import { ResList } from '../common/model'
 import { post } from '/@/utils/http';
 
 enum URL {
     timeSpanList = '/api/timeSetting/getTimeSpanList',
 }
 
 const getTimeSpanList = async () => post<ResList<ResTimeSpan>>({ url: URL.timeSpanList });
 
 
 export default { getTimeSpanList };
 