<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TabBar'
    }
</script>

<style lang="scss" scoped>
.tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(247,247,247);
    border-top: 1px solid rgb(235,235,235);
}
</style>