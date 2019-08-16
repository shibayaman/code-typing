<template>
  <div class="select-menue">
    Select
    <input type="button" value="practice" @click="jumpToPractice()">
  </div>
</template>

<script>
export default {
  name: 'select-menue',
  methods: {
    jumpToPractice () {
      this.$router.push('/select/practice')
    }
  }
}
</script>
