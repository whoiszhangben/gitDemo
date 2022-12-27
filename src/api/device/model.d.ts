export interface Index {
    id?: number,
    indexName: string,
    oId: number,
    valueType: number,
    isControlable: boolean,
    isAlert: boolean,
    hysType: number,
    hysTime: number,
    valMapping: string,
    rules: any[]
}

export interface ResDevice {
    id: number,
    deviceName: string,
    deviceType: number,
    model: string,
    brand: string,
    plugin: number | undefined,
    isAlert: boolean,
    alertLevel?: number,
    hysType?: number,
    hysTime?: number,
    extAttrs: string,
    indexs: Index[]
}