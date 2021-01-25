import {h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import Table from 'antd/es/table';
import {TableProps} from 'antd/es/table/Table';

import * as React from 'react';
import {Resizable, ResizableProps, ResizeCallbackData} from 'react-resizable';

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

export default function PureTableApp<RecordType extends object = any>(
    props: PureTableAppProps<RecordType>,
) {
    const {rc_table_props} = props;
    const [columns, setColumns] = useState(initColumns());

    const components = {
        header: {
            cell: ResizableTitle,
        },
    };

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

    const table_props = {
        bordered: false,
        size: 'small',
        components,
        scroll: {x: '100%'},
        ...rc_table_props,

        // 注意 columns 需要覆盖 rc_table_props 中的定义，所以需要放后面
        columns,
    } as TableProps<RecordType>;

    return <Table {...table_props} />;
}
