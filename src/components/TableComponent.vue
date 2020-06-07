<template>
  <v-card>
    <v-card-title>
      Table
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      :options="pagination"
      @click:row="updateActiveUser"
    ></v-data-table>
  </v-card>
</template>



<script>
  export default {
    props: ['users'],
    data () {
      return {
        search: '',
        headers: [
          { text: 'ID', value: 'idName' },
          { text: 'First Name', value: 'firstName' },
          { text: 'Last Name', value: 'lastName' },
          { text: 'Email', value: 'email' },
          { text: 'Phone', value: 'phone' },
        ],
        pagination: {
          page: 1,
          itemsPerPage: 5,
        },
      }
    },
    methods: {
      updateActiveUser(user) {
        this.$emit('update-active-user', user)
      }
    },
  }
</script>





