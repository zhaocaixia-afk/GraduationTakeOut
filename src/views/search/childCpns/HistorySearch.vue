<template>
  <div class="history-search">
    <p class="title">
      {{ obj.searchTitle }}
      <slot name="delete"></slot>
    </p>
    <div class="content">
      <span v-for="(item, index) in obj.list" :key="index">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistorySearch',
  props: {
    obj: Object
  }
}
</script>

<style scoped lang="scss">
.history-search {
  margin-top: 20px;
  padding: 0 20px;
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .content {
    span {
      background: #eee;
      padding: 5px 15px;
      border-radius: 5px;
      display: inline-block;
      margin-right: 10px;
      margin: 0 10px 10px 0;
    }
  }
}
</style>
