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
];
