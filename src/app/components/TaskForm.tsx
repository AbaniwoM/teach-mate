import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../GlobalRedux/Features/TaskReducer';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    dispatch(addTask({ title, description, date}))
    navigate('/');
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New Task</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name='title' className='form-control' placeholder='Enter title'
                    onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name='description' className='form-control' placeholder='Description'
                    onChange={e => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="date">Due Date:</label>
                    <input type="date" name='date' className='form-control' placeholder='Date'
                    onChange={e => setDate(e.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default TaskForm