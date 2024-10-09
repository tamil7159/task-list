import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../axios.client';
import actions from './actions';
import { message } from 'antd'

function* fetchTaskList() {
  try {
    const response = yield call(() => axios.get('tasks'));
    yield put({
      type: actions.FETCH_TASK_LIST_SUCCESS,
      payload: response,
    });
    message.success('Fetch task list successfully!!')
  } catch (error) {
    message.error('Fetch task list failed!!')
    yield put({
      type: actions.FETCH_TASK_LIST_FAILURE,
    });
  }
}

function* addTask(params) {
    try {
        const response = yield call(() => axios.post(`tasks`, params.payload));
        yield put({
            type: actions.ADD_TASK_SUCCESS,
            payload: response,
        });
        message.success('Task added successfully!!')
    } catch (error) {
        message.error('Failed Task add!!')
    }
}

function* updateTaskDetails(params) {
    try {
        const response = yield call(() => axios.patch(`tasks/${params.taskId}`, params.payload));
        yield put({
            type: actions.UPDATE_TASK_DETAILS_SUCCESS,
            payload: response,
        });
        message.success('Updated task details!!')
    } catch (error) {
        message.error('Failed task details update!!')
    }
}

function* removeTask(params) {
    try {
        const response = yield call(() => axios.delete(`tasks/${params.taskId}`));
        yield put({
            type: actions.REMOVE_TASK_SUCCESS,
            taskId: response.id,
        });
        message.success('Removed task successfully!!')
    } catch (error) {
        message.error('Failed task remove!!')
    }
}

export default function* rootSaga() {
    yield takeLatest(actions.FETCH_TASK_LIST, fetchTaskList);
    yield takeLatest(actions.ADD_TASK, addTask);
    yield takeLatest(actions.UPDATE_TASK_DETAILS, updateTaskDetails);
    yield takeLatest(actions.REMOVE_TASK, removeTask);
}
