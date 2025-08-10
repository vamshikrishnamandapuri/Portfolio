// small utilities: add 'inview' fade-up when element enters viewport
document.addEventListener('DOMContentLoaded', function(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('inview');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
});
