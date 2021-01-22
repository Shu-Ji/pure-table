import {h} from 'preact';

import Table from 'rc-table';

import './style.less';
import {TableProps} from 'rc-table/es/Table';

export default function PureTableApp<RecordType = unknown>(
    props: TableProps<RecordType>,
) {
    return <Table {...props} prefixCls="pure-table" />;
}
