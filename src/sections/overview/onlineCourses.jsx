/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Box,
  Card,
  Grid,
  Rating,
  Divider,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
} from '@mui/material';

export default function OnlineCourses() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 4,
    speed: 500,
  };
  return (
    <Grid sx={{ padding: '20px', backgroundColor: '#fafafa', borderRadius: '20px' }}>
      <Box>
        <Slider {...settings}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/covers/13399747_Presentation_1.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                    آموزش پکیج بورس
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                    در این دوره قصد داریم در مورد مفهوم سرمایه گذاری، انواع روش سرمایه گذاری و
                    همچنین صندوق‌های کارگزاری مفید صحبت کنیم.
                  </Typography>
                  <div style={{ display: 'flex', marginTop: '20px' }}>
                    <Typography
                      sx={{ flex: 1, textAlign: 'right' }}
                      variant="body1"
                      component="div"
                    >
                      <Rating name="size-small" defaultValue={2} size="small" readOnly />
                    </Typography>

                    <Typography
                      sx={{ flex: 1, textAlign: 'left' }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      محمد زمانی
                    </Typography>
                  </div>
                  <Divider sx={{ my: 2 }} />
                  <Typography textAlign="center">5,000,000</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/covers/13399747_Presentation_1.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                    آموزش پکیج بورس
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                    در این دوره قصد داریم در مورد مفهوم سرمایه گذاری، انواع روش سرمایه گذاری و
                    همچنین صندوق‌های کارگزاری مفید صحبت کنیم.
                  </Typography>
                  <div style={{ display: 'flex', marginTop: '20px' }}>
                    <Typography
                      sx={{ flex: 1, textAlign: 'right' }}
                      variant="body1"
                      component="div"
                    >
                      <Rating name="size-small" defaultValue={2} size="small" readOnly />
                    </Typography>

                    <Typography
                      sx={{ flex: 1, textAlign: 'left' }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      محمد زمانی
                    </Typography>
                  </div>
                  <Divider sx={{ my: 2 }} />
                  <Typography textAlign="center">5,000,000</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/covers/13399747_Presentation_1.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                    آموزش پکیج بورس
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                    در این دوره قصد داریم در مورد مفهوم سرمایه گذاری، انواع روش سرمایه گذاری و
                    همچنین صندوق‌های کارگزاری مفید صحبت کنیم.
                  </Typography>
                  <div style={{ display: 'flex', marginTop: '20px' }}>
                    <Typography
                      sx={{ flex: 1, textAlign: 'right' }}
                      variant="body1"
                      component="div"
                    >
                      <Rating name="size-small" defaultValue={2} size="small" readOnly />
                    </Typography>

                    <Typography
                      sx={{ flex: 1, textAlign: 'left' }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      محمد زمانی
                    </Typography>
                  </div>
                  <Divider sx={{ my: 2 }} />
                  <Typography textAlign="center">5,000,000</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/covers/13399747_Presentation_1.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                    آموزش پکیج بورس
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                    در این دوره قصد داریم در مورد مفهوم سرمایه گذاری، انواع روش سرمایه گذاری و
                    همچنین صندوق‌های کارگزاری مفید صحبت کنیم.
                  </Typography>
                  <div style={{ display: 'flex', marginTop: '20px' }}>
                    <Typography
                      sx={{ flex: 1, textAlign: 'right' }}
                      variant="body1"
                      component="div"
                    >
                      <Rating name="size-small" defaultValue={2} size="small" readOnly />
                    </Typography>

                    <Typography
                      sx={{ flex: 1, textAlign: 'left' }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      محمد زمانی
                    </Typography>
                  </div>
                  <Divider sx={{ my: 2 }} />
                  <Typography textAlign="center">5,000,000</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/covers/13399747_Presentation_1.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                    آموزش پکیج بورس
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                    در این دوره قصد داریم در مورد مفهوم سرمایه گذاری، انواع روش سرمایه گذاری و
                    همچنین صندوق‌های کارگزاری مفید صحبت کنیم.
                  </Typography>
                  <div style={{ display: 'flex', marginTop: '20px' }}>
                    <Typography
                      sx={{ flex: 1, textAlign: 'right' }}
                      variant="body1"
                      component="div"
                    >
                      <Rating name="size-small" defaultValue={2} size="small" readOnly />
                    </Typography>

                    <Typography
                      sx={{ flex: 1, textAlign: 'left' }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      محمد زمانی
                    </Typography>
                  </div>
                  <Divider sx={{ my: 2 }} />
                  <Typography textAlign="center">5,000,000</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/covers/13399747_Presentation_1.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                    آموزش پکیج بورس
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                    در این دوره قصد داریم در مورد مفهوم سرمایه گذاری، انواع روش سرمایه گذاری و
                    همچنین صندوق‌های کارگزاری مفید صحبت کنیم.
                  </Typography>
                  <div style={{ display: 'flex', marginTop: '20px' }}>
                    <Typography
                      sx={{ flex: 1, textAlign: 'right' }}
                      variant="body1"
                      component="div"
                    >
                      <Rating name="size-small" defaultValue={2} size="small" readOnly />
                    </Typography>

                    <Typography
                      sx={{ flex: 1, textAlign: 'left' }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      محمد زمانی
                    </Typography>
                  </div>
                  <Divider sx={{ my: 2 }} />
                  <Typography textAlign="center">5,000,000</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Slider>
      </Box>
    </Grid>
  );
}
