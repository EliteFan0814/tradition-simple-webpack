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
// 快捷title点击
function quickClick() {
  $('.q-title').on('click', function (e) {
    var quickindex = $(this).data('index')
    $(this).addClass('q-title-active')
    $('.quick-wrap').attr('class', 'quick-wrap quick' + quickindex)
    $('.q-title').each(function (index, e) {
      if (quickindex !== index) {
        $(e).removeClass('q-title-active')
      }
    })
  })
}
// 监听行业列表点击
function watchIndustryListClick() {
  $('.industry-list>li').on('click', function () {
    var industryIndex = $(this).data('index')
    if (industryIndex !== -1) {
      $('.industry-main').show()
      $('.industry-other').hide()
      $('.core-item').each(function (index) {
        if (industryIndex === index) {
          $(this).css('display', 'flex')
        } else {
          $(this).css('display', 'none')
        }
      })
      $('.relevance-item').each(function (index) {
        if (industryIndex === index) {
          $(this).css('display', 'flex')
        } else {
          $(this).css('display', 'none')
        }
      })
    } else {
      $('.industry-main').hide()
      $('.industry-other').show()
    }
    $('.industry-list>li').each(function () {
      if (industryIndex === $(this).data('index')) {
        $(this).attr('class', 'active-li')
      } else {
        $(this).attr('class', '')
      }
    })
  })
}
$(function () {
  watchCloseDialog()
  quickClick()
  watchIndustryListClick()
})
