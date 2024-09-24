// contains all the global variables and DOM elements that are shared across other scripts.
const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const content = document.getElementById('content');
const themeToggle = document.getElementById('themeToggle');
const loadMoreButton = document.getElementById('load-more');
const liveUpdateContainer = document.getElementById('live-update');

let currentTheme = 'light';
let currentPage = 0;
let lastPostId = null;
let currentPageType = 'stories';
