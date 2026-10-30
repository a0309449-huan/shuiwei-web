const viewer=document.getElementById('image-dialog');
document.querySelectorAll('.zoom-image').forEach(link=>link.addEventListener('click',e=>{
 if(!viewer.showModal)return;e.preventDefault();const img=link.querySelector('img');
 document.getElementById('large-image').src=link.href;document.getElementById('large-image').alt=img.alt;
 document.getElementById('image-caption').textContent=img.alt;document.getElementById('original-image').href=link.href;viewer.showModal();
}));document.getElementById('close-image').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close();}});
