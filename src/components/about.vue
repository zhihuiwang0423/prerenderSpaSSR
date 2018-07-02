<template>
  <div>
    <h1>about with us</h1>
  </div>
</template>
<script>
  export default {
    name: 'async',
    metaInfo () {
      return {
        title: this.pageName
      }
    },
    data () {
      return {
        pageName: 'loading'
      }
    },
    mounted () {
      setTimeout(() => {
        this.pageName = 'about'
      }, 2000)
    }
  }
</script>

