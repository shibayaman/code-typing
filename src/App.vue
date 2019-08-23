<template>
  <div id="app">
    <div id="nav">
      <div id="homelink">
        <router-link to="/">&lt;<span class="decoration">Code</span>&gt;Typing</router-link>
      </div>
      <div id="links">
        <router-link to="/select">About</router-link>
        <router-link to="/select">Select</router-link>
        <router-link to="/login">{{ showUserName }}</router-link>
        <!-- <router-link v-if="loginState" to="/">logout</router-link> -->
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'app',
  created () {
    firebase.auth().onAuthStateChanged(user => {
      let payload = {}
      if (user) {
        Object.assign(payload, {
          currentUser: user.email,
          loginState: true
        })
      } else {
        Object.assign(payload, {
          currentUser: null,
          loginState: false
        })
      }
      this.changeLoginState(payload)
    })
  },
  methods: {
    ...mapActions(['changeLoginState'])
  },
  computed: {
    ...mapState(['loginState', 'currentUser']),
    showUserName: function () {
      if (this.currentUser) {
        return this.currentUser.substring(0, this.currentUser.indexOf('@'))
      } else {
        return 'login'
      }
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  /* background-color: gray; */
}

#links {
  display: inline-block;
  width: 45%;
  /* float: right; */
  position: relative;
  text-align: right;
  /* vertical-align: middle; */
}

#links a {
  /* display: inline-block; */
  font-weight: bold;
  color: #2c3e50;
  margin-right: 7%;
}

#links a.router-link-exact-active:not(#homelink) {
  color: #42b983;
}

#homelink {
  width: 50%;
  min-width: 200px;
  white-space: nowrap;
  display: inline-block;
  /* float:left; */
  font-size: 1.5em;
}

#homelink a {
  font-weight: bold;
  text-decoration: none;
  color: #7f838f;
}

#homelink a:hover {
  color: #2c3e50;
}

.decoration {
  font-size: inherit;
  color: #6293ee;
}
</style>
