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
    }
    // 高亮点击的当前元素
    $('.industry-list>li').each(function () {
      if (industryIndex === $(this).data('index')) {
        $(this).attr('class', 'active-li')
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
function serveClick() {
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
$(function () {
  newSwiperProfessor()
  newSwiperProblem()
  newSwiperLogo()
  watchCloseDialog()
  quickClick()
  watchIndustryListClick()
  serveClick()
})
