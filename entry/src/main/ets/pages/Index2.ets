import http from '@ohos.net.http';
import RequestMethod from '@ohos.net.http';
import ResponseCode from '@ohos.net.http';
@Entry
@Component
struct EnterMenu{
  private controller0: TabsController = new TabsController(); // 首页一行用
  private controller1: TabsController = new TabsController(); // 关注一行用
  private videoController: VideoController = new VideoController(); //视频播放控制

  @State index0: number = 0; // 选项卡下标，默认为第一个，首页一行用
  @State index1: number = 0; // 选项卡下标，默认为第一个，关注一行用

  @State message: string = ''
  @State html: string = "";
  @State title: string[] = [];

  @State refreshing: boolean = false;

  @Builder TabBar0(img0:any, img1:any, str:string, index:number){
    Column() {
      Button({type:ButtonType.Normal}){
        Column(){
          Image(this.index0 == index ? img1 : img0)
            .width('50%')

          Text(str)
            .fontSize(12)
            .fontColor(this.index0 == index ? '#ff5756' : "#ff000000")
        }
      }

      .height('100%')
      .backgroundColor(Color.White)
    }
    .height('100%')
    .width("100%")
  }

  @Builder TabBar1(str:string,index:number) {
    Column() {
      Button({type:ButtonType.Normal}){
        Column() {
          Text(str)
            .fontWeight(this.index1 == index?FontWeight.Bolder:FontWeight.Regular)
            .fontColor("#ffffffff")
            .height('40%')

          Text('——')
            .fontSize(10)
            .fontWeight(FontWeight.Bolder)
            .fontColor(this.index1 == index ? "#ffffffff" : '#ff5756')

        }
      }
      .fontSize(14)
      .height('100%')
      .backgroundColor('#ff5756')
    }
    .height('100%')
    .width("15%")
  }

  aboutToAppear() {
    this.httpRequest();
  }

  build(){
    Column(){
      Tabs({ barPosition: BarPosition.End, controller: this.controller0 }) {
        TabContent() {
          Column()
          {
            Row(){
              Column(){
              }
              .width('3%')

              Column(){
                TextInput({placeholder:'华安黄金吧 | 申请强制启动'})
                  .height(40)
                  .enterKeyType(EnterKeyType.Search)
                  .backgroundColor(Color.White)
                  .placeholderFont({size:16})
              }
              .width('80%')

              Column(){
                Row(){
                  Button({ type:ButtonType.Circle}){
                    Column(){
                      Text('+')
                        .textAlign(TextAlign.Center)
                        .fontColor('#ff5756')
                        .fontSize(22)
                    }
                  }
                  .backgroundColor(Color.White)
                  .fontColor('#ff5756')
                  .width(50)
                }


                Text('发布')
                  .fontColor(Color.White)
                  .width('50%')
                  .fontSize(15)

              }
              .width('17%')
            }
            .height('10%')
            .backgroundColor('#ff5756')


            Tabs({ barPosition: BarPosition.Start, controller: this.controller1 })
            {
              TabContent() {
                Column(){
                    Text("只做了热榜")
                      .width("100%")
                      .height("100%")
                      .fontSize(50)
                      .textAlign(TextAlign.Center)
                }
                .width('100%')
                .height('100%')
                .backgroundColor("#ffe8edf1")
              }
              .tabBar(this.TabBar1("关注",0))

              TabContent() {
                Column(){
                  Text("只做了热榜")
                    .width("100%")
                    .height("100%")
                    .fontSize(50)
                    .textAlign(TextAlign.Center)
                }
                .width('100%')
                .height('100%')
                .backgroundColor("#ffe8edf1")
              }
              .tabBar(this.TabBar1("推荐",1))

              TabContent() {
                Column(){
                  Row(){
                    List({space:5}){
                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Column({space:2}){
                            Row(){
                              Image($r("app.media.headline"))
                                .width('22%')

                              Text('热榜')
                                .fontStyle(FontStyle.Normal)
                                .fontColor(Color.Black)
                                .fontSize(18)
                            }
                            Text('每分钟更新')
                              .fontColor(Color.Gray)
                              .fontSize(13)
                          }
                        }
                        .height('90%')
                        .borderRadius(15)
                        .backgroundColor(Color.White)
                        .fontColor('#ff5756')
                        .width(140)
                      }
                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Column({space:2}){
                            Text('许家印被控制')
                              .fontSize(20)
                              .fontColor(Color.White)

                            Text('恒大系集体停牌')
                              .fontSize(13)
                              .fontColor(Color.White)
                          }
                        }
                        .height('90%')
                        .borderRadius(15)
                        .backgroundColor('#2100')
                        .fontColor('#ff5756')
                        .width(140)
                      }
                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Column({space:2}){
                            Text('亚运男足')
                              .fontSize(20)
                              .fontColor(Color.White)

                            Text('中国队晋级八强')
                              .fontColor(Color.White)
                              .fontSize(13)
                          }
                        }
                        .height('90%')
                        .borderRadius(15)
                        .backgroundColor('#2100')
                        .fontColor('#ff5756')
                        .width(140)
                      }
                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Column({space:2}){
                            Text('实时报道')
                              .fontSize(20)
                              .fontColor(Color.White)

                            Text('7×24小时在线')
                              .fontColor(Color.White)
                              .fontSize(13)
                          }
                        }
                        .height('90%')
                        .borderRadius(15)
                        .backgroundColor('#2100')
                        .fontColor('#ff5756')
                        .width(140)
                      }
                    }
                    .width('100%')
                    .height('100%')
                    .backgroundColor('#ff5756')
                    .listDirection(Axis.Horizontal)
                  }
                  .height('10%')
                  .backgroundColor(Color.White)

