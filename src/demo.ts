import {ColumnType} from 'rc-table/es/interface';
import {ColumnProps} from 'rc-table/es/sugar/Column';
import PureTable from './index';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 200,
    },
    {
        title: 'Operations',
        dataIndex: '',
        key: 'operations',
        render: () => {
            return '操作';
        },
    },
];

const data = [
    {name: 'Jack', age: 28, address: 'some where', key: '1'},
    {name: 'Rose', age: 36, address: 'some where', key: '2'},
];

const pure_table = new PureTable('#table-mount-point', {
    id: 'my-table',
    data,
    columns,
});
