/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import  Courses  from 'src/sections/overview/courses';

import AccountPopover from './common/account-popover';
import ShappingCart from './common/ShoppingCart-popover';

export default function Header({ onOpenNav }) {
  const lgUp = useResponsive('up', 'lg');
  const pages = ['موضوعات', 'دوره ها', 'درباره ما', 'مقالات', 'اخبار'];

  const [showCourses, setShowCourses] = useState(false);

  const handleShowCourses = () => {
    setShowCourses(true);
  };

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Box sx={{ flexGrow: 1 }} />

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%', justifyContent: 'center' }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'left' }}>
          {pages.map((page) => (
            <NavLink
              key={page}
              to={page === 'دوره ها' ? '/courses' : `/${page.toLowerCase()}`}
              
              activeClassName="active"
              style={{
                textDecoration: 'none',
                color: 'black',
                display: 'block',
                fontSize: '18px',
                margin: '0 25px',
                position: 'relative',
              }}
              onClick={page === 'دوره ها' ? handleShowCourses : undefined}
            >
              {page}
            </NavLink>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ShappingCart>
            <Iconify icon="mdi:cart" />
          </ShappingCart>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountPopover />
        </Box>
      </Stack>
    </>
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar
        position='static'
        style={{
          backgroundColor: 'rgb(0 147 255 / 10%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ height: 0, px: { lg: 5 } }}>{renderContent}</Toolbar>
      </AppBar>
      {showCourses && <Courses />}
    </Box>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
