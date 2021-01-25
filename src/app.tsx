import {TableProps} from 'antd/es/table';
import {h} from 'preact';
import {useState} from 'preact/hooks';

import * as React from 'react';
import {Resizable, ResizableProps, ResizeCallbackData} from 'react-resizable';
import {Button, Table} from 'antd';

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
        <div style={{padding: 20}}>
            <p>
                <Button type={'primary'}>Antd 按钮</Button>
            </p>
            <Table
                {...rc_table_props}
                components={components}
                columns={columns as any}
            />
        </div>
    );
}
