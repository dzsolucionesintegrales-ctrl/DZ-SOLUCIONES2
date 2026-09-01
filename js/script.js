
const menu=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
if(menu&&nav){menu.onclick=()=>nav.classList.toggle('open');nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'))}
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
