import http from '@ohos.net.http';
import RequestMethod from '@ohos.net.http';
import ResponseCode from '@ohos.net.http';
struct EnterMenu extends  {
    constructor() { }
    TabBar0(img0, img1, str, index) {
            .height('100%')
            .width("100%")
            .onClick(() => {
            this.index0 = index;
            this.controller0.changeIndex(this.index0);
        });
    }
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
    TabBar1(str, index) {
            .height('100%')
            .width("15%")
            .onClick(() => {
            this.index1 = index;
            this.controller1.changeIndex(this.index1);
        });
    }
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
      }*/
    /*
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
    */
    /*Row(){
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
    aboutToAppear() {
        this.httpRequest();
    }
    build() {
            .height('100%')
            .width('100%');
    }
    httpRequest() {
        let httpRequest = http.createHttp();
        httpRequest.request("http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html", {
            method: RequestMethod.RequestMethod.GET,
            header: {
                "user-agent": "Mozilla/5.1 ****"
            },
            readTimeout: 15000,
            connectTimeout: 15000,
            extraData: {}
        }, (error, data) => {
            if (error) {
                console.log("error code: " + error.code + ", msg: " + error.message);
            }
            else {
                let code = data.responseCode;
                if (ResponseCode.ResponseCode.OK == code) {
                    this.html = JSON.stringify(data.result);
                    let header = JSON.stringify(data.header);
                    console.log("result: " + this.html);
                    console.log("header: " + header);
                    let fobj = JSON.parse(this.html);
                    let titlemap = JSON.parse(fobj);
                    for (let index = 0; index < 11; index++) {
                        console.log(titlemap["T1348647853363"][index]["title"]);
                        this.title[index] = titlemap["T1348647853363"][index]["title"];
                    }
                }
                else {
                    console.log("response code: " + code);
                }
            }
        });
    }
}
//# sourceMappingURL=Index2.js.map