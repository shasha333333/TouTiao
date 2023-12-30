import http from '@ohos.net.http';
import RequestMethod from '@ohos.net.http';
import ResponseCode from '@ohos.net.http';


@Entry @Component struct Index {

  @State html: string = "";

  build() {
    Column({space: 10}) {
      Button("读取百度网页")
        .onClick(() => {
          this.httpRequest();
        })
      Text(this.html)
    }
    .width('100%')
    .height('100%')
    .padding(10)
  }

  private httpRequest() {
    let httpRequest = http.createHttp();
    httpRequest.request(
      "https://www.baidu.com",
      {
        method: RequestMethod.RequestMethod.GET,
        header: {
          "user-agent": "Mozilla/5.1 ****"
        },
        readTimeout: 15000,
        connectTimeout: 15000,
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
          } else {
            console.log("response code: " + code);
          }
        }
      }
    );
  }
}