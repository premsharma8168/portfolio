document.addEventListener('DOMContentLoaded',()=>{
  const items=document.querySelectorAll('.reveal');
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
  },{threshold:.12});
  items.forEach(item=>observer.observe(item));

  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      const target=document.querySelector(link.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
    })
  });
});
