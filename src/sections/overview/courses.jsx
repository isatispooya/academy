import React from 'react';

import { Grid } from '@mui/material';

import OnlineCourses from './onlineCourses';

const Courses = () => {
  console.log('hi');
  return (
    <Grid mt={25}  sx={{ padding: '20px', backgroundColor: '#f5f5f5',borderRadius:'40px' }}>
      <h1 style={{textAlign:'center',fontSize:'30px',fontWeight:'700',color:'#616161',marginBottom:'10px'}}>دوره ها</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid style={{ width: '90%' }}>
          <OnlineCourses />
        </Grid>
      </div>
    </Grid>
  );
};

export default Courses;
