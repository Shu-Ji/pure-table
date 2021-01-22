import {h} from 'preact';
import {useState} from 'preact/hooks';

import Table from 'rc-table';
import {TableProps} from 'rc-table/es/Table';
import * as React from 'react';
import {Resizable, ResizableProps, ResizeCallbackData} from 'react-resizable';

import 'react-resizable/css/styles.css';

import './style.less';

export interface PureTableAppProps<RecordType> {
    rc_table_props: TableProps<RecordType>;
}

const ResizableTitle = (props: ResizableProps) => {
    const {onResize, width, ...rest_props} = props;

    return (
        <Resizable
            width={width}
            height={0}
            onResize={onResize}
            resizeHandles={['e']}
        >
            <th {...rest_props} />
        </Resizable>
    );
};

export default function PureTableApp<RecordType = unknown>(
    props: PureTableAppProps<RecordType>,
) {
    const {rc_table_props} = props;
    const [columns, setColumns] = useState(initColumns());

    function handleResize(index: number) {
        return (e: React.SyntheticEvent, {size}: ResizeCallbackData) => {
            const _columns = [...(columns || [])];
            (_columns[index] as any).width = size.width;
            setColumns(_columns);
        };
    }

    function initColumns() {
        return rc_table_props.columns?.map((col, index) => {
            return {
                ...col,
                onHeaderCell: (column: ResizableProps) => {
                    return {
                        width: column.width,
                        onResize: handleResize(index),
                    };
                },
            };
        });
    }

    const components = {
        header: {
            cell: ResizableTitle,
        },
    };

    return (
        <Table
            {...rc_table_props}
            components={components}
            columns={columns as any}
            prefixCls="pure-table"
        />
    );
}
