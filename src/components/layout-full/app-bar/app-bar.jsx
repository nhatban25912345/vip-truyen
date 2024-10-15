import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppBarDrawer from '../app-bar-drawer/app-bar-drawer';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../../search-box/search-box';

export default function AppHeader() {
  const drawerRef = React.useRef(null);
  const searchBoxRef = React.useRef(null);

  const navigate = useNavigate();

  const handleOpenDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.openDrawer(); // Gọi hàm từ child
    }
  };

  const handleHomeClick = () => {
    navigate('')
  }

  const handleOpenSearchBox = () => {
    if (searchBoxRef.current) {
      searchBoxRef.current.openSearchBox(); // Gọi hàm từ child
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="search"
            sx={{ mr: 2 }}
            onClick={handleOpenSearchBox}
          >
            <SearchOutlinedIcon />
          </IconButton>
          {/* Biểu tượng Home được căn giữa */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="home"
              onClick={handleHomeClick} // Xử lý sự kiện khi nhấn vào biểu tượng
            >
              <img src="https://static.vecteezy.com/system/resources/thumbnails/023/205/102/small/circle-fire-frame-free-png.png" alt="Logo" style={{ width: 40, height: 40 }} />
            </IconButton>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBarDrawer ref={drawerRef} />
      <SearchBox ref={searchBoxRef}/>
      {/* Banner ảnh ở dưới cùng */}
      <Box
        component="img"
        src="https://static.cdnno.com/storage/topbox/6aa0d337fe0bd665114e987793a368da.webp"
        alt="Banner"
        sx={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          maxHeight: '400px', // Đặt chiều cao tối đa cho banner nếu cần
        }}
      />
    </Box>
  );
}