                  Row(){
                    List(){
                      ListItem(){
                        Refresh({ refreshing: this.refreshing }) {
                        }
                        .width('100%')
                        .height('0.0000000001%')
                        .backgroundColor("#ffec5e5e")
                        .onRefreshing(() => {
                          this.refreshing = true;    // 进入刷新状态
                          setTimeout(() => {         // 模拟网络请求，500毫秒后结束刷新
                            this.refreshing = false;
                          }, 500)
                          this.httpRequest();
                        })
                      }
                      ForEach(this.title, (item: any, index?: number) => {// 循环数组创建每一个Item
                        if (!index){
                          ListItem() {
                            Button({type:ButtonType.Normal}){
                              Row(){
                                Column(){
                                  Image($r("app.media.sticky_on_top"))
                                    .objectFit(ImageFit.ScaleDown)
                                    .width('50%')
                                }
                                .width('15%')

                                Column(){
                                  Text(item)
                                    .fontColor(Color.Black)
                                    .maxLines(1)
                                }
                                .width('85%')
                                .alignItems(HorizontalAlign.Start)
                              }
                              .height('9%')
                            }
                            .backgroundColor(Color.White)

                          }
                        }else if(index<4){
                          ListItem() {
                            Button({type:ButtonType.Normal}){
                              Row(){
                                Column(){
                                  Text(index.toString())
                                    .fontColor(Color.Red)
                                }
                                .width('15%')

                                Column(){
                                  Text(item)
                                    .fontColor(Color.Black)
                                    .maxLines(1)
                                }
                                .width('85%')
                                .alignItems(HorizontalAlign.Start)
                              }
                              .height('9%')
                            }
                            .backgroundColor(Color.White)

                          }
                        }else{
                          ListItem() {
                            Button({type:ButtonType.Normal}){
                              Row(){
                                Column(){
                                  Text(index.toString())
                                    .fontColor(Color.Black)
                                }
                                .width('15%')

                                Column(){
                                  Text(item)
                                    .fontColor(Color.Black)
                                    .maxLines(1)
                                }
                                .width('85%')
                                .alignItems(HorizontalAlign.Start)
                              }
                              .height('9%')
                            }
                            .backgroundColor(Color.White)

                          }
                        }

                      })
                    }
                    .width('100%')
                    .height('100%')
                    .backgroundColor(Color.White)
                    .listDirection(Axis.Vertical)
                    .divider({
                      color:'#aabbcc',
                      strokeWidth:1
                    })
                  }
                  .height('90%')
                  .backgroundColor(Color.White)
                }
                  .width('100%')
                  .height('100%')
                  .backgroundColor("#ffe8edf1")
              }
              .tabBar(this.TabBar1("热榜",2))

              TabContent() {
                Column(){
                  Text("只做了热榜")
                    .width("100%")
                    .height("100%")
                    .fontSize(50)
                    .textAlign(TextAlign.Center)
                }
                .width('100%')
                .height('100%')
                .backgroundColor("#ffe8edf1")
              }
              .tabBar(this.TabBar1("发现",3))

              TabContent() {
                Column(){
                  Text("只做了热榜")
                    .width("100%")
                    .height("100%")
                    .fontSize(50)
                    .textAlign(TextAlign.Center)
                }
                .width('100%')
                .height('100%')
                .backgroundColor("#ffe8edf1")
              }
              .tabBar(this.TabBar1("福州",4))

              TabContent() {
                Column(){
                  Text("只做了热榜")
                    .width("100%")
                    .height("100%")
                    .fontSize(50)
                    .textAlign(TextAlign.Center)
                }
                .width('100%')
                .height('100%')
                .backgroundColor("#ffe8edf1")
              }
              .tabBar(this.TabBar1("亚运会",5))

              TabContent() {
                Column(){
                  Text("只做了热榜")
                    .width("100%")
                    .height("100%")
                    .fontSize(50)
                    .textAlign(TextAlign.Center)
                }
                .width('100%')
                .height('100%')
                .backgroundColor("#ffe8edf1")
              }
              .tabBar(this.TabBar1("视频",6))

              TabContent() {
                Column(){
                  Text("只做了热榜")
                    .width("100%")
                    .height("100%")
                    .fontSize(50)
                    .textAlign(TextAlign.Center)
                }
                .width('100%')
                .height('100%')
                .backgroundColor("#ffe8edf1")
              }
              .tabBar(this.TabBar1("不知道",7))

            }
            .width('100%')
            .height('100%')
            .barHeight(45)
            .barMode(BarMode.Scrollable)
            .backgroundColor('#ff5756')
            .onChange((index) => {
              this.index1 = index;
              this.controller1.changeIndex(this.index1);
            })

          }
          .width('100%')
          .height('100%')
          .backgroundColor("#ffe8edf1")
        }
        .tabBar(this.TabBar0($r('app.media.first_page'),$r('app.media.first_page_chose'),'首页',0))

        TabContent() {
          Column(){
              Blank()
              Video({
                src: "http://chenyv.gitee.io/webprogramming/homeworks/html/media/movie.ogg",                   // 设置数据源
                previewUri: "https://www.arkui.club/img/test.png", // 设置封面图片
                controller: this.videoController                   // 设置控制器
              })
                .width(300)
                .height(210)

              Row({space: 10}) {
                Button("开始播放")
                  .onClick(() => {
                    this.videoController.start()
                  })
                Button("暂停播放")
                  .onClick(() => {
                    this.videoController.pause()
                  })

                Button("继续播放")
                  .onClick(() => {
                    this.videoController.start()
                  })
              }

              Row() {
                Button("全屏播放")
                  .onClick(() => {
                    this.videoController.requestFullscreen(true)
                  })
                Button("退出全屏")
                  .onClick(() => {
                    this.videoController.exitFullscreen()
                  })
              }
              Blank()
            }
            .width("100%")
            .height("100%")

/*            Text("没做视频")
              .width("100%")
              .height("100%")
              .fontSize(50)
              .textAlign(TextAlign.Center)*/

          .width('100%')
          .height('100%')
          .backgroundColor("#ffe8edf1")
        }
        .tabBar(this.TabBar0($r('app.media.video'),$r('app.media.video_chose'),'视频',1))


        TabContent() {
            Column(){
              Text("没做红包")
                .width("100%")
                .height("100%")
                .fontSize(50)
                .textAlign(TextAlign.Center)
            }
            .width('100%')
            .height('100%')
            .backgroundColor("#ffe8edf1")
        }
        .tabBar(this.TabBar0($r('app.media.red_envelope'),$r('app.media.red_envelope_chose'),'',2))

        TabContent() {
          Column(){
            Text("没做好礼季")
              .width("100%")
              .height("100%")
              .fontSize(50)
              .textAlign(TextAlign.Center)
          }
          .width('100%')
          .height('100%')
          .backgroundColor("#ffe8edf1")
        }
        .tabBar(this.TabBar0($r('app.media.mid_autumn'),$r('app.media.mid_autumn_chose'),'好礼季',3))

        TabContent() {
          Column()
          {
            Text(' ')
              .fontSize(100)
            Text(' ')
              .fontSize(20)

            TextInput({ placeholder: '手机号/邮箱地址/账号名' })
              .caretColor(Color.Blue)
              .onChange((value: string) => {
                //this.text = value
              })
              .height(50)
              .width(330)
              .fontSize(20)

            TextInput({ placeholder: '密码' })
              .caretColor(Color.Blue)
              .onChange((value: string) => {
                //this.text2 = value
              })
              .height(50)
              .width(330)
              .fontSize(20)

            Text(' ')
              .fontSize(20)
            Text(' ')
              .fontSize(20)


            Button('登录', { type: ButtonType.Capsule, stateEffect: true })
              .onClick(() => {
                // 处理点击事件逻辑
              })
              .width('60%')
              .height(30)
              .fontSize(20)
              .fontWeight(FontWeight.Medium)
              .backgroundColor('#007DFF')

            Button('注册', { type: ButtonType.Capsule, stateEffect: true })
              .onClick(() => {
                // 处理点击事件逻辑
              })
              .width('60%')
              .height(30)
              .fontSize(20)
              .fontWeight(FontWeight.Medium)
              .backgroundColor('#ffd6d0d0')


          }
          .width('100%')
          .height('100%')
          .backgroundColor("#ffe8edf1")
        }
        .tabBar(this.TabBar0($r('app.media.avatar'),$r('app.media.avatar_chose'),'我的',4))
      }
      .width('100%')
      .height('100%')
      .barHeight(60)
      .barMode(BarMode.Fixed)         // TabBar均分
      .onChange((index) => {
        this.index0 = index;
        this.controller0.changeIndex(this.index0);
      })
    }
    .height('100%')
    .width('100%')
  }

  private httpRequest() {
    let httpRequest = http.createHttp();
    httpRequest.request(
      "http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html",
      {
        method: RequestMethod.RequestMethod.GET,
        header: {
          "user-agent": "Mozilla/5.1 ****"
        },
        readTimeout: 15000,
        connectTimeout: 15000,
        extraData: {  }
      },
      (error, data) => {
        if(error) {
          console.log("error code: " + error.code + ", msg: " + error.message)
        } else {
          let code = data.responseCode
          if(ResponseCode.ResponseCode.OK == code) {

            this.html = JSON.stringify(data.result);
            let header= JSON.stringify(data.header);
            console.log("result: " + this.html);
            console.log("header: " + header);

            let fobj=JSON.parse(this.html)
            let titlemap=JSON.parse(fobj)


            for (let index=0; index < 30 ; index++)
            {
              console.log(titlemap["T1348647853363"][index]["title"])
              this.title[index]=titlemap["T1348647853363"][index]["title"]
            }

          } else {
            console.log("response code: " + code);
          }
        }
      }
    );
  }
}

