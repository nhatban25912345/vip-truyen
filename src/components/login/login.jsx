import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/login/loginSlice';
import { toast } from 'react-toastify';

const LoginPopup = React.forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('authenticated: ',isAuthenticated)
    })


    const resetState = () => {
        setEmail('')
        setPassword('')
    }

    React.useImperativeHandle(ref, () => ({
        handleClickOpen,
    }))

    // Open the dialog
    const handleClickOpen = () => {
        resetState()
        setOpen(true);
    };

    // Close the dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Handle login submission
    const handleLogin = () => {
        // Call your login logic here
        // Example: dispatch(login({ email, password }));
        dispatch(login({
            username: email,
            password: password,
        }))
        .then((action) => {
            if (login.fulfilled.match(action)) {
                toast.success('Đăng nhập thành công!', {
                    position: 'top-right',
                  });
                setOpen(false)
            }
            else {
                toast.error('Đăng nhập thất bại! Vui lòng kiểm tra thông tin.', {
                    position: 'top-right',
                });
            }
        })
        .catch((error) => {
            // Xử lý lỗi nếu có
            toast.error('Đăng nhập thất bại! Vui lòng thử lại sau.', {
                position: 'top-right',
            });
        });
    };

    return (
        <>
            {/* Dialog (Popup) */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        Đăng nhập
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </DialogTitle>

                <DialogContent>
                    {/* Logo */}
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/205/102/small/circle-fire-frame-free-png.png" alt="Logo" style={{ width: 40, height: 40 }} />

                    {/* Form fields */}
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Mật khẩu"
                        type="password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Forgot password link */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="textSecondary">
                            Quên mật khẩu
                        </Typography>
                    </div>

                    {/* Login button */}
                    <Button
                        variant="contained"
                        fullWidth
                        style={{ backgroundColor: '#d4a45b', color: 'white', marginTop: '16px' }}
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </Button>

                    {/* Registration link */}
                    <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
                        Chưa có tài khoản?{' '}
                        <a href="/register" style={{ color: '#d4a45b', textDecoration: 'none' }}>
                            Đăng ký ngay
                        </a>
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
});

export default LoginPopup;
