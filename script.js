const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const name_input = document.getElementById('name');
const email_input = document.getElementById('email');
const passw1_input = document.getElementById('password1');
const passw2_input = document.getElementById('password2');


// toggle nav
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// hidde modal on outside 'click'
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);

//hide input placeholder (had to do one by one, other ways wont work for now)
name_input.addEventListener('focus', () => name_input.placeholder = '');
email_input.addEventListener('focus', () => email_input.placeholder = '');
passw1_input.addEventListener('focus', () => passw1_input.placeholder = '');
passw2_input.addEventListener('focus', () => passw2_input.placeholder = '');