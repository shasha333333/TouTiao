import {TitleBar} from "../../common/widgets/titlebar"
import {ToastUtils} from "./../../common/utils/ToastUtils"
import {RouterUtils} from "./../../common/utils/RouterUtils"

import {HttpManager} from "./../../common/network/HttpManager"

@Entry @Component struct Login {

  build() {
    Column() {
      TitleBar({titleBarAttribute: {
        backShow: true,
        backCallback: () => {
          RouterUtils.back();
        },
        bgColor: "#f5890e",
        title: "登录"
      }})

      Row() {
        Text("用户名：")
          .fontSize(20)
          .height("100%")
          .width(80)

        TextInput()
          .fontSize(20)
          .height(40)
          .width(180)
      }
      .align(Alignment.Center)
      .margin({top: 60})
      .height(50)

      Row() {
        Text("密    码：")
          .fontSize(20)
          .height("100%")
          .width(80)

        TextInput()
          .fontSize(20)
          .height(40)
          .width(180)
          .type(InputType.Password)
      }
      .align(Alignment.Center)
      .height(50)

      Button({type: ButtonType.Normal}) {
        Text('登录')
          .fontSize(20)
          .fontColor(Color.White)
          .padding({left: 110, top: 5, right: 110, bottom: 5})
      }
      .margin({top: 50})
      .borderRadius(8)
      .backgroundColor($r("app.color.main_theme"))
      .onClick(() => {
        // 点击登录
      })
    }
    .width("100%")
    .height('100%')
  }
}