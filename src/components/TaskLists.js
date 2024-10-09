import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions';
import { Table } from 'antd';
import { tableColumns } from '../utility/constant';

function TaskLists() {
  const dispatch = useDispatch();
  const taskList = useSelector(
    (state) => state.taskList
  );

  const pageLoader = useSelector(
    (state) => state.pageLoader
  );

  useEffect(() => {
    dispatch({
      type: actions.FETCH_TASK_LIST,
    });
  }, []);

  return (
    <Table
        columns={tableColumns}
        dataSource={taskList}
        pagination={true}
        loading={pageLoader}
        pagination={{ defaultPageSize: 3 }}
    />
  );
}

export default TaskLists;
