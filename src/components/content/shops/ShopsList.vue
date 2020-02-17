<template>
    <div class="shops-list" v-if="Object.keys(shopsList).length !== 0">
        <shops-list-item v-for="(shop,index) in shopsList" :key="index" :shop="shop"/>
    </div>
</template>

<script>
import ShopsListItem from './ShopsListItem'
    export default {
        name: 'ShopsList',
        props: {
            shopsList: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        components: {
            ShopsListItem
        }
    }
</script>

<style lang="scss" scoped>

</style>