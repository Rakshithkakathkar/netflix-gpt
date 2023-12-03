export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_URL = "https://image.tmdb.org/t/p/w500/";
export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "kn", name: "ಕನ್ನಡ" },
  { identifier: "hi", name: "हिंदी" },
];
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const DEMO_EMAIL = process.env.REACT_APP_DEMO_EMAILID
export const DEMO_PASSWORD = process.env.REACT_APP_DEMO_PASSWORD
