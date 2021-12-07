import { useState } from 'react';

const AddTask = ({onAdd}) => {
	const [text,setText] = useState('')
	const [day,setDay] = useState('')
	const [reminder,setReminder] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()

		if(!text) {
			alert('Please add task')
			return
		}
		onAdd({text,day,reminder})

		setText('')
		setDay('')
		setReminder(false)
	}
	return (
			<form className="add-form" onSubmit={onSubmit}>
				<div className="mb-2 flex flex-row">
					<input type="text" placeholder="add Task" className="form-control" value={text} onChange={(e) => setText(e.target.value)}/>
				</div>
				<div className="mb-2 flex flex-row">
					<input type="text" placeholder="Day & time" className="form-control"  value={day} onChange={(e) => setDay(e.target.value)}/>
				</div>
				<div className="mb-2 flex flex-row items-center gap-3">
					<label>Set reminder</label>
					<input type="checkbox" checked={reminder} className=""  value={text} onChange={(e) => setReminder(e.currentTarget.checked)}/>
				</div>
				<input type="submit" value="Save Task" className="btn btn-primary block w-1/2" />
			</form>
	)
}

export default AddTask
