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
  width: 450px;
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
    <h1>Sign up for your account</h1>
        <form method="POST">
            <input name="username"  placeholder="username" class="input"/>
            <input name="password" placeholder="password" type="password" class="input"/>
            <button class="button">Sign Up</button>
        </form>
        <div class="url"><a href='/'>Already have an account? Sign in</a></div>
    </div>
    </div>
    `,
  });
};
