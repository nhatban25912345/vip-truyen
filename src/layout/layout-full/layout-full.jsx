import { Outlet } from 'react-router-dom';
import AppHeader from '../../components/layout-full/app-bar/app-bar';
import './layout-full.css'
import { Box } from '@mui/material';

export default function LayoutFull() {
    return (
        <div id="container">
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box className='box-content'>
                    <AppHeader />
                </Box>
            </Box>
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                marginTop: 3
            }}>
                <Box className='box-content'>
                    <Outlet />
                </Box>
            </Box>
        </div>
    );
}