/**
 * @name 设备
 * @description 设备列表
 */

import { ResDevice } from './model';
import { post } from '/@/utils/http';

enum URL {
    deviceList = '/api/device/getDeviceList',
}

const deviceList = async () => post<ResDevice>({ url: URL.deviceList });


export default { deviceList };
