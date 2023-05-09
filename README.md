# blog
my blog
<fieldset id="LinkList">
    <input type="text" id="addLinks" name="addLinks" value="http://">
    <input type="button" id="linkadd" name="linkadd" value="add">
</fieldset>
<script>
	$(document).ready(function(){
    $('#TextBoxId').keypress(function(e){
      if(e.keyCode==13)
      $('#linkadd').click();
    });
});
	</script>
