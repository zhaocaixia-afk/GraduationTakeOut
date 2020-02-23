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
    color: white;
    .left{
        width: 80px;
        font-size: 20px;
    }
    .right{
        width: 80px;
    }
    .center{
        flex: 1;
        font-size: 18px;
    }
}
</style>