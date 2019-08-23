<template>
  <div class="home">
    <h1>Typing Practice!</h1>
    <input class="login-btn" type="button" @click="jumpToLogin()" value="Log In"><br>
    <p>or<p>
    <p><router-link class="signin-a" to="/signin">Create an account</router-link>
    <div class="ad">
      <p>Practice typing the awkward characters in code!</p>
      <p>Upload any code to practice!</p>
      <p>Reduce mistypes and improve productivity!</p>
    </div><br><br>
    <input class="start-btn" type="button" @click="jumpToSelect()" value="Start Practicing Now!">
  </div>
</template>

<script>
  //  const data = {
  //   codeData: {
  //     userId: number,
  //     sourceName: string,
  //     lines: number,
  //     doneLines: number,
  //     sourceCode: {
  //       lang: string,
  //       sourceCode: string
  //     }
  //   }
  // }
import { mapState } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState(['loginState', 'currentUser'])
  },
  methods: {
    jumpToLogin () {
      if (this.loginState) {}
    },
    jumpToSelect () {

    }
  }
}
</script>
<style>
  .home {
    text-align: center;
  }
  .start-btn {
    display: inline-block;
    font-weight: bold;
    height: 3em;
    padding: 0px 3em;
    font-size: 17px;
    border-radius: 5px;
    border-color: #3bb837;
    color: white;
    background-color: #27c034;
    filter: drop-shadow(0 1px 2px #5f5f5f);
  }
  .start-btn:hover {
    background-color: #58d847;
  }
  input[type="button"]:focus {
    outline: 0;
  }
  .login-btn {
    display: inline-block;
    font-weight: bold;
    height: 2em;
    padding: 0px 2em;
    font-size: 15px;
    border-radius: 5px;
    border-color: #457ce0;
    color: white;
    background-color: #287bda;
    filter: drop-shadow(0 1px 2px #5f5f5f);
  }
  .login-btn:hover {
    background-color: #4390e9
  }
  .signin-a {
    color: #2937ff;
  }
  .ad {
    display: inline-block;
    margin: auto;
    line-height: 1em;
    text-align: left;
  }
  .ad p {
    padding: 2px 25px 5px 5px;
    border-bottom: 1px solid #c7c7c7;
  }
</style>
