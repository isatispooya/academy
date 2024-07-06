import React, { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';



// ----------------------------------------------------------------------

export default function LoginView() {
  const [phone, setPhone] = useState('');

  const [isPhoneSubmitted, setIsPhoneSubmitted] = useState(false);
  const [otp, setOtp] = useState('');

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    setIsPhoneSubmitted(true);
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
    
          
        
        <TextField
          name="phone"
          label="شماره موبایل"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          disabled={isPhoneSubmitted}
        />
    
        {!isPhoneSubmitted && (
          <>
            <Skeleton variant="rounded" width={340} height={60} sx={{ marginBottom: 30 }} />
            <TextField
              name="capchi"
              label="کد تصویر"
              type="text"
            />
          </>
        )}
      </Stack>
      {isPhoneSubmitted && (
        <TextField
          display="flex"
          gap={3}
          sx={{ width: 340, height: 60, mt: 4 }}
          value={otp}
          onChange={handleOtpChange}
          placeholder='کد تائید'
        />
      )}
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        sx={{ mt: 4 }}
      >
        تائید
      </LoadingButton>
    </>
  )
return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
      <Card
        sx={{
          p: 5,
          width: 1,
          maxWidth: 420,
        }}
      >
        <Typography variant="h4">ورود</Typography>
        <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
          اطلاعات خود را وارد کنید
        </Typography>
        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            OR
          </Typography>
        </Divider>

        <form onSubmit={handleSubmit}>
          {renderForm}
        </form>
      </Card>
    </Stack>
  );
}