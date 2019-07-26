import history from 'Routes/history';
import { setLS } from 'utils';
import { USER_TOKEN } from 'constant';
import loginData from 'mock/login';
import registerData from 'mock/register';
import userlist from 'mock/userlist';

/**
 * 用户登录
 * @param {string} email 邮箱
 * @param {string} password 密码
 */
export const login = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(loginData);
    }, 700);
  });
}

/**
 * 退出登录
 */
export const logout = () => {
  setLS(USER_TOKEN, '');
  history.push('/login');
}

/**
 * 用户注册
 * @param {string} username 用户名
 * @param {string} email 邮箱
 * @param {string} password 密码
 */
export const register = (username, email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(registerData);
    }, 700);
  });
}

/**
 * 用户列表
 * @param {number} page 页码
 * @param {number} pageSize 每页数量
 * @param {string} order 升序/降序 asc/desc
 * @param {string} orderBy 排序字段
 * @param {string} search 搜索用户名
 */
export const userList = (page, pageSize, order, orderBy, search) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(userlist(page, pageSize, order, orderBy, search).result);
    }, 700);
  });
}
