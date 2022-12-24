import { ColumnProps } from 'ant-design-vue/es/table';

export const columns: ColumnProps[] = [
    {
        key: 'timeSpanName',
        dataIndex: 'timeSpanName',
        width: 200,
    },
    {
        key: 'timeSpanDesc',
        dataIndex: 'timeSpanDesc',
    },
    {
        dataIndex: 'operation',
        key: 'action',
        width: 200,
        // slots: { customRender: 'action' },
    },
];
