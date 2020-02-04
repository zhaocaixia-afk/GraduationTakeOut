<template>
    <div>
        <nav-bar bgColor="red">
            <div slot="left">
                <i class="el-icon-search"></i>
            </div>
            <div slot="center">深圳市</div>
            <div slot="right">
                登录|注册
            </div>
        </nav-bar>
        Msite
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'Msite',
        components: {
            NavBar
        }
    }
</script>

<style lang="scss" scoped>

</style>