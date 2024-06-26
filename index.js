// #page-header.blog-header
// onclick="window.location.href='sproduct.html'"

// hamburger icon --------------------------------------------
const bar = document.getElementById('bar')
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
   bar.addEventListener('click', () => {
      nav.classList.add('active');
   })
}
if (close) {
   close.addEventListener('click', () => {
      nav.classList.remove('active');
   })
}
// sproduct show ----------------------------------------------
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smalling[0].onclick = () => {
   MainImg.src = smalling[0].src;
}
smalling[1].onclick = () => {
   MainImg.src = smalling[1].src;
}
smalling[2].onclick = () => {
   MainImg.src = smalling[2].src;
}
smalling[3].onclick = () => {
   MainImg.src = smalling[3].src;
}