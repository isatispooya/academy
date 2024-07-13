/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable react/button-has-type */
import React, { useState } from "react";

import Iconify from "src/components/iconify";

const Blog = () => {
  const [articles,setarticles]=useState([])

    const data = [
        {
            title: "جاوا چیست ؟",
            description: "برنامه نویسان به آدم‌هایی با مصرف بالای قهوه مشهور هستند...",
            date: "1403/04/11",
            author: "محمد رحمانیان",
            Picture: "/assets/images/covers/cover_17.jpg",
            route: "java-introduction",
        },
        {
            title: "هوش مصنوعی چیست",
            description: "هوش مصنوعی چیست ؟ یکی از پرتکرارترین سوالاتی است...",
            date: "1403/04/14",
            author: "محمد رحمانیان",
            Picture: "../../../public/assets/images/covers/cover_14.jpg",
            route: "what-is-ai",
        },
        {
            title: "روز برنامه نویس کیه؟",
            description: "روز برنامه نویس ۱۴۰۳، به پاسداشت کارهااین افراد...",
            date: "1403/04/16",
            author: "محمد رحمانیان",
            Picture: "../../../public/assets/images/covers/cover_17.jpg",
            route: "programmer-day-1403",
        },
     
    ];

   

    return (
        <div className="container relative">
            <div className="flex items-center justify-center sm:justify-between flex-wrap flex-col mb-7 sm:mb-10 sm:flex-row gap-x-4 gap-y-7">
                <div className="space-y-2 sm:space-y-3 sm:self-start">
                    <div className="flex items-center justify-center sm:justify-start gap-x-2.5">
                        <span className="hidden sm:inline-block w-4 h-4 bg-pink-600 rounded-sm" />
                        <h2 className="font-danaBold text-2xl sm:text-2.5xl">وبلاگ آموزشی آکادمی</h2>
                    </div>
                    <p className="text-slate-500 font-danaMedium sm:text-lg text-center sm:text-right">مقالات بروزبورسی</p>
                </div>
                <a href="#" className="flex items-center gap-x-2 sm:px-4 sm:py-3.5 text-purple-700 sm:hover:bg-purple-300 sm:hover:text-white rounded-full transition-colors">
                    <span className="font-danaMedium">مشاهده همه مقالات</span>
                    <Iconify icon="mdi:arrow-left" width="1.2rem" height="1.2rem" />
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((item,index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                        <div className="relative h-[182px] overflow-hidden">
                            <img src={item.Picture} className="block w-full h-full object-cover" alt={item.title} loading="lazy" />
                        </div>
                        <div className="flex-grow px-5 py-3">
                            <h3 className="font-danaDemiBold line-clamp-2 mb-3">
                                <div>{item.title}</div>
                            </h3>
                            <p className="text-sm line-clamp-4 text-gray-900/70 dark:text-white/70">{item.description}</p>
                        </div>
                        <div className="px-5 pb-5">
                            <div className="flex justify-between items-center text-slate-500 dark:text-white/70 text-sm pb-4 border-b border-b-neutral-200/70 dark:border-b-white/10">
                                <div className="flex items-center gap-x-0.5">
                                    <Iconify className="mb-1" icon="material-symbols:person-outline" width="1.2rem" height="1.2rem"></Iconify>
                                    <div >{item.author}</div>
                                </div>
                                <div className="flex items-center gap-x-0.5">
                                    <Iconify className="mb-1" icon="material-symbols:calendar-today-outline-rounded" width="1.2rem" height="1.2rem"></Iconify>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <div className="hover:text-purple-800 font-danaMedium transition-colors">
                                    مطالعه مقاله
                                    <svg className="w-5 h-5">
                                        <use href="#arrow-left-circle-mini" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;





