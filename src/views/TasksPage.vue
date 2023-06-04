<template>
    <h1>Tasks</h1>
    <BaseList :items="tasksToDisplay" />
</template>
<script>
import db from '../utils/db.js'
import BaseList from '../components/BaseList.vue'
export default {
    name: 'TasksPage',
    data() {
        return {
            tasks: []
        }
    },
    created() {
        db.get('js4tasks').then(data => {
            this.tasks = data
        })
    },
    components: { BaseList },
    computed: {
        tasksToDisplay() {
            return this.tasks.map(task => {
                return {
                    id: task.id,
                    header: task.task
                }
            })
        }
    }
}

</script>

<style scoped></style>