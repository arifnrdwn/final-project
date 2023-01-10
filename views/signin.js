const layout = require("./layout");

module.exports = () => {
  return layout({
    content: `
<style>
.bg {
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  width: 100%
}

.form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  height: 350px;
  width: 300px;
}

.url {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  color: blue;
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
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 40px 0px 0px 0px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {background-color: #3e8e41}
</style>

    <div class="bg">
    <div class="form">
    <h1>Sign in</h1>
    <div style="margin-top: 20px;">
        <form method="POST">
            <input name="username" placeholder="Username" class="input"/><br>
            <input name="password" placeholder="Password" type="password" class="input"/>
            <br>
            <button class="button">Sign In</button>
        </form>
        </div>
        <div class="url"><a href="/signup">Sign up for an account</a></div>
        </div>
    </div>
    `,
  });
};
