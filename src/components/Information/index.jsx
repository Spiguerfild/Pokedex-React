import { Typography } from '@mui/material';
import React from 'react';



export const Information = (props) => {
  const { infoFst, infoSec } = props;
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '100%',
        borderBottom: '1px solid #b7b7b7f5',
        padding: '2px 10px',
      }}>
        <Typography mb={0} sx={{ fontSize: 16, fontWeight: '600' }} color="#000" gutterBottom>
          {infoFst}
        </Typography>
        <Typography mb={0} sx={{ fontSize: 15 }} color="#000" gutterBottom>
          {infoSec}
        </Typography>
      </div>
    </>
  );
}