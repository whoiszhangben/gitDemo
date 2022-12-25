/**
 * @name 设备
 * @description 设备列表
 */

 import { ResAgent } from './model';
 import { ResList } from '../common/model'
 import { post } from '/@/utils/http';
 
 enum URL {
     deviceList = '/api/device/getDeviceList',
 }
 
 const deviceList = async () => post<ResList<ResAgent>>({ url: URL.deviceList });
 
 
 export default { deviceList };
 