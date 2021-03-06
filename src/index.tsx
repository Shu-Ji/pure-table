import {h, render} from 'preact';

import './style';
import PureTableApp, {PureTableAppProps} from './app';

export default class PureTable<RecordType extends object = any> {
    constructor(el: string, rc_table_props: PureTableAppProps<RecordType>) {
        const _el = document.querySelector(el);
        if (_el) {
            render(<PureTableApp {...rc_table_props} />, _el);
        } else {
            console.error(`el ${el} does not exist`);
        }
    }
}
