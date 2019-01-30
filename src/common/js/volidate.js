/*常用验证函数文件*/

/*
 *isNull 判断一个值是否为空；
 */

/*
 * isNull 判断一个值是否为空；
 * @param v 需要检验的值
 * @return 布尔值
 * */

const isNull = (v) => {
    return ( v == "" || v == undefined || v == null || v.length == 0) ? true : false;
}

export default {
    isNull
}