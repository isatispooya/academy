import React from "react";


export default function Footer() {
    return (
        <footer className="mt-25 rounded-md px-40 mx-0 p-0 sm:mt-40 bg-purple-400 dark:bg-darker border-t border-t-neutral-100 dark:border-none pt-8">
            <div className="container">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                    <div className="flex flex-col gap-y-3 flex-grow">
                        <div className="font-danaBold text-lg">درباره ما</div>
                        <p className="sm:max-w-xs text-gray-900/70 dark:text-white/70">آکادمی ایساتیس پویا یک اکادمی خصوصی آموزش بورسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند</p>
                    </div>
                    <div className="flex flex-col gap-y-5 flex-grow">
                        <div className="font-danaBold text-lg">دسترسی سریع</div>
                        <div className="flex flex-col items-start gap-y-4 text-gray-900/70 dark:text-white/70">
                            <a href="https://ipmill.isatispooya.com//">قوانین و مقررات</a>
                            <a href="https://ipmill.isatispooya.com//">همه دوره ها</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 flex-grow">
                        <div className="font-danaBold text-lg">لینک های مفید</div>
                        <div className="flex flex-col items-start gap-y-2 text-gray-900/70 ">
                            <a href="https://ipmill.isatispooya.com/">آموزش </a>
                            <a href="https://ipmill.isatispooya.com/">صنایع مفتول</a>
                            <a href="https://ipmill.isatispooya.com/">بیمه گذار</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 flex-grow">
                        <div className="font-danaBold text-lg">شبکه های اجتماعی</div>
                        <div className="flex flex-col items-start gap-y-4 text-gray-900/70 ">
                            <div className="flex items-center gap-x-2.5">
                                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-orange-600 text-white bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC]">
                                    <img src="/assets/images/icons8-instagram-96.png" alt="Telegram" className="w-5 h-5" />
                                </div>
                                <a href="https://www.instagram.com/ipmil.ir" className="text-ltr text-hover font-danaDemiBold">@ipmil.ir</a>
                            </div>
                            <div className="flex items-center gap-x-2.5">
                                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 text-white bg-gradient-to-b from-blue-400 to-blue-600">
                                    <img src="/assets/images/icons8-telegram-96.png" alt="Instagram" className="w-5 h-5" />
                                </div>
                                <a href="https://t.me/ipmil.ir" className="text-ltr text-hover font-danaDemiBold">@ipimil</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center xs:justify-between flex-wrap gap-x-3 gap-y-2 py-7 text-base text-gray-900 dark:text-white border-t border-t-neutral-200 dark:border-t-white/10 mt-7">
                    <p>کلیه حقوق مادی و معنوی سایت برای آکادمی محفوظ است.</p>
                </div>
            </div>
        </footer>
    );
}
