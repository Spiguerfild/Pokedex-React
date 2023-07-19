import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import imgPokeball from '../../assets/pokebola.png'
import { Typography } from '@mui/material';
import './style.css'



export const TopBar = () => {
  return (

    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={12} sx={{ backgroundColor: '#343a43', padding: '10px' }}>
          <Toolbar>
            <img src={imgPokeball} width={60} style={{ margin: '0 15px 0 0 ' }} />
            <Typography fontFamily={'Pokemon Solid '} sx={{ paddingBottom: '15px' }} variant='h4'>
              Pokedex
            </Typography>

          </Toolbar>
        </AppBar>
      </Box >
    </>
  );
}