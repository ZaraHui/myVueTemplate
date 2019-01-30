/*公用工具函数文件*/

/*
 *getUrlPramas 获取地址拦参数集；
 */

/*getUrlPramas 获取地址拦参数集；
 * @param url url地址 默认值 window.location.href
 * @return object 参数集对象
 * */
//
const getUrlPramas = (url) => {
    var url = url || window.location.href;
    var obj = {};
    var reg = /[?&][^?&]+=[^?&]+/g;
    var arr = url.match(reg);
    if (arr) {
        arr.forEach(function (item) {
            var tempArr = item.substring(1).split('=');
            var key = decodeURIComponent(tempArr[0]);
            var val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        })
    }
    return obj;
}

export default {
    getUrlPramas
}