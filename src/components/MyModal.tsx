import { useState } from 'react';
import { Button, Modal, Box, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Modals = () => {
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);


    return (
        <div className="App">
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Sign In
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="sign-in-modal-title">
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '1px solid #000', p: 4 }}>
                    <Typography id="sign-in-modal-title" variant="h6" component="h2" className='text-center'>
                        Sign In
                    </Typography>
                    <TextField fullWidth label="Username" margin="normal" />
                    <TextField
                        fullWidth
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Modals;