/* 备注 dialog 展示列表 data-show="[1,0,0,0,0,1]"
0 商标名称
1 商标名称2
2 所属行业
3 商标描述
4 问题描述
5 手机号码
*/
// 是否reset 行业
var resetindustry = false
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
// 提交成功
function showSuccess() {
  $('.fpc-mask').show()
  $('.form-dialog').hide()
  $('.success-dialog').show()
}
// dialog 表单重置
function fpcResetForm() {
  $('.option-list').hide()
  $('.fpc-d-item0').val('')
  $('.fpc-d-item1').text('')
  // if (resetindustry) $('.fpc-d-item2').text('请选择所属行业')
  $('.fpc-d-item3').val('')
  $('.fpc-d-item4').val('')
  $('.fpc-d-item5').val('')
  $('.index-phone').val('')
}
// 下拉框显示
function watchFpcSelect() {
  $('.fpc-i-select').on('click', function () {
    $('.option-list').show()
  })
}
// 下拉框点击
function watchFpcSelectClick() {
  $('.option-list>li').on('click', function () {
    $('.option-list>li').removeClass('li-active')
    $(this).addClass('li-active')
    $('.fpc-d-item2').text($(this).text())
    $('.option-list').hide()
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
// 快捷title点击
function watchQuickClick() {
  $('.q-title').on('click', function (e) {
    var quickindex = $(this).data('index')
    $(this).addClass('q-title-active')
    $('.quick-wrap').attr('class', 'quick-wrap quick' + quickindex)
    $('.q-title').each(function (index, e) {
      if (quickindex !== index) {
        $(e).removeClass('q-title-active')
      }
    })
    $('.jq-quick-c').each(function () {
      var quickContentIndex = $(this).data('index')
      if (quickindex === quickContentIndex) {
        $(this).addClass('jq-quick-c-active')
      } else {
        $(this).removeClass('jq-quick-c-active')
      }
    })
  })
}
// 监听行业列表点击
function watchIndustryListClick() {
  $('.industry-list>li').on('click', function () {
    var industryIndex = $(this).data('index')
    // 如果点击的不是其它
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
      // 如果点击的是其它
      $('.industry-main').hide()
      $('.industry-other').show()
      $('.fpc-d-item2').val($(this).text())
      // fpcIndustry = $(this).text()
    }
    // 高亮点击的当前元素
    $('.industry-list>li').each(function () {
      if (industryIndex === $(this).data('index')) {
        var indexSelectedIndustry = $(this).text()
        $(this).attr('class', 'active-li')
        // 将选择的值同步到弹出的dialog框的下拉框中
        $('.fpc-d-item2').text($(this).text())
        $('.option-list>li').removeClass('li-active')
        $('.option-list>li').each(function () {
          if ($(this).text() == indexSelectedIndustry) {
            $(this).addClass('li-active')
          }
        })
      } else {
        $(this).attr('class', '')
      }
    })
  })
}
// 专业团队轮播图
function newSwiperProfessor() {
  var swiperProfessor = new Swiper('.swiper-professor', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    speed: 300,
    autoplay: {
      delay: 3000
    },
    // 如果需要分页器
    pagination: {
      el: '.professor-pagination',
      bulletClass: 'professor-unactive', // 非高亮class类
      bulletActiveClass: 'professor-active' // 高亮class类
    }
  })
}
// 常见问题轮播图
function newSwiperProblem() {
  var swiperProblem = new Swiper('.swiper-problem', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    speed: 300,
    autoplay: {
      delay: 3000
    },
    // 如果需要分页器
    pagination: {
      el: '.problem-pagination',
      bulletClass: 'problem-unactive', // 非高亮class类
      bulletActiveClass: 'problem-active' // 高亮class类
    }
  })
}
// 推荐服务 商标交易轮播
function newSwiperLogo() {
  var swiperLogo = new Swiper('.swiper-logo', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.logo-pagination',
      bulletClass: 'logo-unactive', // 非高亮class类
      bulletActiveClass: 'logo-active' // 高亮class类
    }
  })
}
// 推荐服务title点击
function watchServeClick() {
  $('.s-tab-item').on('click', function (e) {
    var serveIndex = $(this).data('index')
    $(this).addClass('s-tab-active')
    // $('.quick-wrap').attr('class', 'quick-wrap quick' + serveIndex)
    $('.s-tab-item').each(function (index, e) {
      if (serveIndex !== index) {
        $(e).removeClass('s-tab-active')
      }
    })
    $('.jq-serve-c').each(function () {
      var serveContentIndex = $(this).data('index')
      if (serveIndex === serveContentIndex) {
        $(this).addClass('serve-c-active')
      } else {
        $(this).removeClass('serve-c-active')
      }
    })
  })
}
// 监听弹框按钮的点击
function watchDialogBtnClick() {
  $('.dialog-btn').on('click', function () {
    // 获取 title
    var dialogTitle = $(this).data('title')
    // 获取 需显示列表
    var dialogShowList = $(this).data('show')
    // 获取 提交按钮文字
    var dialogSubmit = $(this).data('submit')
    var indexSearchVal = $('.index-search-value').val() || ''
    if ($(this).data('trans')) {
      $('.fpc-d-item0').val(indexSearchVal)
    }
    isShowSuccess = $(this).data('show-success') === false ? false : true
    console.log(isShowSuccess)
    // 传递logo名字给dialog
    $('.fpc-d-item1').text($(this).data('logoname') || '')
    $('.fpc-mask').show()
    $('.form-dialog').show()
    $('.dialog-title').text(dialogTitle)
    $('.dialog-submit').text(dialogSubmit)
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
// 监听页面上的提交
function watchIndexSubmit() {
  $('.index-submit').on('click', function () {
    // 验证手机号
    if (!fpcIsPhone('.index-phone')) {
      $('.index-phone-warn').show()
      return false
    }
    // 通过验证
    $('.index-phone-warn').hide()
    // 验证是否勾选协议
    if ($('.index-yes').css('display') === 'none') {
      $('.index-pop').show()
      return false
    }
    // 通过验证
    $('.index-pop').hide()
    // 在下面进行提交操作 fpc todo
    // 显示提交成功
    showSuccess()
  })
}
// 监听dialog内提交按钮
function watchDialogSubmit() {
  $('.dialog-submit').on('click', function () {
    // 验证手机号
    if (!fpcIsPhone('.dialog-phone')) {
      $('.dialog-phone-warn').show()
      return false
    }
    // 通过验证
    $('.dialog-phone-warn').hide()
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
    }
  })
}
// 是否同意协议
function dialogPrivacy() {
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
function watchScroll() {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height()) {
      $('.scroll-top').fadeIn(800)
    } else {
      $('.scroll-top').fadeOut(800)
    }
  })
}
function watchBackTop() {
  $('.scroll-top').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: 0
      },
      500
    )
  })
}
// 初始化
function pageInit() {
  newSwiperProfessor()
  newSwiperProblem()
  newSwiperLogo()
  watchCloseDialog()
  watchQuickClick()
  watchIndustryListClick()
  watchServeClick()
  watchDialogBtnClick()
  dialogPrivacy()
  watchDialogSubmit()
  watchIndexSubmit()
  watchFpcSelect()
  watchFpcSelectClick()
  watchScroll()
  watchBackTop()
}
$(function () {
  pageInit()
})