/**
 * 废弃代码块
 */
/*  @Builder tabFirstPage() {
    Column() {
        Button({type:ButtonType.Normal}){
          Column(){
            Image(this.index0 == 0 ? $r('app.media.first_page_chose'):$r('app.media.first_page'))
              .width('50%')

            Text('首页')
              .fontSize(12)
              .fontColor(this.index0 == 0 ? '#ff5756' : "#ff000000")
          }
        }

        .height('100%')
        .backgroundColor(Color.White)
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index0 = 0;
      this.controller0.changeIndex(this.index0);
    })
  }

  @Builder tabVideoPage() {
    Column() {
      Button({type:ButtonType.Normal}){
        Column(){
          Image(this.index0 == 1 ? $r('app.media.video_chose'):$r('app.media.video'))
            .width('50%')

          Text('视频')
            .fontSize(12)
            .fontColor(this.index0 == 1 ? '#ff5756' : "#ff000000")
        }
      }
      .height('100%')
      .backgroundColor(Color.White)
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index0 = 1;
      this.controller0.changeIndex(this.index0);
    })
  }

  @Builder tabActivityPage() {
    Column() {
      Button({type:ButtonType.Normal}){
        Column(){
          Image(this.index0 ==2?$r('app.media.red_envelope_chose'):$r('app.media.red_envelope'))
            .width('68%')
        }
      }
      .height('100%')
      .backgroundColor(Color.White)
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index0 = 2;
      this.controller0.changeIndex(this.index0);
    })
  }

  @Builder tabHolidayPage() {
    Column() {
      Button({type:ButtonType.Normal}){
        Column(){
          Image(this.index0 == 3?$r('app.media.mid_autumn_chose'):$r('app.media.mid_autumn'))
            .width('50%')


          Text('好礼季')
            .fontSize(12)
            .fontColor(this.index0 == 3 ? '#ff5756' : "#ff000000")
        }
      }
      .height('100%')
      .backgroundColor(Color.White)
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index0 = 3;
      this.controller0.changeIndex(this.index0);
    })
  }

  @Builder tabMinePage() {
    Column() {
      Button({type:ButtonType.Normal}){
        Column(){
          Image(this.index0 == 4 ?$r('app.media.avatar_chose'):$r('app.media.avatar'))
            .width('45%')

          Text('我的')
            .fontSize(12)
            .fontColor(this.index0 == 4 ? '#ff5756' : "#ff000000")
        }
      }
      .height('100%')
      .backgroundColor(Color.White)
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index0 = 4;
      this.controller0.changeIndex(this.index0);
    })
  }*/
