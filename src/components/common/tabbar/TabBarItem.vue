<template>
    <div class="tab_bar_item" @click="itemClick" :style="activeStyle">
        <div class="item-icon">
            <slot name="item-icon"></slot>
        </div>
        <div class="item-text">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabBarItem',
        data(){
            return {}
        },
        props: {
            path: String,
            actioveColor: {
                type: String,
                default: 'rgb(1,168,243)'
            }
        },
        computed: {
            // 1.找出路由
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            // 2.激活样式
            activeStyle(){
                return this.isActive ? { color: this.actioveColor } : {}
            }
        },
        methods: {
            itemClick(){
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style lang="scss" scoped>
.tab_bar_item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 49px;
    .item-icon{
        font-size: 26px;
    }
}
</style>