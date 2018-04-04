<template>
    <div class="tabs">
        <div class="tabs-bar">
            <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)"></div>
            <div class="tabs-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "a"
    }
</script>

<style scoped>

</style>