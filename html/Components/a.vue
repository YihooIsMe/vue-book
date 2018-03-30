<template>
    <ul>
        <slot name="book" v-for="book in books" :book-name="book.name"></slot>
    </ul>
</template>

<script>
    export default {
        name: "a"
    }
</script>

<style scoped>

</style>