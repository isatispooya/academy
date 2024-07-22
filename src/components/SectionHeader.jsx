import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Iconify from "./iconify";

export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className="flex items-center justify-center sm:justify-between flex-wrap flex-col mb-7 sm:mb-10 sm:flex-row gap-x-4 gap-y-7">
      <div className="space-y-2 sm:space-y-3 sm:self-start">
        <div className="flex items-center justify-center sm:justify-start gap-x-2.5">
          <span className="hidden sm:inline-block w-4 h-4 bg-pink-600 rounded-sm" />
          <h2 className="font-danaBold text-2xl sm:text-2.5xl">{title}</h2>
        </div>
        <p className="text-slate-500 font-danaMedium sm:text-lg text-center sm:text-right">{desc}</p>
      </div>
      {btnTitle && btnHref && (
        <div className="flex items-center gap-x-2 sm:px-4 sm:py-3.5 text-purple-700 sm:hover:bg-purple-300 sm:hover:text-white rounded-full transition-colors">
          <Link to={`/${btnHref}`} className="flex items-center gap-x-2">
            {btnTitle}
            <Iconify icon="mdi:arrow-left" width="1.2rem" height="1.2rem" />
          </Link>
        </div>
      )}
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  btnTitle: PropTypes.string,
  btnHref: PropTypes.string,
};

