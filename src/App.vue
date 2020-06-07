<template>
  <div id="app">
    <div v-if="!getInitialized" class="Loader"><h2>Loading...</h2></div>
    <div v-else class="mainContainer">
      <div class="mainPagination">
        <PaginationComponent v-bind:currentPage="getState.currentPage"
          v-bind:pageSize="getState.pageSize" v-bind:totalCount="getState.totalCount"
          @update-users="updateUsers"
        />
      </div>
      <TableComponent v-bind:users="getState.users" @update-active-user="updateActiveUser"/>
      <ActiveUser v-bind:activeUser="getState.activeUser" />
    </div>
  </div>
</template>



<script>
import TableComponent from '@/components/TableComponent'
import PaginationComponent from '@/components/PaginationComponent'
import ActiveUser from '@/components/ActiveUser'
import {mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      loading: true,
      filter: 'all',
    }
  },
  computed: {
    ...mapGetters(['getState', 'getInitialized']),
  },
  async mounted() { 
    this.fetchUsers(1, 50)
  },
  components: {
    TableComponent,
    PaginationComponent,
    ActiveUser,
  },
  methods: {
    updateUsers(num) {
      this.fetchUsers(num, 50)
    },
    updateActiveUser(user) {
      this.setActiveUser({user})
    },
    ...mapActions(['fetchUsers', 'setActiveUser']),
    ...mapMutations(['setActiveUser'])
  }
}
</script>



<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
}

.mainContainer {
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 0px;
}

.mainPagination {
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 50px;
}

.Loader {
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100vh;
}
</style>


