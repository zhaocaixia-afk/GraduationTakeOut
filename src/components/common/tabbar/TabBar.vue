<template>
    <div class="tab_bar">
        <slot></slot>
    </div>
</template>

<script>
// import TabBarItem from './TabBarItem'
    export default {
        name: 'TabBar',
        components: {
            // TabBarItem
        }
    }
</script>

<style lang="scss" scoped>
.tab_bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(247,247,247);
    border-top: 1px solid rgb(235,235,235);
}
</style>