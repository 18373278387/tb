const ctx = 'http://192.168.8.19:18082';
const mes = 'http://huizmes.topband.com.cn'
export default {
  ctx, //地址
  mes,
}
export function isNum(value) {
  var reg = /^\d+(\.\d+)?$/;
  return (reg.test(value))
}
export function isInt(value) {
	var reg = /^[1-9]\d*$/;
	return reg.test(value);
}
