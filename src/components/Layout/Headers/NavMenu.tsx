import { Menu, MenuItem, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { INavMenu } from './contants';

interface NavMenuProps {
  anchorElNav: null | HTMLElement;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  pages: INavMenu[];
}

const NavMenu: React.FC<NavMenuProps> = ({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu, pages }) => (
  <>
    <IconButton
      size="large"
      aria-label="menu"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
    >
      {pages.map((page) => (
        <MenuItem key={page.title} onClick={handleCloseNavMenu}>
          <Typography
            component={RouterLink}
            to={page.navpath}
            sx={{ textAlign: 'center' }}>
            {page.title}
          </Typography>

        </MenuItem>
      ))}
    </Menu>
  </>
);

export default NavMenu;
