<template>
	<div class="signin">
		<input v-model="email" placeholder="E-mail"><br>
		<input v-model="password" placeholder="Password"><br>
		<input type="button" @click="signin()" value="Sign in">
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'signin',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signin () {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			.catch(e => {
				console.log(e.message)
			})
		}
	}
}
</script>
