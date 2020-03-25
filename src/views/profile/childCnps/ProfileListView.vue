<template>
  <div class="profile-list-view">
    <div class="list-item b-b" v-for="(item, index) in list" :key="index">
      <icon-svg :icon-class="item.icon" class="item-svg"></icon-svg>
      <span class="text">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileListView',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.profile-list-view {
  border-top: 10px solid $b-g;
  .list-item {
    height: 50px;
    background: $white;
    margin-left: 16px;
    display: flex;
    align-items: center;
    .item-svg {
      font-size: 25px;
    }
    .text {
      font-size: 16px;
      margin-left: 8px;
    }
  }
  .list-item:last-child {
    border-bottom: none;
  }
}
</style>
