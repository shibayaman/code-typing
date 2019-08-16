<template>
  <div class="select">
    Select
    <input type="button" value="practice" @click="jumpToPractice()">
  </div>
</template>

<script>
export default {
  name: 'select',
  methods: {
    jumpToPractice () {
      this.$router.push('/select/practice')
    }
  }
}
</script>
