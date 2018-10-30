<template>
    <div class="container">
        <h1>
            This is testComponent2
        </h1>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped type="text/css">
    @import '~common/stylus/index.styl';

    .container
        h1
            color: $text-high-color;
            font-size: 50px; /*no*/
</style>
