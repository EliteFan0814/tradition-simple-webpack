var inputPhoneValue = '' // 页面输入框电话
var selectIndustryValue = '' // 页面行业类型
var dialogSelectIndustryValue = '' // 弹框行业领域
var dialogInputIndustryValue = '' // 弹框所属行业
var dialogPhoneValue = '' // 弹框电话
var dialogShowList = [0, 0, 0] // 弹框中需要展示的输入框 0:不显示 1:显示 共有三个 行业领域 所属行业 联系方式

$(function () {
  initWatch()

  // 页面监听函数
  function initWatch() {
    // 监听页面输入框
    watchAssessSearch()
    // 监听页面按钮
    watchIndexBtn()
    // 监听弹框发送
    watchDialogSubmit()
    // 监听页面十大领域单击事件
    watchTenSingleClick()
    // 监听关闭弹框
    watchCloseDialog()
    // 监听发送成功
    watchSuccessDialog()
  }
  // 监听获取评估结果按钮的点击
  function watchAssessSearch() {
    $('#assess-search').on('click', function (e) {
      e.preventDefault()
      selectIndustryValue = $('#search-select-value').val()
      inputPhoneValue = $('input[name="input-access-value"]').val()
      if (isPhone(inputPhoneValue)) {
        $('.mask-success').show()
        $('.search-error').hide()
      } else {
        $('.search-error').show()
      }
    })
  }
  // 验证手机号
  function isPhone(phone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test(phone)) {
      return false
    } else {
      return true
    }
  }
  // 重置页面输入框
  function resetIndexAllInput() {
    $('#search-select-value').val('')
    $('input[name="input-access-value"]').val('')
  }
  // 重置弹框内的输入框
  function resetDialogAllInput() {
    $('#dialog-select-industry-value').val('')
    $('input[name="dialog-input-value"]').val('')
    $('input[name="dialog-phone-value"]').val('')
    $('.dialog-error').hide()
  }
  // 监听弹框关闭
  function watchCloseDialog() {
    $('.dialog-close').on('click', function () {
      resetDialogAllInput()
      $('.mask-program').hide()
    })
  }
  //监听成功窗口关闭
  function watchSuccessDialog() {
    $('.success-close').on('click', function () {
      resetIndexAllInput()
      resetDialogAllInput()
      $('.mask-success').hide()
    })
  }
  // 监听页面模块下方按钮的点击
  function watchIndexBtn() {
    $('.index-btn').each(function (index) {
      $(this).on('click', function () {
        var title = $(this).attr('data-title')
        var btnText = $(this).attr('data-btn')
        dialogShowList = JSON.parse($(this).attr('data-show'))
        for (var i = 0; i < dialogShowList.length; i++) {
          if (dialogShowList[i]) {
            $('#dialog-form').children().eq(i).show()
          } else {
            $('#dialog-form').children().eq(i).hide()
          }
        }
        $('.base-dialog .title .slogan').text(title)
        $('.base-dialog .btn-wrap .submit-btn').text(btnText)
        $('.mask-program').show()
      })
    })
  }
  // 弹框内点击发送按钮
  function watchDialogSubmit() {
    $('#dialog-submit-btn').on('click', function () {
      dialogSelectIndustryValue = $('.dialog-select-industry-value').val() || ''
      dialogInputIndustryValue = $('input[name="dialog-input-value"]').val() || ''
      dialogPhoneValue = $('input[name="dialog-phone-value"]').val()
      if (isPhone(dialogPhoneValue)) {
        $('.mask-program').hide()
        $('.dialog-error').hide()
        $('.mask-success').show()
      } else {
        $('.dialog-error').show()
      }
    })
  }
  // 监听十大重点领域单个点击
  function watchTenSingleClick() {
    var tenDialogTitle = '获取认定方案'
    var tenDialogShowList = [1, 0, 1]
    $('.point-title').each(function () {
      $(this).on('click', function () {
        var tenDialogSelectValue = $(this).text()
        for (var i = 0; i < tenDialogShowList.length; i++) {
          if (tenDialogShowList[i]) {
            $('#dialog-form').children().eq(i).show()
          } else {
            $('#dialog-form').children().eq(i).hide()
          }
        }
        $('#dialog-select-industry-value').val(tenDialogSelectValue)
        $('.base-dialog .title .slogan').text(tenDialogTitle)
        $('.base-dialog .btn-wrap .submit-btn').text(tenDialogTitle)
        $('.mask-program').show()
      })
    })
  }
})
