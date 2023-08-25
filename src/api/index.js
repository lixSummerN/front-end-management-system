/*
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-22 15:43:43
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-24 16:28:13
 * @FilePath: \my-app\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from '../utils/request'

// 请求首页数据
export const getData = () => {
    // 返回一个promise对象
    return http.get('/home/getData')
}

// 获取用户列表
export const getUser = (params) => {
    return http.get('/user/getUser', params)
}

// 新增用户
export const addUser = (data) => {
    return http.post('/user/add', data)
}

// 编辑用户
export const editUser = (data) => {
    return http.post('/user/edit', data)
}

// 删除用户
export const delUser = (data) => {
    return http.post('/user/del', data)
}

export const getMenu = (data) => {
    return http.post('/permission/getMenu', data)
}