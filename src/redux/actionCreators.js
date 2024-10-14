import { generateRandomId ,getDateString } from "../utility/helper";
import actions from "./actions";

export const fetchTaskList = () => ({
    type: actions.FETCH_TASK_LIST,
});

export const fetchTaskListSuccess = (response) => ({
    type: actions.FETCH_TASK_LIST_SUCCESS,
    payload: response,
});

export const fetchTaskListFailed = () => ({
    type: actions.FETCH_TASK_LIST_FAILURE,
});

export const addTask = (values) => ({
    type: actions.ADD_TASK,
    payload: {
        id: generateRandomId().toString(),
        name: values.name,
        created_date: getDateString(),
        updated_date: null,
    },
});

export const addTaskSuccess = (response) => ({
    type: actions.ADD_TASK_SUCCESS,
    payload: response,
});

export const updateTaskDetails = (values, selectedTask) => ({
    type: actions.UPDATE_TASK_DETAILS,
    payload: {
        name: values.name,
        updated_date: getDateString(),
    },
    taskId: selectedTask.id,
});

export const updateTaskSuccess = (response) => ({
    type: actions.UPDATE_TASK_DETAILS_SUCCESS,
    payload: response,
});

export const removeTask = (record) => ({
    type: actions.REMOVE_TASK,
    taskId: record.id,
});

export const removeTaskSuccess = (response) => ({
    type: actions.REMOVE_TASK_SUCCESS,
    taskId: response.id,
});

export const taskModalVisibleStatus = (status, record) => ({
    type: actions.CREATE_AND_EDIT_TASK_MODAL,
    modalStatus: status,
    isEditMode: !!record,
    taskDetails: record || {},
});
