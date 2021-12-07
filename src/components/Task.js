import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div className={`border-2 mx-8 border-blue-700 my-2 px-3 py-2 rounded-md bg-indigo-400 text-white ${task.reminder ? 'border-l-8' : ''}`} onDoubleClick={() => onToggle(task.id)}>
			<h3 className="flex flex-row justify-between items-center">{task.text}
				<FaTimes className="cursor-pointer text-red-500" onClick={() => onDelete(task.id)} /></h3>
			<p className="leading-8">{task.day}</p>
		</div>
	)
}

export default Task
