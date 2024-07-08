/* eslint-disable no-plusplus */
// ----------------------------------------------------------------------
const randomNumber = Math.floor(Math.random() * 25) + 1;
console.log(randomNumber);

const currentFileUrl = import.meta.url;
const currentDirUrl = currentFileUrl.substring(0, currentFileUrl.lastIndexOf('/'));

const avatarUrl = new URL(`/assets/images/avatars/avatar_${randomNumber}.jpg`, currentDirUrl).href;

export const account = {
  displayName: 'زهرا امینی',
  email: 'zahraamini.yaz20@gmail.com',
  photoURL: avatarUrl,
};
