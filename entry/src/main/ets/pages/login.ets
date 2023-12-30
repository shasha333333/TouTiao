


@Entry @Component struct Settings {

  @State user: User = User.get(); // 状态变更

  build() {
    Column() {
      TitleBar({titleBarAttribute: {
        backShow: true,
        backCallback: () => {
          RouterUtils.back();
        },
        bgColor: "#f5890e",
        title: ""
      }})
      Column({space: 10}) {
        Image($r("app.media.avatar"))
          .size({width: 70, height: 70})
        Text(this.user.logined() ? ("ID: " + this.user.getId()) : "游客")
          .fontSize(20)
          .fontColor("#ffffff")
      }
      .width("100%")
      .backgroundColor("#ffd9b4b4")

      Text()
        .width(1)
        .height(30)

      SettingItem({topLine: true, text: this.user.logined() ? "登出" : "登录", bottomLine: true, callback: () => {
        if(this.user.logined()) {

        } else {
          RouterUtils.open("pages/setting/login");
        }
        ToastUtils.show("login")
      }})
    }
    .width("100%")
    .height('100%')
  }

  aboutToAppear() {
    // 订阅消息
    Emitter.on({
      eventId: Constant.USER_LOGIN
    }, (data) => {
      this.user = User.get();
    });
  }

  aboutToDisappear() {
    // 取消订阅
    Emitter.off(Constant.USER_LOGIN);
  }
}