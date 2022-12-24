import { defineStore } from 'pinia';
import fetchApi from '/@/api/agent'

interface AgentState {
    agentList: any[]
}


export const useAgentStore = defineStore("app-agent", {
    state: (): AgentState => {
        return {
            agentList: []
        }
    },
    getters: {

    },
    actions: {
        setAgentList(agentList: any) {
            this.agentList = agentList;
        },
        async getAgentList() {
            const res = await fetchApi.agentList()
            if (res && Array.isArray(res.list)) {
                this.setAgentList(res.list);
                return res.list;
            }
            return null;
        }
    }
})