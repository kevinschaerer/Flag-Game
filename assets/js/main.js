let currentURL = window.location.pathname;

if (currentURL.includes('/game') || currentURL.includes('/game.html') || currentURL === '/' || currentURL === '/index.html' || currentURL === '') {

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
} else {

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}