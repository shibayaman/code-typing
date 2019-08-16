<template>
	<div class="typing-form">
		<div class="code-container">
			<span :class="[index === charAt ? 'active' : '']" v-for="(letter, index) in code" v-bind:key="index">{{ letter }}</span>
		</div>
		<input v-model="typedStr" @input="checkInput($event)">
		{{ typedStr }}
	</div>
</template>

<script>
const BACKSPACE = 'BACKSPACE'
const ENTER = 'ENTER'
export default {
	name: 'typing-form',
	data () {
		return {
			typedStr: '',
			code: 'this is a sample string that you can test type',
			charAt: 0
		}
	},
	methods: {
		checkInput (e) {
			if (this.code[this.charAt] === e.data) {
				this.charAt++
			}
		}
	}
}
</script>
<style>
	.code-container {
		white-space: pre;
	}
	span {
		font-family: 'Ubuntu Mono', monospace;
		display: inline-block;
		font-size: 14px;
		padding: .1em 0;
		line-height: 1.2em;
	}
	.active {
		background-color: #47d42b;
		outline: 1px solid #40be27;
		color: #ffffff;
	}
</style>
