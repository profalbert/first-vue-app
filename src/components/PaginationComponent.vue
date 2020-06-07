<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="Math.ceil(totalCount / pageSize)"
      :total-visible="7"
      @input="getCurrentPage"
    ></v-pagination>
  </div>
</template>



<script>
  export default {
    props: ['currentPage', 'pageSize', 'totalCount'],
    data () {
      return {
        page: this.currentPage
      }
    },
    methods: {
      getCurrentPage(num) {
        this.$emit('update-users', num)
      }
    },
  }
</script>



<style scoped>
.v-pagination__item--active {
  color: green;
}
</style>

