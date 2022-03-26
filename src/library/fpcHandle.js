// 验证手机号
function isPhone(phone) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!myreg.test(phone)) {
    return false
  } else {
    return true
  }
}
// 监听弹框关闭
function watchCloseDialog() {
  $('.dialog-close').on('click', function () {
    // resetDialogAllInput()
    $('.fpc-mask').hide()
    $('.base-dialog').hide()
  })
}
function sss() {
  $('.sss').on('click', function () {
    $('.fpc-mask').show()
    $('.form-dialog').show()
  })
}
$(function () {
  watchCloseDialog()
  sss()
})
