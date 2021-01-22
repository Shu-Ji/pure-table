import {h, render} from 'preact';
import {TableProps} from 'rc-table/es/Table';

import PureTableApp from './app';

export default class PureTable<RecordType = unknown> {
    constructor(el: string, option: TableProps<RecordType>) {
        const _el = document.querySelector(el);
        if (_el) {
            render(<PureTableApp {...option} />, _el);
        } else {
            console.error('el does not exist');
        }
    }
}
