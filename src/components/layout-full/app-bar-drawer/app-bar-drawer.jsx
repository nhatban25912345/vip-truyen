import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import './app-bar-drawer.css'
import LoginPopup from '../../login/login';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/login/loginSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AppBarDrawer = React.forwardRef((props, ref) => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
  const user = useSelector((state) => state.login.user)
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const openDrawer = () => {
    setOpen(true)
  }

  const loginPopupRef = React.useRef(null);

  const handleClickAllNovels = () => {
    navigate('/danh-sach')
    setOpen(false)
  }

  const handleOpenLoginPopup = () => {
    if (loginPopupRef.current) {
      setOpen(false)
      loginPopupRef.current.handleClickOpen(); // Gọi hàm từ child
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Gọi action logout
    toast.success('Đăng xuất thành công!', {position: 'top-right'})
  };

  React.useImperativeHandle(ref, () => ({
    openDrawer,
  }))

  const DrawerList = (
    <div
      style={{
        width: 350,
        backgroundColor: "#f5f0e1", // Màu nền tương tự trong hình
        height: "100%",
      }}
      role="presentation"
    >
      {/* Icon mặt trời và nút đóng */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <LightModeOutlinedIcon />
        <IconButton onClick={toggleDrawer(false)}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>

      {isAuthenticated ? (
        <div>
          <h3 style={{marginLeft: '10px'}}>Chào mừng, {user ? user.name : 'Người dùng'}!</h3> {/* Hiển thị tên người dùng */}
          {/* Nút Đăng xuất */}
          <ListItem button="true" onClick={handleLogout} className='btn-cursor'>
            <ListItemIcon>
              <LockOpenOutlinedIcon /> {/* Icon Đăng xuất */}
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" />
          </ListItem>
        </div>
      ) : (
        <>
          <List>
            {/* Đăng nhập */}
            <ListItem button="true" onClick={handleOpenLoginPopup} className='btn-cursor'>
              <ListItemIcon>
                <LockOpenOutlinedIcon /> {/* Icon Đăng nhập */}
              </ListItemIcon>
              <ListItemText primary="Đăng nhập" />
            </ListItem>

            {/* Đăng ký tài khoản */}
            <ListItem button="true">
              <ListItemIcon>
                <AppRegistrationOutlinedIcon /> {/* Icon Đăng ký tài khoản */}
              </ListItemIcon>
              <ListItemText primary="Đăng ký tài khoản" />
            </ListItem>
          </List></>
      )}

      <Divider />

      <List>
        {/* Đăng truyện */}
        <ListItem button="true">
          <ListItemIcon>
            <DrawOutlinedIcon /> {/* Icon Đăng truyện */}
          </ListItemIcon>
          <ListItemText primary="Đăng truyện" />
        </ListItem>
      </List>

      <Divider />

      <List>
        {/* Kho truyện */}
        <ListItem button="true" onClick={handleClickAllNovels} className='btn-cursor'>
          <ListItemIcon>
            <StorefrontOutlinedIcon /> {/* Icon Kho truyện */}
          </ListItemIcon>
          <ListItemText primary="Kho truyện" />
        </ListItem>

        {/* Sub-list */}
        <List component="div" disablePadding style={{ paddingLeft: "20px" }}>
          <ListItem button="true">
            <ListItemText primary="Truyện mới" />
          </ListItem>
          <ListItem button="true">
            <ListItemText primary="Truyện full" />
          </ListItem>
        </List>
      </List>

      <Divider />

      <List>
        {/* Xếp hạng */}
        <ListItem button="true">
          <ListItemIcon>
            <MilitaryTechOutlinedIcon /> {/* Icon Xếp hạng */}
          </ListItemIcon>
          <ListItemText primary="Xếp hạng" />
        </ListItem>

        {/* Sub-list */}
        <List component="div" disablePadding style={{ paddingLeft: "20px" }}>
          <ListItem button="true">
            <ListItemText primary="Xếp hạng lượt đọc" />
          </ListItem>
          <ListItem button="true">
            <ListItemText primary="Xếp hạng đề cử" />
          </ListItem>
          <ListItem button="true">
            <ListItemText primary="Xếp hạng tặng thưởng" />
          </ListItem>
          <ListItem button="true">
            <ListItemText primary="Xếp hạng bình luận" />
          </ListItem>
        </List>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        {DrawerList}
      </Drawer>
      <LoginPopup ref={loginPopupRef} />
    </div>
  );
})

export default AppBarDrawer;