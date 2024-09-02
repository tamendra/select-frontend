import { Menu, MenuItem, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

interface NavMenuProps {
  anchorElNav: null | HTMLElement;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  pages: string[];
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
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </>
);

export default NavMenu;
