import loginData from 'mock/login';
import registerData from 'mock/register';

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
