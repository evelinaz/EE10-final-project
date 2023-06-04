<!-- 

// projects data
// tasks data
// same styling for each 

-->

<template>
    <ul>
        <li v-for="item in items">
            {{ item.header }}
        </li>

    </ul>
</template>

<script>

export default {
    name: 'BaseList',
    props: {

        items: Array
    }

}

</script>

<style >
ul {

    background-color: rgb(225, 219, 227);
}

li {

    padding: 12px;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid rgb(76, 70, 70);
    margin: 5px
}
</style>