/*  @Builder tabFollow() {
    Column() {
      Button({type:ButtonType.Normal}){
        Column() {
          Text('关注')
            .fontWeight(this.index1 == 0?FontWeight.Bolder:FontWeight.Regular)
            .fontColor("#ffffffff")

          Text('——')
            .fontSize(10)
            .fontWeight(FontWeight.Bolder)
            .fontColor(this.index1 == 0 ? "#ffffffff" : '#ff5756')
        }

      }
      .fontSize(14)
      .height('100%')
      .backgroundColor('#ff5756')
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index1 = 0;
      this.controller1.changeIndex(this.index1);
    })
  }

  @Builder tabRecommend() {
    Column() {
      Button({type:ButtonType.Normal}){
        Column() {
          Text('推荐')
            .fontWeight(this.index1 == 1?FontWeight.Bolder:FontWeight.Regular)
            .fontColor("#ffffffff")

          Text('——')
            .fontSize(10)
            .fontWeight(FontWeight.Bolder)
            .fontColor(this.index1 == 1 ? "#ffffffff" : '#ff5756')
        }

      }
      .fontSize(14)
      .height('100%')
      .backgroundColor('#ff5756')
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index1 = 1;
      this.controller1.changeIndex(this.index1);
    })
  }

  @Builder tabHot() {
    Column() {
      Button({type:ButtonType.Normal}){
        Column() {
          Text('热榜')
            .fontWeight(this.index1 == 2?FontWeight.Bolder:FontWeight.Regular)
            .fontColor("#ffffffff")

          Text('——')
            .fontSize(10)
            .fontWeight(FontWeight.Bolder)
            .fontColor(this.index1 == 2 ? "#ffffffff" : '#ff5756')
        }

      }
      .fontSize(14)
      .height('100%')
      .backgroundColor('#ff5756')
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index1 = 2;
      this.controller1.changeIndex(this.index1);
    })
  }

  @Builder tabHot() {
    Column() {
      Button({type:ButtonType.Normal}){
        Column() {
          Text('热榜')
            .fontWeight(this.index1 == 2?FontWeight.Bolder:FontWeight.Regular)
            .fontColor("#ffffffff")

          Text('——')
            .fontSize(10)
            .fontWeight(FontWeight.Bolder)
            .fontColor(this.index1 == 2 ? "#ffffffff" : '#ff5756')
        }

      }
      .fontSize(14)
      .height('100%')
      .backgroundColor('#ff5756')
    }
    .height('100%')
    .width("100%")
    .onClick(() => {
      this.index1 = 2;
      this.controller1.changeIndex(this.index1);
    })
  }

  Row(){
    Button({type:ButtonType.Normal}){
      Column(){
        Image($r('app.media.first_pages'))
          .width('45%')

        Text('首页')
          .fontSize(12)
      }
    }.width('20%')
    .height('100%')
    .backgroundColor(Color.White)
    Button({type:ButtonType.Normal}){
      Column(){
        Image($r('app.media.video'))
          .width('50%')

        Text('视频')
          .fontSize(12)
      }
    }.width('20%')
    .height('100%')
    .backgroundColor(Color.White)
    Button({type:ButtonType.Normal}){
      Column(){
        Image($r('app.media.red_envelope'))
          .width('68%')
      }
    }.width('20%')
    .height('100%')
    .backgroundColor(Color.White)
    Button({type:ButtonType.Normal}){
      Column(){
        Image($r('app.media.mid_autumn'))
          .width('50%')


        Text('好礼季')
          .fontSize(12)
      }
    }.width('20%')
    .height('100%')
    .backgroundColor(Color.White)
    Button({type:ButtonType.Normal}){
      Column(){
        Image($r("app.media.avatar"))
          .width('45%')

        Text('我的')
          .fontSize(12)
      }
    }.width('20%')
    .height('100%')
    .backgroundColor(Color.White)

  }
  .height('8%')
  .backgroundColor(Color.White)*/
