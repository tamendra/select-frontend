import { Menu, MenuItem, Tooltip, IconButton, Avatar, Typography } from '@mui/material';
import React from 'react';

interface UserMenuProps {
  anchorElUser: null | HTMLElement;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  settings: string[];
}

const UserMenu: React.FC<UserMenuProps> = ({ anchorElUser, handleOpenUserMenu, handleCloseUserMenu, settings }) => (
  <>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="User" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </>
);

export default UserMenu;
