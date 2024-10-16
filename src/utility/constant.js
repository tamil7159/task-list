import { Button, Modal } from "antd";
import store from "../redux/store";
import { removeTask, taskModalVisibleStatus } from "../redux/actionCreators";

export const tableColumns = [
    {
        title: 'Task Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Created At',
        dataIndex: 'created_date',
        key: 'created_date',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Updated At',
        dataIndex: 'updated_date',
        key: 'updated_date',
        render: (text) => <div>{text || '-'}</div>,
    },
    {
        title: 'Actions',
        key: 'action',
        dataIndex: 'action',
        width: 100,
        render: (text, record) => (
            <div className="action-btns">
                <Button 
                    className={'edit-btn'}
                    onClick={() => {
                        store.dispatch(taskModalVisibleStatus(true, record));
                    }}
                >
                    Edit
                </Button>
                <Button className={'delete-btn'} onClick={() => Modal.confirm({
                    title: 'Can you confirm to delete?',
                    okText: 'Yes',
                    onOk() {
                        store.dispatch(removeTask(record));
                    },
                    onCancel() {},
                })}>
                    Delete
                </Button>
            </div>
        )
    }
];