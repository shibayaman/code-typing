<template>
	<div class="login">
		<input v-model="email" placeholder="E-mail"><br>
		<input v-model="password" placeholder="Password"><br>
		<input type="button" @click="login()" value="Log in">
		<input type="button" v-if="loginState" @click="logout()" value="Log out">
	</div>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
export default {
	name: 'login',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	// created () {
	// 	console.log('created')
	// 	firebase.auth().onAuthStateChanged(user => {
	// 	if (user) {
	// 		console.log('signed in')
	// 	} else {
	// 		console.log('not signed in')
	// 	}
	// 	})
	// },
	mounted () {
	},
	computed: {
		...mapState(['loginState'])
	},
	methods: {
		login () {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
			.catch(e => {
				console.log(e.message)
			})
		},
		logout () {
			firebase.auth().signOut()
		}
	}
}
</script>
