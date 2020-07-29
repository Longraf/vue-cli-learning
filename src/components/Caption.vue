<template>
    <h1 >
        <p>{{caption}}</p>
    </h1>
</template>

<script>
    export default {
        name: 'Caption',
        props: {
            caption: String
        }
    }
</script>