/*        Row(){
      Column(){
      }
      .width('3%')

      Column(){
        TextInput({placeholder:'华安黄金吧 | 申请强制启动'})
          .height(40)
          .enterKeyType(EnterKeyType.Search)
          .backgroundColor(Color.White)
          .placeholderFont({size:16})
      }
      .width('80%')

      Column(){
        Row(){
          Button({ type:ButtonType.Circle}){
            Column(){
              Text('+')
                .textAlign(TextAlign.Center)
                .fontColor('#ff5756')
                .fontSize(22)
            }
          }
          .backgroundColor(Color.White)
          .fontColor('#ff5756')
          .width(50)
        }


        Text('发布')
          .fontColor(Color.White)
          .width('50%')
          .fontSize(15)

      }
      .width('17%')
    }
    .height('7%')
    .backgroundColor('#ff5756')

     Row(){
      Column(){
        List() {
          ListItem() {
            Button('关注')
              .backgroundColor('#ff5756')
              .fontSize(14)
          }

          ListItem() {
            Button('推荐')
              .backgroundColor('#ff5756')
              .fontSize(14)
          }

          ListItem() {
            Button('热榜')
              .backgroundColor('#ff5756')
              .fontSize(14)
          }

          ListItem() {
            Button('发现')
              .backgroundColor('#ff5756')
              .fontSize(14)
          }

          ListItem() {
            Button('福州')
              .backgroundColor('#ff5756')
              .fontSize(14)
          }

          ListItem() {
            Button('亚运会')
              .backgroundColor('#ff5756')
              .fontSize(14)
          }

          ListItem() {
            Button('视频')
              .backgroundColor('#ff5756')
              .fontSize(14)
          }
        }
        .width('100%')
        .height('70%')
        .backgroundColor('#ff5756')
        .listDirection(Axis.Horizontal)
      }
      .width('90%')


      Column(){
        Button('≡',{type:ButtonType.Normal})
          .backgroundColor('#ff5756')
          .fontSize(15)
          .align(Alignment.Start)
      }
      .width('10%')
      .alignItems(HorizontalAlign.Start)


    }
    .height('5%')
    .backgroundColor('#ff5756')


    Row(){
      List({space:5}){
        ListItem(){
          Button({type:ButtonType.Normal}){
            Column({space:2}){
              Row(){
                Image($r("app.media.headline"))
                  .width('22%')

                Text('热榜')
                  .fontStyle(FontStyle.Normal)
                  .fontColor(Color.Black)
                  .fontSize(18)
              }
              Text('每分钟更新')
                .fontColor(Color.Gray)
                .fontSize(13)
            }
          }
          .height('90%')
          .borderRadius(15)
          .backgroundColor(Color.White)
          .fontColor('#ff5756')
          .width(140)
        }
        ListItem(){
          Button({type:ButtonType.Normal}){
            Column({space:2}){
              Text('许家印被控制')
                .fontSize(20)
                .fontColor(Color.White)

              Text('恒大系集体停牌')
                .fontSize(13)
                .fontColor(Color.White)
            }
          }
          .height('90%')
          .borderRadius(15)
          .backgroundColor('#2100')
          .fontColor('#ff5756')
          .width(140)
        }
        ListItem(){
          Button({type:ButtonType.Normal}){
            Column({space:2}){
              Text('亚运男足')
                .fontSize(20)
                .fontColor(Color.White)

              Text('中国队晋级八强')
                .fontColor(Color.White)
                .fontSize(13)
            }
          }
          .height('90%')
          .borderRadius(15)
          .backgroundColor('#2100')
          .fontColor('#ff5756')
          .width(140)
        }
        ListItem(){
          Button({type:ButtonType.Normal}){
            Column({space:2}){
              Text('实时报道')
                .fontSize(20)
                .fontColor(Color.White)

              Text('7×24小时在线')
                .fontColor(Color.White)
                .fontSize(13)
            }
          }
          .height('90%')
          .borderRadius(15)
          .backgroundColor('#2100')
          .fontColor('#ff5756')
          .width(140)
        }
      }
      .width('100%')
      .height('100%')
      .backgroundColor('#ff5756')
      .listDirection(Axis.Horizontal)
    }
    .height('8%')
    .backgroundColor(Color.White)

    Row(){
      List(){
        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Image($r("app.media.sticky_on_top"))
                  .objectFit(ImageFit.ScaleDown)
                  .width('50%')
              }
              .width('15%')

              Column(){
                Text('携手书写千年丝路新篇章')
                  .fontColor(Color.Black)

              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)
            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('1')
                  .fontColor(Color.Red)
              }
              .width('15%')

              Column(){
                Text('热议亚运国足进八强: 底线任务完成')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)

            }.height('9%')

          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('2')
                  .fontColor(Color.Red)
              }
              .width('15%')

              Column(){
                Text('叙利亚第一夫人的美女保镖火了')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)
            }
          }
          .height('9%')
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('3')
                  .fontColor(Color.Red)
              }
              .width('15%')

              Column(){
                Text('不愧是江浙沪 “ 包邮 ” ！')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)
            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('4')
                  .fontColor(Color.Black)
              }
              .width('15%')

              Column(){
                Text('陕西四川多地发生爆响 监控曝光')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)
            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('5')
                  .fontColor(Color.Black)
              }
              .width('15%')

              Column(){
                Text('胡锡进评许家印被控制: 让子弹飞一会')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)
            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('6')
                  .fontColor(Color.Black)
              }
              .width('15%')

              Column(){
                Text('恒大系集体停牌')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)
            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('7')
                  .fontColor(Color.Black)
              }
              .width('15%')

              Column(){
                Text('官方回应川陕多地巨响: 怀疑是音爆')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)
            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('8')
                  .fontColor(Color.Black)
              }
              .width('15%')

              Column(){
                Text('美国费城苹果店被“洗劫一空”')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)
            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('9')
                  .fontColor(Color.Black)
              }
              .width('15%')

              Column(){
                Text('南京长江隧道被撞漏？ 官方辟谣')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)

            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('10')
                  .fontColor(Color.Black)
              }
              .width('15%')

              Column(){
                Text('一高校发“硬核”月饼 比砖还硬')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)

            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }

        ListItem(){
          Button({type:ButtonType.Normal}){
            Row(){
              Column(){
                Text('11')
                  .fontColor(Color.Black)
              }
              .width('15%')

              Column(){
                Text('终场哨响 卡塔尔球员围堵裁判')
                  .fontColor(Color.Black)
              }
              .width('85%')
              .alignItems(HorizontalAlign.Start)

            }
            .height('9%')
          }
          .backgroundColor(Color.White)
        }
      }
      .width('100%')
      .height('100%')
      .backgroundColor(Color.White)
      .listDirection(Axis.Vertical)
      .divider({
        color:'#aabbcc',
        strokeWidth:1
      })
    }
    .height('72%')
    .backgroundColor(Color.White)

    Row(){
      Button({type:ButtonType.Normal}){
        Column(){
          Image($r('app.media.first_pages'))
            .width('45%')

          Text('首页')
            .fontSize(12)
        }
      }.width('20%')
      .height('100%')
      .backgroundColor(Color.White)
      Button({type:ButtonType.Normal}){
        Column(){
          Image($r('app.media.video'))
            .width('50%')

          Text('视频')
            .fontSize(12)
        }
      }.width('20%')
      .height('100%')
      .backgroundColor(Color.White)
      Button({type:ButtonType.Normal}){
        Column(){
          Image($r('app.media.red_envelope'))
            .width('68%')
        }
      }.width('20%')
      .height('100%')
      .backgroundColor(Color.White)
      Button({type:ButtonType.Normal}){
        Column(){
          Image($r('app.media.mid_autumn'))
            .width('50%')


          Text('好礼季')
            .fontSize(12)
        }
      }.width('20%')
      .height('100%')
      .backgroundColor(Color.White)
      Button({type:ButtonType.Normal}){
        Column(){
          Image($r("app.media.avatar"))
            .width('45%')

          Text('我的')
            .fontSize(12)
        }
      }.width('20%')
      .height('100%')
      .backgroundColor(Color.White)

    }
    .height('8%')
    .backgroundColor(Color.White)*/
