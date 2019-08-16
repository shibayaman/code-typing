<template>
	<div class="typing-form">
		<div class="overlay" @click="regainFocus()"></div>
		<div :class="['code-container', incorrectAt !== null ? 'wait-for-backspace' : '']">
			<span :class="[index === charAt ? 'active' : '',
				index === incorrectAt ? 'incorrect' : '']"
				v-for="(letter, index) in code" v-bind:key="index">{{ letter }}</span>
		</div>
		<input class="hidden-input"
			@input="checkInput($event.data)"
			@keydown.enter="onSpecialChar(ENTER)"
			@keydown.delete="onSpecialChar(BACKSPACE)"
			ref="hiddenInput">
	</div>
</template>

<script>
export default {
	name: 'typing-form',
	data () {
		return {
			typedStr: '',
			code: 'this is a sample string that you can test type',
			charAt: 0,
			incorrectAt: null,
			BACKSPACE: 'BACKSPACE',
			ENTER: 'ENTER'
		}
	},
	mounted () {
		this.$refs.hiddenInput.focus()
	},
	methods: {
		checkInput (char) {
			if (char) {
				if (this.incorrectAt === null) {
					if (this.code[this.charAt] !== char) {
						this.incorrectAt = this.charAt
					}
				}
				this.charAt++
			}
		},
		onSpecialChar (key) {
			switch (key) {
				case this.ENTER: {
					this.checkInput('\n')
					break
				}
				case this.BACKSPACE: {
					if (this.charAt > 0) {
						this.charAt--
						if (this.charAt === this.incorrectAt) {
							this.incorrectAt = null
						}
					}
				}
			}
		},
		regainFocus () {
			this.$refs.hiddenInput.focus()
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
		color: white;
	}
	.wait-for-backspace .active {
		background-color: #dd705480;
		outline: none;
		color: white;
	}
	.incorrect {
		background-color: #e63d3d;
		color: white;
	}
	.hidden-input {
		position: absolute;
		opacity: 0;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vh;
		height: 100vh;
		opacity: 0;
		z-index: -1;
	}
</style>
