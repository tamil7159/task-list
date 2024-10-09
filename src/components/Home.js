import { Button, Layout } from 'antd'
import { Header, Content } from 'antd/es/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions';
import TaskLists from './TaskLists';
import CreateAndEditTaskModal from './CreateAndEditTaskModal';
import '../styles/global.css';

function Home(props) {
    const dispatch = useDispatch();
    const isTaskModalVisible = useSelector(
        (state) => state.isTaskModalVisible
    );
    const addNewTask = () => {
        dispatch({
            type: actions.CREATE_AND_EDIT_TASK_MODAL,
            modalStatus: true,
        });
    }
    return (
        <Layout className={'main-container'}>
            <Header>
                <h2>Tasks</h2>
                <Button
                    type={'primary'}
                    onClick={addNewTask}
                >
                    Add Task
                </Button>
            </Header>
            <Content>
                <TaskLists />
            </Content>
            {isTaskModalVisible && (<CreateAndEditTaskModal />)}
        </Layout>
        
    );
}

export default Home;