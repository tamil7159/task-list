import { Button, Layout } from 'antd'
import { Header, Content } from 'antd/es/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import TaskLists from './TaskLists';
import CreateAndEditTaskModal from './CreateAndEditTaskModal';
import '../styles/global.css';
import { taskModalVisibleStatus } from '../redux/actionCreators';

const Home = () => {
    const dispatch = useDispatch();
    const isTaskModalVisible = useSelector(
        (state) => state.isTaskModalVisible
    );
    const addNewTask = () => {
        dispatch(taskModalVisibleStatus(true));
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