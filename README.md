# blog
my blog
<fieldset id="LinkList">
    <input type="text" id="addLinks" name="addLinks" value="http://">
    <input type="button" id="linkadd" name="linkadd" value="add">
</fieldset>
<script>
	document.querySelector("#addLinks").addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    document.querySelector("#linkadd").click(); // Things you want to do.
    event.preventDefault(); // No need to `return false;`.
});
	</script>
