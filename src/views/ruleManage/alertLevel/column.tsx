import { ColumnProps } from 'ant-design-vue/es/table';

export const columns: ColumnProps[] = [
    {
        key: 'alertLevelName',
        dataIndex: 'alertLevelName',
        width: 200,
    },
    {
        key: 'alertLevelColor',
        dataIndex: 'alertLevelColor',
        width: 200,
        align: 'center'
    },
    {
        key: 'alertLevelDesc',
        dataIndex: 'alertLevelDesc',
    },
    {
        dataIndex: 'operation',
        key: 'action',
        width: 200,
        // slots: { customRender: 'action' },
    },
];
