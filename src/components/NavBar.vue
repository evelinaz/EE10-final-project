<template>
    <nav>
        <ul>
            <li v-for="item in links">
                <router-link :to="item.path">{{ item.label }}</router-link>
            </li>

        </ul>
    </nav>
</template>

<script>

export default {

    name: 'NavBar',
    data() {
        return {

            links: [

                { label: 'Home', path: '/' },
                { label: 'Projects', path: '/projects' },
                { label: 'Tasks', path: '/tasks' },
                { label: 'Persons', path: '/persons' }
            ]
        }
    }

}
</script>

<style scoped> li {
     list-style: none;
     font-weight: 100;
     text-decoration: none;


 }

 ul {

     flex-direction: row;
     display: flex;
     justify-content: space-around;
     background-color: rgb(154, 206, 206);
     font-size: x-large;
     font-family: Roboto_Light;
     padding: 10px;


 }

 li a {
     color: inherit;
     text-decoration: none;
     cursor: pointer;
 }

 li a:hover {

     background-color: rgb(55, 193, 205);
     color: rgb(15, 40, 53);
     padding: 5px;
 }
</style>