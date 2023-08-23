/*
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-22 15:43:43
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-23 17:28:06
 * @FilePath: \my-app\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from '../utils/request'

// 请求首页数据
export const getData = () => {
    // 返回一个promise对象
    return http.get('/home/getData')
}