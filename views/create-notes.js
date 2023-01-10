const layout = require("./layout");

module.exports = () => {
  return layout({
    content: `
<style>
.form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  height: 100%;
  width: 100%;
  margin-top: 10px;
}

.input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button {
  background-color: #3d85c6;
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {background-color: #6fa8dc}
</style>

    <div class="form">
       <h1>
      Create a New Note
       </h1>
       <form style="margin-top:20px" method="POST">
       <label for="title">Title</label>
       <br>
          <input class="input" name="title"  id="title" style="width: 100%; margin-bottom: 10px"/>
          <br>
          <label for="body">Body</label>
          <br>
            <textarea class="input" name="body" id="body" style="width: 100%; min-height:300px" ></textarea>
            <br>
            <div style="display:flex; flex-direction: row; justify-content: space-between; align-items:center; margin-top:20px">
            <div>
            <label for="dt">Note Type :</label>
            <select class="input" id="dt" name="type">
              <option value="Private">Private</option>
              <option value="Public">Public</option>
            <select>
            </div>
            </div>
            </form>
            <button class="button"><a href='/home'  style="text-decoration:none; color: white">Back</a></button>
            <button class="button">Save</button>
       </div>
       </div>
    </div>
    `,
  });
};
