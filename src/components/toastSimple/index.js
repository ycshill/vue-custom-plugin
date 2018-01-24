/**
 * 说 明： toast 的js文件
 * 文件名：index.js
 * 作 者： 石丽丽
 */
import ToastComponent from './Toast';

//  声明
export default {
  install(Vue, options) {
    // 1.生成一个vue的子类，同时这个子类就是组件
    const ToastConstructor = Vue.extend(ToastComponent);
    // 2.生成该子类的一个实例
    const ToastInstance = new ToastConstructor();
    // 3.将实例挂载
    ToastInstance.$mount(document.createElement('div'));
    document.body.appendChild(ToastInstance.$el);

    // 4.通过Vue的原型注册一个方法，让所有的实例共享这个方法
    Vue.prototype.$toast = (args) => {
      ToastInstance.message = args.message;
      ToastInstance.isShow = true;

      setTimeout(() => {
        ToastInstance.isShow = false;
      }, args.duration);
    };
  },
};
