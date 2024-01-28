'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addTask } from '../GlobalRedux/Features/TaskReducer';
import { useRouter } from 'next/navigation';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    dispatch(addTask({title, description, date}));
    router.push('/page.tsx')
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <button className="px-4 py-3 rounded md:ml-40 flex-shrink-0 text-sm font-bond text-white uppercase transition-all duration-150 ease-linear bg-rose-500 hover:bg-rose-400">
          Add Task +
        </button> 
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h4">
            Title
          </Typography>
          <TextField
          id="outlined-multiline-flexible"
          label="Title"
          value={title}
          multiline
          maxRows={1}
          onChange={e => setTitle(e.target.value)}
          />
          <TextField
          id="outlined-multiline-flexible"
          label="Description"
          value={description}
          multiline
          rows={4}
          onChange={e => setDescription(e.target.value)}
          />
          <TextField
          id="outlined-multiline-flexible"
          label="Due Date"
          value={date}
          multiline
          maxRows={4}
          onChange={e => setDate(e.target.value)}
          />
          <Button onSubmit={handleSubmit}>Submit</Button>
        </Box>
        </form>
      </Modal>
    </div>
  );
}