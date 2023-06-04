<template>
    <h1>Projects Page</h1>

    <BaseList :items="projectsToDisplay" />
</template>

<script>

import db from '../utils/db.js'
import BaseList from '../components/BaseList.vue'

export default {

    name: 'ProjectsPage',
    data() {
        return {
            projects: []
        }

    },

    created() {

        db.get("js4projects").then(data => { this.projects = data })
    },
    components: {

        BaseList
    },

    computed: {

        projectsToDisplay() {
            return this.projects.map(project => {
                return {
                    id: project.id,
                    header: project.project
                }
            }
            )
        }
    }

}
</script>

<style scoped></style>