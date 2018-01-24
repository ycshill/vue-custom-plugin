/**
 * 说 明： toast 的js文件
 * 文件名：index.js
 * 作 者： 石丽丽
 */
import ToastComponent from './Toast';

const Toast = {};

// 避免重复 install ，设立flag；
Toast.installed = false;

Toast.install = (Vue, options) => {
  if (Toast.installed) {
    return;
  }
  // 设置默认的参数
  let globalOpt = {
    message: '加载中...',
    position: 'middle',
    duration: 2000,
    icon: '',
  };

  globalOpt = Object.assign({}, globalOpt, options);

  // 1.生成一个vue的子类，同时这个子类就是组件
  const ToastConstructor = Vue.extend(ToastComponent);
  // 2.生成该子类的一个实例
  const ToastInstance = new ToastConstructor();
  // 3.将实例挂载
  ToastInstance.$mount(document.createElement('div'));
  document.body.appendChild(ToastInstance.$el);

  // 4.通过Vue的原型注册一个方法，让所有的实例共享这个方法
  Vue.prototype.$toast = (opt) => {

    opt = Object.assign({}, globalOpt, opt);

    for (const key in opt) {
      if (Object.prototype.hasOwnProperty.call(opt, key)) {
        ToastInstance[key] = opt[key];
      }
    }

    ToastInstance.isShow = true;

    setTimeout(() => {
      ToastInstance.isShow = false;
    }, ToastInstance.duration);
  };

  Toast.installed = true;
};

// Vue 作为全局变量，自动 install
if (window.Vue) {
  window.Vue.use(Toast);
}

export default Toast;

