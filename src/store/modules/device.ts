import { defineStore } from 'pinia';
import fetchApi from '/@/api/device'

interface DeviceState {
    deviceList: any[]
}


export const useAgentStore = defineStore("app-device", {
    state: (): DeviceState => {
        return {
            deviceList: []
        }
    },
    getters: {

    },
    actions: {
        setDeviceList(deviceList: any) {
            this.deviceList = deviceList;
        },
        async getAgentList() {
            const res = await fetchApi.deviceList()
            if (res && Array.isArray(res.list)) {
                this.setDeviceList(res.list);
                return res.list;
            }
            return null;
        }
    }
})