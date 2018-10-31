<template>
    <div class="container">
        <h1>This is testComponent1</h1>
        <div>
            <p class="title">1. 使用rem布局</p>
            <div class="wrap">
                <div class="box"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped type="text/stylus">
    @import '~common/stylus/index.styl'

    .container
        h1
            color: $text-base-color;
            font-size: 50px; /*no*/

        p
            text-align: left;
            margin: 20px 16px; /*px自动转化成rem，如不使用rem，在样式后加 \/*no*\/ 即可*/
            font-size: 28px; /*no*/

        .wrap
            position: relative;
            width: 100%;
            height: 300px;
            background:$high-color;

        .box
            position: absolute;
            left: 50%;
            top: 50%;
            width: 200px;
            height: 200px;
            background: #FFFFFF;
            border-radius: 50%;
            margin-top: -100px;
            margin-left: -100px;
</style>
