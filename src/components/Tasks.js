
import Task from './Task';
const Tasks = ({ tasks,onDelete,onToggle }) => {
	
	return (
		<>
			{tasks.map((task) => (
			<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
			))}
		</>
	)
}
// const taskClass = 'font-bold text-xl ml-8';
export default Tasks
