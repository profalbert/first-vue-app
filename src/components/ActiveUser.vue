<template>
  <div>
    <div class="activeUser">
      <div v-if="Object.keys(activeUser).length === 0">Выберите пользователя!</div>
      <div v-else>
        <div>Выбран пользователь <b>{{`${activeUser.firstName} ${activeUser.lastName}`}}</b></div>
        <div>
          <div>Описание:</div>
          <textarea class="mainTextarea" v-bind:value="activeUser.description">       
          </textarea>
        </div>
        <div>Адрес проживания: <b>{{activeUser.adress && activeUser.adress.streetAddress}}</b></div>
        <div>Город: <b>{{activeUser.adress && activeUser.adress.city}}</b></div>
        <div>Провинция/штат: <b>{{activeUser.adress && activeUser.adress.state}}</b></div>
        <div>Индекс: <b>{{activeUser.adress && activeUser.adress.zip}}</b></div>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    props: ['activeUser'],
    data () {
      return {
        
      }
    },
  }
</script>



<style scoped>
.activeUser {
  display: grid;
  justify-content: center;
  margin: 50px 0px;
}

.activeUser textarea{
  width: 300px;
  height: 100px;
  font-family: 'Roboto';
}

.mainTextarea {
  border: 1px solid black;
  border-radius: 5px;
  font-size: 12px;
  padding: 5px;
}
</style>


