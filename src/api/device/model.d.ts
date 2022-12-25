export interface Port {
    id?: number,
    portName: string,
    portNo: number,
    portType: number
}

export interface ResAgent {
    id: number,
    agentName: string,
    model: string,
    vendor: string,
    contact: string,
    remark: string,
    isAlert: boolean,
    alertLevel?: number,
    hysType?: number,
    hysTime?: number,
    ports: Port[]
}