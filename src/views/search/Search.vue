<template>
  <div class="search">
    <div class="form">
      <i class="el-icon-back" @click="goRouterBack"></i>
      <el-input placeholder="请输入内容" clearable v-model="keyword" @clear.native="clearInput" @focus="inputFocus"> </el-input>
      <p @click="submit">搜索</p>
    </div>

    <!-- 搜索结果 -->
    <scroll v-if="Object.keys(searchList).length !== 0" class="search-list">
      <li class="search-item b-b" v-for="(item, index) in searchList" :key="index" @click="goDetail(item.id)">
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

    <div v-if="historyShow">
      <history-search :obj="historySearch" @search="search">
        <i slot="delete" class="el-icon-delete" @click="clearStore"></i>
      </history-search>
      <history-search :obj="searchFind" />
    </div>

    <div v-show="sorry" class="sorry">很抱歉！无搜索结果</div>
  </div>
</template>

<script>
import { getSearchList } from 'network/search'
import HistorySearch from './childCpns/HistorySearch'
import Scroll from 'components/common/scroll/Scroll'
import { debounce, setStore, getStore } from 'common/util'
import { SEARCH_LIST, BASIC_IMG } from 'common/const'

export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
      searchList: [],
      basicURL: BASIC_IMG,
      historySearch: {
        searchTitle: '历史搜索',
        list: []
      },
      searchFind: {
        searchTitle: '搜索发现',
        list: ['蓝色告白', '麻辣烫', '华莱士', '海底捞', '冒菜', '星巴克', '汉堡', '炸鸡']
      },
      sorry: false,
      historyShow: true
    }
  },
  watch: {
    keyword(value) {
      if (value === '') {
        // 不会搜索了,但此时数组有值
        this.searchList = []
        this.sorry = false
        this.historyShow = true
      } else {
        this.historyShow = false
        this.debounce()
      }
    }
  },
  mounted() {
    // 初次进入null
    this.historySearch.list = getStore(SEARCH_LIST) || []
  },
  created() {
    this.debounce = debounce(this._getSearchList, 300)
  },
  methods: {
    // 1.点击搜索,问题会触发两次(失去焦点那次,和点击搜索那次)
    submit() {
      this.keyword = this.keyword.trim()
      if (this.keyword === '') return
      this.saveSearchList()
      // 前面已经搜索无结果,这里就不应该提交
      // 问题:这里只能清空keyword
      if (!this.sorry) {
        this._getSearchList()
      }
    },
    // 2.搜索请求函数
    async _getSearchList() {
      const res = await getSearchList(this.keyword)
      if (!res.code) {
        this.searchList = res.data
        this.sorry = false
      } else {
        this.searchList = []
        this.sorry = true
      }
    },
    // 3.点击input上的清空图标
    clearInput() {
      // this._getSearchList()
    },
    // 5.保存historyList数组
    saveSearchList() {
      if (this.keyword === '') return
      let arr = this.historySearch.list
      if (arr.indexOf(this.keyword) === -1) {
        arr.unshift(this.keyword)
      }
      setStore(SEARCH_LIST, arr)
    },
    // 6.回退按钮
    goRouterBack() {
      this.$router.back()
    },
    // 7.获取焦点时,历史搜索页面消失
    inputFocus() {
      this.historyShow = false
    },
    // 8.清空历史搜索记录
    clearStore() {
      let searchList = getStore(SEARCH_LIST) || []
      if (searchList.length) {
        this.$confirm('点击确定将清空历史记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        })
          .then(() => {
            setStore(SEARCH_LIST, [])
            this.historySearch.list = getStore(SEARCH_LIST)
          })
          .catch(() => {})
      }
    },
    // 9.根据搜索的结果,进入到详情页
    goDetail(id) {
      this.saveSearchList() //点击搜索出来的项时,要保存
      this.$router.push('/detail/' + id)
    },
    // 10.点击历史搜索
    search(val) {
      this.keyword = val
    }
    // 4.失去焦点或者按回车键(手机端没有什么意义,看是否与键盘搜索按钮有关)
    // 问题：应该有,但是失去焦点和提交会导致两次触发
    // @change="enter"
    // enter() {
    //   this.saveSearchList()
    //   this._getSearchList()
    // }
  },
  components: {
    HistorySearch,
    Scroll
  }
}
</script>

<style lang="scss" scoped>
.search {
  color: #333;
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
  .sorry {
    text-align: center;
    line-height: 30px;
  }
}
</style>
