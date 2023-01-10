const layout = require("./layout");

module.exports = () => {
  return layout({
    content: `
<style>
.button {
  background-color: #f44336;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {background-color: #e06666}
</style>

    <div>
    <h1>You are already signed in</h1>

            <button class="button"><a href="/logout" style="color: white">Sign out</a></button>
            <button class="button"><a href="/home" style="color: white">Back to home</a></button>    
      
    </div>
    `,
  });
};
