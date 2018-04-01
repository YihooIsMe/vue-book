<template>
    <div class="input-number">
        <input type="text" :value="currentValue" @change="handleChange">
        <button @click="handleDown" :disabled="currentValue<=min">-</button>
        <button @click="handleUp" :disabled="currentValue>=max">+</button>
    </div>
</template>

<script>
    export default {
        name: "a"
    }
</script>

<style scoped>

</style>