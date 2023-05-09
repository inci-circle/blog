# blog
my blog
<div contenteditable=true>
  <a id=lnk style=-moz-appearance:textfield href=http://www.google.com>http://www.google.com</a>
</div>
<script>
  var lnk=document.getElementById('lnk');
lnk.addEventListener('click',()=>{
	window.location.href = lnk.getAttribute('href');
});
</script>
