import actions from './actions';

const initState = {
  pageLoader: false,
  taskList: [],
  isTaskModalVisible: false,
  isEditTaskMode: false,
  selectedTask: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.FETCH_TASK_LIST:
      return {
        ...state,
        pageLoader: true,
      };
    case actions.FETCH_TASK_LIST_SUCCESS:
      return {
        ...state,
        taskList: action.payload,
        pageLoader: false,
      };
    case actions.FETCH_TASK_LIST_FAILURE:
        return {
            ...state,
            pageLoader: false,
        };
    case actions.CREATE_AND_EDIT_TASK_MODAL:
        return {
            ...state,
            selectedTask: action.taskDetails,
            isTaskModalVisible: action.modalStatus,
            isEditTaskMode: action.isEditMode,
        };
    case actions.ADD_TASK_SUCCESS:
        return  {
            ...state,
            taskList: [...state.taskList, action.payload],
            isTaskModalVisible: false,
        }; 
    case actions.UPDATE_TASK_DETAILS_SUCCESS:
        const newUpdatedTasks = state.taskList.map((task) => {
            if (task.id === action.payload.id) {
                task = action.payload;
            }
            return task;
        });
        return {
            ...state,
            taskList: newUpdatedTasks,
            isTaskModalVisible: false,
        };
    case actions.REMOVE_TASK_SUCCESS:
        const updatedTasks = state.taskList.filter(task => task.id !== action.taskId)
        return {
            ...state,
            taskList: updatedTasks,
        };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
