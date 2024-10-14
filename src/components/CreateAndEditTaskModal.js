import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, taskModalVisibleStatus, updateTaskDetails } from '../redux/actionCreators';
import { Modal, Input, Form } from 'antd';

const CreateAndEditTaskModal = () => {
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
                dispatch(updateTaskDetails(values, selectedTask));
            } else {
                dispatch(addTask(values));
            }   
        }).catch(error => {
            console.log(error);
        });
    }

    const handleClose = () => {
        dispatch(taskModalVisibleStatus(false));
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