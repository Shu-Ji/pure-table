import PureTable from './index';

const columns = [
    {
        title: '这是一个很长的字符串用来测试的',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Operations',
        dataIndex: '',
        key: 'operations',
        fixed: 'right',
        render: () => {
            return '操作';
        },
    },
];

const data = [];
for (let i = 0; i < 200; i++) {
    data.push({
        name:
            'UserNameLongStringUserNameLongStringUserNameLongStringUserNameLongStringUserNameLongString' +
            i,
        age: i,
        address: 'some where ' + i,
        key: i.toString(),
    });
}

new PureTable('#table-mount-point', {
    rc_table_props: {
        id: 'my-table',
        dataSource: data,
        columns: columns as any,
    },
});
