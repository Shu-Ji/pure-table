import {h, render} from 'preact';

import PureTableApp from './pure-table';

export default class PureTable {
    readonly option: PureTableOption;

    constructor(option: PureTableOption) {
        this.option = option;
        this._render();
    }

    private _render() {
        const el = document.querySelector(this.option.el);
        if (el) {
            render(<PureTableApp />, document.querySelector(this.option.el)!);
        } else {
            console.error('el does not exist');
        }
    }
}

export interface PureTableOption {
    // Table mount point
    el: string;
}
