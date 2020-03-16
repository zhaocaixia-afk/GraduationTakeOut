<template>
  <div class="search">
    <div class="form">
      <i class="el-icon-back" @click="$router.back()"></i>
      <el-input placeholder="请输入内容" clearable v-model="keyword" autofocus @clear.native="clearInput" @change="enter"> </el-input>
      <p @click="submit">搜索</p>
    </div>

    <!-- 搜索结果 -->
    <scroll v-if="searchList.length" class="search-list">
      <li class="search-item b-b" v-for="(item, index) in searchList" :key="index">
        <img :src="`${basicURL}${item.image_path}`" alt="" class="avatar" />
        <div class="text">
          <p class="name">
            <span>{{ item.name }}</span>
            <span class="active up" v-if="item.activities.length">满减</span>
            <span class="delivery up" v-if="item.delivery_mode.text">蜂鸟</span>
          </p>
          <p class="detail">
            <span>评价{{ item.rating }}</span
            >| <span>月售{{ item.rating_count }}单</span>|
            <span>{{ item.distance }}km</span>
          </p>
        </div>
      </li>
    </scroll>

    <div v-else>
      <history-search :obj="historySearch">
        <i slot="delete" class="el-icon-delete"></i>
      </history-search>
      <history-search :obj="searchFind" />
    </div>
  </div>
</template>

<script>
import { getSearchList } from 'network/search'
import HistorySearch from './childCpns/HistorySearch'
import Scroll from 'components/common/scroll/Scroll'
import { debounce } from 'common/util'

export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
      searchList: [],
      basicURL: 'https://fuss10.elemecdn.com',
      historySearch: {
        searchTitle: '历史搜索',
        list: ['蓝色告白', '麻辣烫', '华莱士', '海底捞', '冒菜', '星巴克', '汉堡', '炸鸡']
      },
      searchFind: {
        searchTitle: '搜索发现',
        list: ['蓝色告白', '麻辣烫', '华莱士', '海底捞', '冒菜', '星巴克', '汉堡', '炸鸡']
      }
    }
  },
  watch: {
    keyword() {
      this.debounce()
    }
  },
  created() {
    this.debounce = debounce(this._getSearchList, 300)
  },
  methods: {
    // 1.点击搜索
    submit() {
      this.keyword = this.keyword.trim()
      if (this.keyword) {
        this._getSearchList(this.keyword)
      }
    },
    // 2.搜索请求函数
    async _getSearchList() {
      const res = await getSearchList(this.keyword)
      if (!res.code) {
        this.searchList = res.data
        console.log(this.searchList)
      }
    },
    // 3.点击input上的清空图标
    clearInput() {
      this._getSearchList()
    },
    // 4.失去焦点或者按回车键(手机端没有什么意义,看是否与键盘搜索有关)
    enter() {
      this._getSearchList()
    }
  },
  components: {
    HistorySearch,
    Scroll
  }
}
</script>

<style lang="scss" scoped>
.search {
  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    i {
      font-size: 26px;
    }
    .el-input {
      margin: 0 10px;
    }
    p {
      white-space: nowrap;
    }
  }
  .search-list {
    padding: 0 10px;
    height: calc(100% - 40px);
    .search-item {
      display: flex;
      align-items: center;
      padding: 10px 0;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .text {
        .name {
          margin-bottom: 5px;
          padding-left: 5px;
          display: flex;
          align-items: center;
          white-space: nowrap;
          .up {
            font-size: 12px;
            padding: 2px 5px;
            border-radius: 5px;
            color: $white;
          }
          .active {
            margin: 0 5px;
            background: red;
          }
          .delivery {
            background: blue;
          }
        }
        .detail {
          font-size: 10px;
          color: $text-color;
          span {
            padding: 0 5px;
          }
        }
      }
    }
  }
}
</style>
