const layout = require("./layout");
const moment = require("moment");

module.exports = ({ note, user }) => {
  return layout({
    content: `
<style>
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
  padding: 10px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {background-color: #6fa8dc}
</style>

    <div>
       <h1>
      Note
       </h1>
      <div style="margin-bottom:10px; padding:10px; border-radius:10px;box-shadow: 4px 3px 14px -5px rgba(16,16,16,0.6); ">
       <div><b> <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/null/external-Paper-Clip-office-those-icons-lineal-those-icons-3.png"/> ${
         note.title
       }</b></div>
        <small>${moment(note.createdAt).format("DD MMM YYYY HH:mm")}</small>
        <p>${note.body}</p>
        </div>
        ${
          note.type == "Public" && note.userId == user.id
            ? ` <form method="POST">
     
            <label for="dt">Share to :</label>
           
            <input class="input "id="dt" name="sharedUser" placeholder="username" >
             
            <button class="button"><a href='/home'  style="text-decoration:none; color: white">Back</a></button>
            <button class="button">Share</button>
            </form>`
            : ""
        }
       </div>
       </div>
    </div>
    `,
  });
};
