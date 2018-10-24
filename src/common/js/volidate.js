/*常用验证函数文件*/

/*
 *isNull 判断一个值是否为空；
 *isTelephone 判断手机号码格式；
 *isRealName 判断姓名格式；
 *isAge 判断年龄格式；
 */

/*
* isNull 判断一个值是否为空；
* @param v 需要检验的值
* @return 布尔值
* */

const isNull = (v) => {
    return ( v == "" || v == undefined || v == null ) ? true : false;
}

export default {
    isNull
}