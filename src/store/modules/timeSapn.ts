import { defineStore } from 'pinia';
import fetchApi from '/@/api/timeSetting';

interface timeSpanState {
    timeSpanList: any[],
}


export const useTimeSpanStore = defineStore("app-timeSpan", {
    state: (): timeSpanState => {
        return {
            timeSpanList: []
        }
    },
    getters: {

    },
    actions: {
        setTimeSpanList(timeSpanList: any) {
            this.timeSpanList = timeSpanList;
        },
        async getTimeSpanList() {
            const res = await fetchApi.getTimeSpanList()
            if (res && Array.isArray(res.list)) {
                this.setTimeSpanList(res.list);
                return res.list;
            }
            return null;
        }
    }
})