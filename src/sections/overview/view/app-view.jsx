import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import MaterialSlider from '../slider';
import AppWidgetSummary from '../app-widget-summary';

export default function AppView() {
  const backgroundStyle = {
    backgroundImage: 'url("/assets/images/covers/4027794.jpg")',
    backgroundSize: 'contain',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    minHeight: '90vh',
    width: '100%',
  };

  const iconStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginLeft: '0',
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* Background image */}
      <div
        style={{
          ...backgroundStyle,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'right',
        }}
      >
        <div style={{ textAlign: 'right', marginTop: '15rem', marginRight: '200px' }}>
          <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
            <Typography variant="h2">آکادمی آموزش</Typography>
            <Typography variant="h4">بورس ایساتیس پویا</Typography>
          </div>
          <Typography variant="body1" style={{ textAlign: 'right' }}>
            با آکادمی خصوصی ایساتیس پویا، علم بورس را با خیال راحت یاد بگیرید و پیشرفت کنید
          </Typography>
        </div>
      </div>

      {/* Slider */}
      <MaterialSlider />

      {/* Grid of widgets */}
      <Grid
        container
        spacing={3}
        style={{
          justifyContent: 'center',
          marginTop: '2rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="پربازدیدترین دوره ها"
            color="success"
            icon={
              <img
                alt="icon"
                src="/assets/icons/glass/ic_glass_users.png"
                style={iconStyle}
                className="icon-small-left"
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="آخرین دوره ها"
            color="info"
            icon={
              <img
                alt="icon"
                src="/assets/icons/glass/ic_glass_message.png"
                style={iconStyle}
                className="icon-small-left"
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary

            title="دوره های درحال برگذاری"
            color="warning"
            icon={
              <img
                alt="icon"
                src="/assets/icons/glass/ic_glass_bag.png"
                style={iconStyle}
                className="icon-small-left"
              />
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}
