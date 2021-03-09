import $ from 'jquery';

export function ajaxGet(url, dateType, params, asyncTemp) {
  var result = "";
  $.ajax({
    url: url,
    data: params,
    cache: false,
    async: asyncTemp,
    dateType: dateType,
    success: function(data) {
      result = data;
      return result;
    },
    error: function(err) {
      result = "网络异常，请稍后再试，如有问题，请联系管理员处理！";
    }
  });
  return result;
}


export function ajaxPost(url, dateType, params, asyncTemp) {
  var result = "";
  $.ajax({
    type: "POST",
    url: url,
    data: params,
    cache: false,
    async: asyncTemp,
    dateType: dateType,
    success: function(data) {
      result = data;
      return result;
    },
    error: function(err) {
      result = "网络异常，请稍后再试，如有问题，请联系管理员处理！";
    }
  });
  return result;
}
