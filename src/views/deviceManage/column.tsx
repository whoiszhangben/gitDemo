import { ColumnProps } from 'ant-design-vue/es/table';

export const columns: ColumnProps[] = [
    {
        key: 'portName',
        dataIndex: 'portName',
        width: 200
    },
    {
        key: 'portNo',
        dataIndex: 'portNo',
        width: 200
    },
    {
        key: 'portType',
        dataIndex: 'portType',
        width: 200
    },
    {
        key: 'portDesc',
        dataIndex: 'portDesc',
    },
    {
        key: 'action',
        dataIndex: 'operation',
        width: 200
    },
];

export const columns_readonly: ColumnProps[] = [
    {
        key: 'indexName',
        dataIndex: 'indexName',
        width: 110
    },
    {
        key: 'indexNo',
        dataIndex: 'indexNo',
        width: 80
    },
    {
        key: 'oId',
        dataIndex: 'oId',
        width: 120
    },
    {
        key: 'valueType',
        dataIndex: 'valueType',
        width: 100
    },
    {
        key: 'isControlable',
        dataIndex: 'isControlable',
        width: 100
    },
    {
        key: 'isEmitter',
        dataIndex: 'isEmitter',
        width: 100
    },
    {
        key: 'isAlert',
        dataIndex: 'isAlert',
        width: 100
    },
    {
        key: 'hysType',
        dataIndex: 'hysType',
        width: 100
    },
    {
        key: 'hysTime',
        dataIndex: 'hysTime',
        width: 80
    },
    {
        key: 'rules',
        dataIndex: 'rules',
    },
    {
        key: 'valMapping',
        dataIndex: 'valMapping',
    },
];
