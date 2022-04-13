var configFpcCountTime = 60 // 倒计时时间
var fpcIsCounting = false // 是否正在倒计时
var fpcCountTime = configFpcCountTime // 用来重置倒计时
var verifyTrademark = false // 是否验证商标名称
// 提交后是否显示成功
var isShowSuccess = true
// 验证手机号
function fpcIsPhone(inputClass) {
  var fpcPhone = $(inputClass).val()
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!myreg.test(fpcPhone)) {
    return false
  } else {
    return true
  }
}
// 倒计时
function countDown() {
  $('.code-btn')
    .text(fpcCountTime + 'S')
    .addClass('counting')
  fpcCountTime = fpcCountTime - 1
  if (fpcCountTime >= 0) {
    fpcIsCounting = true
    setTimeout(function () {
      if (fpcIsCounting) {
        countDown()
      }
    }, 1000)
  } else {
    fpcIsCounting = false
    fpcCountTime = configFpcCountTime
    $('.code-btn').text('获取验证码').removeClass('counting')
  }
}
// 是否同意协议
function watchDialogPrivacy() {
  $('.dialog-privacy').toggle(
    function () {
      $('.dialog-yes').show()
    },
    function () {
      $('.dialog-yes').hide()
    }
  )
  $('.index-privacy').toggle(
    function () {
      $('.index-yes').show()
    },
    function () {
      $('.index-yes').hide()
    }
  )
}
// 表单重置
function fpcResetForm() {
  $('.select-holder').text('请选择国际分类').removeClass('select-value')
  $('.index-trademark-value').val('')
  $('.dialog-trademark-value').val('')
  $('.dialog-phone-value').val('')
  $('.dialog-code-value').val('')
  $('.dialog-trademark-warn').hide()
  $('.dialog-phone-warn').hide()
  $('.dialog-code-warn').hide()
  $('.dialog-pop').hide()
  $('.dialog-yes').hide()
  // 重置倒计时
  fpcCountTime = configFpcCountTime
  fpcIsCounting = false
  $('.code-btn').text('获取验证码').removeClass('counting')
}
// 下拉框显示
function watchFpcSelect() {
  $('.fpc-i-select').on('click', function () {
    $('.fpc-option-mask').show()
    $('.option-list').show()
  })
}
// 下拉框点击
function watchFpcSelectClick() {
  //  点击下拉框
  $('.option-list>li').on('click', function () {
    $('.option-list>li').removeClass('li-active')
    $(this).addClass('li-active')
    $('.select-holder').text($(this).text()).addClass('select-value')
    $('.fpc-option-mask').hide()
    $('.option-list').hide()
  })
  // 下拉框以外点击，则关闭下拉框
  $('.fpc-option-mask').on('click', function () {
    $('.fpc-option-mask').hide()
    $('.option-list').hide()
  })
}
// 监听页面单选
function watchRadioClick() {
  $('.fpc-radio-item').on('click', function () {
    $('.fpc-dot').removeClass('dot-active')
    $(this).find('.fpc-dot').addClass('dot-active')
  })
}
// 监听弹框按钮的点击
function watchDialogBtnClick() {
  $('.dialog-btn').on('click', function () {
    // 获取 title
    var dialogTitle = $(this).data('title')
    // 获取 手机号提示框
    var dialogPhoneHolder = $(this).data('phone-holder')
    // // 获取 需显示列表
    var dialogShowList = $(this).data('show')
    // // 获取 提交按钮文字
    var dialogSubmit = $(this).data('submit')
    $('.dialog-trademark-value').val($('.index-trademark-value').val() || '')
    isShowSuccess = $(this).data('show-success') === false ? false : true
    $('.fpc-mask').show()
    $('.form-dialog').show()
    $('.dialog-title').text(dialogTitle)
    $('.dialog-phone-value').attr('placeholder', dialogPhoneHolder)
    $('.dialog-submit').text(dialogSubmit)
    // 是否跳过验证商标名称
    if (dialogShowList[2] === 1) {
      verifyTrademark = true
    } else {
      verifyTrademark = false
    }
    // 遍历展示需要显示的输入框
    for (var i = 0; i < dialogShowList.length; i++) {
      if (dialogShowList[i]) {
        $('.dialog-item').eq(i).show()
      } else {
        $('.dialog-item').eq(i).hide()
      }
    }
  })
}
// 监听弹框关闭
function watchCloseDialog() {
  $('.dialog-close').on('click', function () {
    fpcResetForm()
    $('.fpc-mask').hide()
    $('.base-dialog').hide()
  })
}
// 关闭所有dialog
function closeAllDialog() {
  fpcResetForm()
  $('.fpc-mask').hide()
  $('.base-dialog').hide()
  $('.success-dialog').hide()
}
// 提交成功
function showSuccess() {
  $('.fpc-mask').show()
  $('.form-dialog').hide()
  $('.success-dialog').show()
}
// 监听发送验证码
function watchSendCode() {
  $('.code-btn').on('click', function () {
    // 如果没有倒计时
    if (!fpcIsCounting) {
      countDown()
    }
  })
}
// 监听页面提交按钮
function watchDialogSubmit() {
  $('.dialog-submit').on('click', function () {
    if (verifyTrademark) {
      // 验证是否填写商标名称
      if (!$('.dialog-trademark-value').val()) {
        $('.dialog-trademark-warn').show()
        return false
      }
      // 通过验证
      $('.dialog-trademark-warn').hide()
    }
    // 验证手机号
    if (!fpcIsPhone('.dialog-phone-value')) {
      $('.dialog-phone-warn').show()
      return false
    }
    // 通过验证
    $('.dialog-phone-warn').hide()
    // 验证是否填写短信验证码
    if (!$('.dialog-code-value').val()) {
      $('.dialog-code-warn').show()
      return false
    }
    // 通过验证
    $('.dialog-code-warn').hide()
    // 验证是否勾选协议
    if ($('.dialog-yes').css('display') === 'none') {
      $('.dialog-pop').show()
      return false
    }
    // 通过验证
    $('.dialog-pop').hide()
    // 在下面进行提交操作 fpc todo
    // 提交成功
    if (isShowSuccess) {
      showSuccess()
    } else {
      // 不显示提交成功
      closeAllDialog()
    }
  })
}
// 初始化
function fpcInit() {
  watchSendCode()
  watchDialogPrivacy()
  watchDialogSubmit()
  watchCloseDialog()
  watchFpcSelect()
  watchFpcSelectClick()
  watchRadioClick()
  watchDialogBtnClick()
}
// 执行
$(function () {
  fpcInit()
})
