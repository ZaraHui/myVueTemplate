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

<style lang="stylus" scoped type="text/stylus">
    // ！！！！使用stylus，需要修改style标签的type属性为"text/stylus"（如上），即
    // <style lang="stylus" scoped type="text/stylus>">
    // 以设计稿750px为例，如设计稿中某元素高度为100px
    // 如需转化为rem，则设置为100px；
    // 如不需转化为rem，则设置为50PX，或者50Px，或者50px/*no*/
    // 字号和边框不建议使用rem单位

    @import '~common/stylus/index.styl';
    .container
        h1
            color $text-high-color
            font-size 50PX
</style>
