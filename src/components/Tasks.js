
import Task from './Task';
const Tasks = ({ tasks,onDelete }) => {
	
	return (
		<>
			{tasks.map((task) => (
			<Task key={task.id} task={task} onDelete={onDelete}/>
			))}
		</>
	)
}
const taskClass = 'font-bold text-xl ml-8';
export default Tasks
