<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'This is home page'
            }
        }
    }
</script>

<style lang="scss" scoped type="text/css">
    @import '../common/style/color.scss';

    h1 {
        color: $text-high-color;
    }
</style>
