<form method="POST" action="/dinosaurs/<%=dinoId%>/?_method=PUT">

    <label for="name"> Name </label>
    <input type="text" name="name" value="<%= dino.name %>"> </input>

    <label for="type">Type</label>
    <input type="text" name="type" value="<%= dino.type %>"> </input>
    <input type="submit" value="Update Dino!"> </input>
</form>