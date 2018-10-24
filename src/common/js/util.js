/*公用工具函数文件*/

/*
 *getUrlPramas 获取地址拦指定参数的值；
*/

/*getUrlPramas 获取地址拦指定参数的值；
* @param url url地址
* @param name 参数名称
* @return 参数值
* */
//
const getUrlPramas = (url, name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = url.match(reg);
    if (r != null) {
        return unescape(r[2]);
    } else {
        return null;
    }
}

export default {
    getUrlPramas
}