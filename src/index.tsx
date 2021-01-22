import {h, render} from 'preact';

import PureTableApp, {PureTableAppProps} from './app';

export default class PureTable<RecordType = unknown> {
    constructor(el: string, rc_table_props: PureTableAppProps<RecordType>) {
        const _el = document.querySelector(el);
        if (_el) {
            render(<PureTableApp {...rc_table_props} />, _el);
        } else {
            console.error('el does not exist');
        }
    }
}
