<template>
    <div class="nav-bar" :style="{background:bgColor}">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            bgColor: {
                type: String,
                default: 'blue'
            }
        }
    }
</script>

<style lang="scss" scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    .left{
        width: 60px;
        font-size: 24px;
    }
    .right{
        width: 80px;
    }
    .center{
        flex: 1;
    }
}
</style>