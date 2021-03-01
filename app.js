const section = document.querySelector('section');

// section.style.backgroundColor = 'green';

section.className = 'red-bg';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  // if (section.className === 'red-bg invisible') {
  //   section.className = 'red-bg visible';
  // } else {
  //   section.className = 'red-bg invisible';
  // }
  section.classList.toggle('invisible');
});
