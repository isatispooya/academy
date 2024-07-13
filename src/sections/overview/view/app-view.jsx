/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import Typewriter from 'typewriter-effect';

import { Typography } from '@mui/material';

import Footer from '../app-footer'
import ContactUs from '../app-counactus';
import OnlineCourses from '../onlineCourses';
import ArticleList from '../app-articles-list';
import Header from '../../../layouts/dashboard/header';


export default function AppView() {


  return (
    <div className='space-y-16'>
      <Header />
      <section className='container '>
          <div className='flex flex-col justify-center items-center text-center  ' >
            <Typography variant="h2">آکادمی آموزش</Typography>
            <Typography variant="h4">بورس ایساتیس پویا</Typography>
            <Typography variant="body1" style={{ marginTop: '1rem' }}>
              با آکادمی خصوصی ایساتیس پویا، علم بورس را با خیال راحت یاد بگیرید و پیشرفت کنید
            </Typography>
            <div style={{ marginTop: '2rem' }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('ما به هر قیمتی دوره آموزشی تولید نمی‌کنیم!')
                    .start()
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('بورس ایساتیس پویا - آکادمی خصوصی بورس')
                    .start()
                    .pauseFor(2000);
                }}
                options={{
                  loop: true,
                }}
              />
            </div>
          </div>
      </section>

      {/* Grid of widgets */}
      <div className='container flex gap-10 justify-center px-4 mt-20 mb-20 '>
        <div className='bg-gradient-to-r from-fuchsia-400 to-fuchsia-700 rounded-lg px-24 py-12 text-white w-80 ' >پربازدیدترین دوره ها </div>
        <div className='bg-gradient-to-r from-purple-400 to-purple-700 rounded-lg px-24 py-12 text-white  w-80' >دوره بورس</div>
        <div className='bg-gradient-to-r from-pink-400 to-pink-700 rounded-lg px-24 py-12 text-white  w-80 '> دوره های بیمه</div>
      </div>
      <OnlineCourses />
      <OnlineCourses />
      <OnlineCourses  />
      <ArticleList  />
      <ContactUs />
      <Footer />
  
    </div>
  );
}