/*
             Row(){
               Column(){
                 List() {
                   ListItem() {
                     Button('关注')
                       .backgroundColor('#ff5756')
                       .fontSize(14)
                   }

                   ListItem() {
                     Button('推荐')
                       .backgroundColor('#ff5756')
                       .fontSize(14)
                   }

                   ListItem() {
                     Button('热榜')
                       .backgroundColor('#ff5756')
                       .fontSize(14)
                   }

                   ListItem() {
                     Button('发现')
                       .backgroundColor('#ff5756')
                       .fontSize(14)
                   }

                   ListItem() {
                     Button('福州')
                       .backgroundColor('#ff5756')
                       .fontSize(14)
                   }

                   ListItem() {
                     Button('亚运会')
                       .backgroundColor('#ff5756')
                       .fontSize(14)
                   }

                   ListItem() {
                     Button('视频')
                       .backgroundColor('#ff5756')
                       .fontSize(14)
                   }
                 }
                 .width('100%')
                 .height('70%')
                 .backgroundColor('#ff5756')
                 .listDirection(Axis.Horizontal)
               }
               .width('90%')


               Column(){
                 Button('≡',{type:ButtonType.Normal})
                   .backgroundColor('#ff5756')
                   .fontSize(15)
                   .align(Alignment.Start)
               }
               .width('10%')
               .alignItems(HorizontalAlign.Start)


             }
             .height('5%')
             .backgroundColor('#ff5756')*/
