import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions';
import { Modal, Input, Form } from 'antd';
import { generateRandomId, getDateString } from '../utility/helper';

function CreateAndEditTaskModal(props) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const isTaskModalVisible = useSelector(
        (state) => state.isTaskModalVisible
    );
    const isEditTaskMode = useSelector(
        (state) => state.isEditTaskMode
    );
    const selectedTask = useSelector(
        (state) => state.selectedTask
    );
    useEffect(() => {
        return () => { form.resetFields() };
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        form.validateFields().then((values) => {
            if (isEditTaskMode) {
                dispatch({
                    type: actions.UPDATE_TASK_DETAILS,
                    payload: {
                        name: values.name,
                        updated_date: getDateString(),
                    },
                    taskId: selectedTask.id,
                });
            } else {
                dispatch({
                    type: actions.ADD_TASK,
                    payload: {
                        id: generateRandomId().toString(),
                        name: values.name,
                        created_date: getDateString(),
                        updated_date: null,
                    },
                });
            }   
        }).catch(error => {
            console.log(error);
        });
    }

    const handleClose = () => {
        dispatch({
            type: actions.CREATE_AND_EDIT_TASK_MODAL,
            modalStatus: false,
        });
    }

    return (
        <Modal
            title={isEditTaskMode ? 'Update Task' : 'Create Task'}
            open={isTaskModalVisible}
            onOk={handleSubmit}
            onCancel={handleClose}
            okText={isEditTaskMode ? 'Update' : 'Create'}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                        required: true,
                        message: 'Enter task name',
                        },
                    ]}
                    initialValue={isEditTaskMode ? selectedTask.name : undefined}
                >
                    <Input placeholder={'Enter task name'} />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CreateAndEditTaskModal;