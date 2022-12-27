import { defineStore } from 'pinia';
import fetchApi from '/@/api/device'

interface DeviceState {
    deviceList: any[],
    selectedKey: string
}

export const useDeviceStore = defineStore("app-device", {
    state: (): DeviceState => {
        return {
            deviceList: [],
            selectedKey: ''
        }
    },
    getters: {

    },
    actions: {
        setSelectKey(key: string) {
            this.selectedKey = key;
        },
        setDeviceList(deviceList: any) {
            this.deviceList = deviceList;
        },
        async getDeviceList() {
            const res = await fetchApi.deviceList()
            if (res) {
                this.setDeviceList(res);
                return res;
            }
            return null;
        }
    }
})