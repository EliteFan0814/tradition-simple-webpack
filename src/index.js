import './library/reset.css'
import './css/index.scss'
import './index.html'

$(function () {
  watchCloseDialog()
  $('#verification-name').on('click', function (e) {
    e.preventDefault()
    console.log($('#search-select-value').val())
  })
  // 验证手机号
  function isPhone(phone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test(phone)) {
      return false
    } else {
      return true
    }
  }
  // 关闭弹框
  function watchCloseDialog() {
    $('.dialog-close').on('click', function () {
      $('input[name="free-charge-value"]').val('')
      $('input[name="free-charge-value-phone"]').val('')
      $('input[name="universal-value-phone"]').val('')
      $('input[name="oversea-value-phone"]').val('')
      $('.free-charge').hide()
      $('.universal-charge').hide()
      $('.oversea-charge').hide()
      $('.error').hide()
      $('.mask').hide()
    })
  }
})