/*                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Image($r("app.media.sticky_on_top"))
                                .objectFit(ImageFit.ScaleDown)
                                .width('50%')
                            }
                            .width('15%')

                            Column(){
                              Text(this.title[0].toString())
                                .fontColor(Color.Black)
                                .maxLines(1)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)
                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('1')
                                .fontColor(Color.Red)
                            }
                            .width('15%')

                            Column(){
                              Text('热议亚运国足进八强: 底线任务完成')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)

                          }.height('9%')

                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('2')
                                .fontColor(Color.Red)
                            }
                            .width('15%')

                            Column(){
                              Text('叙利亚第一夫人的美女保镖火了')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)
                          }
                        }
                        .height('9%')
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('3')
                                .fontColor(Color.Red)
                            }
                            .width('15%')

                            Column(){
                              Text('不愧是江浙沪 “ 包邮 ” ！')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)
                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('4')
                                .fontColor(Color.Black)
                            }
                            .width('15%')

                            Column(){
                              Text('陕西四川多地发生爆响 监控曝光')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)
                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('5')
                                .fontColor(Color.Black)
                            }
                            .width('15%')

                            Column(){
                              Text('胡锡进评许家印被控制: 让子弹飞一会')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)
                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('6')
                                .fontColor(Color.Black)
                            }
                            .width('15%')

                            Column(){
                              Text('恒大系集体停牌')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)
                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('7')
                                .fontColor(Color.Black)
                            }
                            .width('15%')

                            Column(){
                              Text('官方回应川陕多地巨响: 怀疑是音爆')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)
                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('8')
                                .fontColor(Color.Black)
                            }
                            .width('15%')

                            Column(){
                              Text('美国费城苹果店被“洗劫一空”')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)
                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('9')
                                .fontColor(Color.Black)
                            }
                            .width('15%')

                            Column(){
                              Text('南京长江隧道被撞漏？ 官方辟谣')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)

                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('10')
                                .fontColor(Color.Black)
                            }
                            .width('15%')

                            Column(){
                              Text('一高校发“硬核”月饼 比砖还硬')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)

                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }

                      ListItem(){
                        Button({type:ButtonType.Normal}){
                          Row(){
                            Column(){
                              Text('11')
                                .fontColor(Color.Black)
                            }
                            .width('15%')

                            Column(){
                              Text('终场哨响 卡塔尔球员围堵裁判')
                                .fontColor(Color.Black)
                            }
                            .width('85%')
                            .alignItems(HorizontalAlign.Start)

                          }
                          .height('9%')
                        }
                        .backgroundColor(Color.White)
                      }*/
