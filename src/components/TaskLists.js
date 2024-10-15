import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { tableColumns } from '../utility/constant';
import { fetchTaskList } from '../redux/actionCreators';

const TaskLists = () => {
  const dispatch = useDispatch();
  const taskList = useSelector(
    (state) => state.taskList
  );

  const pageLoader = useSelector(
    (state) => state.pageLoader
  );

  useEffect(() => {
    dispatch(fetchTaskList());
  }, []);

  return (
    <Table
        columns={tableColumns}
        dataSource={taskList}
        loading={pageLoader}
        rowKey={'id'}
        pagination={{ defaultPageSize: 3 }}
    />
  );
}

export default TaskLists;
