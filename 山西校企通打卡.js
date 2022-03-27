function task() {
  let day = new Date().getDay()
  let text1 = 3
  let text2 = ''
  let text3 = ''
  switch (day) {
    case 0:
      text2 = '6'
      text3 = '0'
    case 1:
      text2 = '6'
      text3 = '1'
    case 2:
      text2 = '6'
      text3 = '2'
    case 3:
      text2 = '5'
      text3 = '3'
    case 4:
      text2 = '5'
      text3 = '4'
    case 5:
      text2 = '5'
      text3 = '5'
    default:
      text2 = '5'
      text3 = '6'
  }
  input([0], text1)
  input([1], text2)
  input([2], text3)
  sleep(5000)
  text('健康').findOne().click()
  if (text('提交').exists()) {
    text('提交').findOne().click()
    sleep(2000)
    text('确定').findOne().click()
  } else {
    back()
  }
}
function unClock() {
  if (device.sdkInt < 24) {
    let root = true
  } else {
    let root = false
  }

  if (!device.isScreenOn()) {
    device.wakeUp()
    sleep(500)

    swipe(500, 2000, 500, 1000, 210)
    // log(text('返回').findOne())
    // log(desc('返回').findOne())
    sleep(500)
    // let ttt = text('返回').findOne().bounds().click()
    // click(ttt.centerX(), ttt.centerY())
    // sleep(500)
    let password = '159753'
    数字锁屏
    for (let i = 0; i < password.length; i++) {
      sleep(500)
      desc(password[i]).findOne().click()
    }
    // setText(password)
    // desc('解锁').findOne().click()
    // id('com.android.systemui:id/lock_icon').findOne().click()
    // log('顶级的孩子', text('紧急呼叫').findOne().parent().parent().parent().child(0).childCount())
    // log('顶级的孩子', text('紧急呼叫').findOne().parent().parent().parent().child(2).contentDescription)
    // className("FrameLayout").parent().findOne().bounds().click(1070, 2300)
    // let local = desc(m).findOne().bounds()
    // click(local.centerX(), local.centerY()+50)

    sleep(500)
  }
}
auto()
// let ra = new RootAutomator()
unClock()

launchApp('山西校企通')
sleep(10000)
click(300, 300)
sleep(5000)

text('体温打卡(早卡)').findOne().click()
sleep(5000)
task()

// 提交按钮存在,true，重新提交直到不存在
while (text('提交').exists()) {
  sleep(2000)
  back()
  sleep(2000)
  text('体温打卡(早卡)').findOne().click()
  sleep(5000)
  task()
}
sleep(1000)
back()
sleep(1000)
back()
sleep(1000)
text('确定').findOne().click()
