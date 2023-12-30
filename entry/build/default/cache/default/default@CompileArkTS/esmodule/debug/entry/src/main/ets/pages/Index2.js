import http from '@ohos:net.http';
import RequestMethod from '@ohos:net.http';
import ResponseCode from '@ohos:net.http';
class EnterMenu extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.controller0 = new TabsController();
        this.controller1 = new TabsController();
        this.videoController = new VideoController();
        this.__index0 = new ObservedPropertySimplePU(0, this, "index0");
        this.__index1 = new ObservedPropertySimplePU(0, this, "index1");
        this.__message = new ObservedPropertySimplePU('', this, "message");
        this.__html = new ObservedPropertySimplePU("", this, "html");
        this.__title = new ObservedPropertyObjectPU([], this, "title");
        this.__refreshing = new ObservedPropertySimplePU(false, this, "refreshing");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller0 !== undefined) {
            this.controller0 = params.controller0;
        }
        if (params.controller1 !== undefined) {
            this.controller1 = params.controller1;
        }
        if (params.videoController !== undefined) {
            this.videoController = params.videoController;
        }
        if (params.index0 !== undefined) {
            this.index0 = params.index0;
        }
        if (params.index1 !== undefined) {
            this.index1 = params.index1;
        }
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.html !== undefined) {
            this.html = params.html;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.refreshing !== undefined) {
            this.refreshing = params.refreshing;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__index0.purgeDependencyOnElmtId(rmElmtId);
        this.__index1.purgeDependencyOnElmtId(rmElmtId);
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__html.purgeDependencyOnElmtId(rmElmtId);
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__refreshing.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__index0.aboutToBeDeleted();
        this.__index1.aboutToBeDeleted();
        this.__message.aboutToBeDeleted();
        this.__html.aboutToBeDeleted();
        this.__title.aboutToBeDeleted();
        this.__refreshing.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get index0() {
        return this.__index0.get();
    }
    set index0(newValue) {
        this.__index0.set(newValue);
    }
    get index1() {
        return this.__index1.get();
    }
    set index1(newValue) {
        this.__index1.set(newValue);
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get html() {
        return this.__html.get();
    }
    set html(newValue) {
        this.__html.set(newValue);
    }
    get title() {
        return this.__title.get();
    }
    set title(newValue) {
        this.__title.set(newValue);
    }
    get refreshing() {
        return this.__refreshing.get();
    }
    set refreshing(newValue) {
        this.__refreshing.set(newValue);
    }
    TabBar0(img0, img1, str, index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height('100%');
            Column.width("100%");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild({ type: ButtonType.Normal });
            Button.height('100%');
            Button.backgroundColor(Color.White);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.index0 == index ? img1 : img0);
            Image.width('50%');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(str);
            Text.fontSize(12);
            Text.fontColor(this.index0 == index ? '#ff5756' : "#ff000000");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Button.pop();
        Column.pop();
    }
    TabBar1(str, index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height('100%');
            Column.width("15%");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild({ type: ButtonType.Normal });
            Button.fontSize(14);
            Button.height('100%');
            Button.backgroundColor('#ff5756');
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(str);
            Text.fontWeight(this.index1 == index ? FontWeight.Bolder : FontWeight.Regular);
            Text.fontColor("#ffffffff");
            Text.height('40%');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('——');
            Text.fontSize(10);
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor(this.index1 == index ? "#ffffffff" : '#ff5756');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Button.pop();
        Column.pop();
    }
    aboutToAppear() {
        this.httpRequest();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height('100%');
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({ barPosition: BarPosition.End, controller: this.controller0 });
            Tabs.width('100%');
            Tabs.height('100%');
            Tabs.barHeight(60);
            Tabs.barMode(BarMode.Fixed);
            Tabs.onChange((index) => {
                this.index0 = index;
                this.controller0.changeIndex(this.index0);
            });
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor("#ffe8edf1");
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    Row.height('10%');
                    Row.backgroundColor('#ff5756');
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width('3%');
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Column.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width('80%');
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TextInput.create({ placeholder: '华安黄金吧 | 申请强制启动' });
                    TextInput.height(40);
                    TextInput.enterKeyType(EnterKeyType.Search);
                    TextInput.backgroundColor(Color.White);
                    TextInput.placeholderFont({ size: 16 });
                    if (!isInitialRender) {
                        TextInput.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Column.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width('17%');
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithChild({ type: ButtonType.Circle });
                    Button.backgroundColor(Color.White);
                    Button.fontColor('#ff5756');
                    Button.width(50);
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('+');
                    Text.textAlign(TextAlign.Center);
                    Text.fontColor('#ff5756');
                    Text.fontSize(22);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
                Button.pop();
                Row.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('发布');
                    Text.fontColor(Color.White);
                    Text.width('50%');
                    Text.fontSize(15);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
                Row.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Tabs.create({ barPosition: BarPosition.Start, controller: this.controller1 });
                    Tabs.width('100%');
                    Tabs.height('100%');
                    Tabs.barHeight(45);
                    Tabs.barMode(BarMode.Scrollable);
                    Tabs.backgroundColor('#ff5756');
                    Tabs.onChange((index) => {
                        this.index1 = index;
                        this.controller1.changeIndex(this.index1);
                    });
                    if (!isInitialRender) {
                        Tabs.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width('100%');
                            Column.height('100%');
                            Column.backgroundColor("#ffe8edf1");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create("只做了热榜");
                            Text.width("100%");
                            Text.height("100%");
                            Text.fontSize(50);
                            Text.textAlign(TextAlign.Center);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.TabBar1.call(this, "关注", 0);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width('100%');
                            Column.height('100%');
                            Column.backgroundColor("#ffe8edf1");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create("只做了热榜");
                            Text.width("100%");
                            Text.height("100%");
                            Text.fontSize(50);
                            Text.textAlign(TextAlign.Center);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.TabBar1.call(this, "推荐", 1);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width('100%');
                            Column.height('100%');
                            Column.backgroundColor("#ffe8edf1");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.height('10%');
                            Row.backgroundColor(Color.White);
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            List.create({ space: 5 });
                            List.width('100%');
                            List.height('100%');
                            List.backgroundColor('#ff5756');
                            List.listDirection(Axis.Horizontal);
                            if (!isInitialRender) {
                                List.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        {
                            const isLazyCreate = true;
                            const itemCreation = (elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                ListItem.create(deepRenderFunction, isLazyCreate);
                                if (!isInitialRender) {
                                    ListItem.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            };
                            const observedShallowRender = () => {
                                this.observeComponentCreation(itemCreation);
                                ListItem.pop();
                            };
                            const observedDeepRender = () => {
                                this.observeComponentCreation(itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Button.createWithChild({ type: ButtonType.Normal });
                                    Button.height('90%');
                                    Button.borderRadius(15);
                                    Button.backgroundColor(Color.White);
                                    Button.fontColor('#ff5756');
                                    Button.width(140);
                                    if (!isInitialRender) {
                                        Button.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Column.create({ space: 2 });
                                    if (!isInitialRender) {
                                        Column.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Row.create();
                                    if (!isInitialRender) {
                                        Row.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Image.create({ "id": 16777226, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" });
                                    Image.width('22%');
                                    if (!isInitialRender) {
                                        Image.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('热榜');
                                    Text.fontStyle(FontStyle.Normal);
                                    Text.fontColor(Color.Black);
                                    Text.fontSize(18);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Row.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('每分钟更新');
                                    Text.fontColor(Color.Gray);
                                    Text.fontSize(13);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Column.pop();
                                Button.pop();
                                ListItem.pop();
                            };
                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                itemCreation(elmtId, isInitialRender);
                                this.updateFuncByElmtId.set(elmtId, itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Button.createWithChild({ type: ButtonType.Normal });
                                    Button.height('90%');
                                    Button.borderRadius(15);
                                    Button.backgroundColor(Color.White);
                                    Button.fontColor('#ff5756');
                                    Button.width(140);
                                    if (!isInitialRender) {
                                        Button.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Column.create({ space: 2 });
                                    if (!isInitialRender) {
                                        Column.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Row.create();
                                    if (!isInitialRender) {
                                        Row.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Image.create({ "id": 16777226, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" });
                                    Image.width('22%');
                                    if (!isInitialRender) {
                                        Image.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('热榜');
                                    Text.fontStyle(FontStyle.Normal);
                                    Text.fontColor(Color.Black);
                                    Text.fontSize(18);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Row.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('每分钟更新');
                                    Text.fontColor(Color.Gray);
                                    Text.fontSize(13);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Column.pop();
                                Button.pop();
                                ListItem.pop();
                            };
                            if (isLazyCreate) {
                                observedShallowRender();
                            }
                            else {
                                observedDeepRender();
                            }
                        }
                        {
                            const isLazyCreate = true;
                            const itemCreation = (elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                ListItem.create(deepRenderFunction, isLazyCreate);
                                if (!isInitialRender) {
                                    ListItem.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            };
                            const observedShallowRender = () => {
                                this.observeComponentCreation(itemCreation);
                                ListItem.pop();
                            };
                            const observedDeepRender = () => {
                                this.observeComponentCreation(itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Button.createWithChild({ type: ButtonType.Normal });
                                    Button.height('90%');
                                    Button.borderRadius(15);
                                    Button.backgroundColor('#2100');
                                    Button.fontColor('#ff5756');
                                    Button.width(140);
                                    if (!isInitialRender) {
                                        Button.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Column.create({ space: 2 });
                                    if (!isInitialRender) {
                                        Column.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('许家印被控制');
                                    Text.fontSize(20);
                                    Text.fontColor(Color.White);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('恒大系集体停牌');
                                    Text.fontSize(13);
                                    Text.fontColor(Color.White);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Column.pop();
                                Button.pop();
                                ListItem.pop();
                            };
                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                itemCreation(elmtId, isInitialRender);
                                this.updateFuncByElmtId.set(elmtId, itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Button.createWithChild({ type: ButtonType.Normal });
                                    Button.height('90%');
                                    Button.borderRadius(15);
                                    Button.backgroundColor('#2100');
                                    Button.fontColor('#ff5756');
                                    Button.width(140);
                                    if (!isInitialRender) {
                                        Button.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Column.create({ space: 2 });
                                    if (!isInitialRender) {
                                        Column.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('许家印被控制');
                                    Text.fontSize(20);
                                    Text.fontColor(Color.White);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('恒大系集体停牌');
                                    Text.fontSize(13);
                                    Text.fontColor(Color.White);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Column.pop();
                                Button.pop();
                                ListItem.pop();
                            };
                            if (isLazyCreate) {
                                observedShallowRender();
                            }
                            else {
                                observedDeepRender();
                            }
                        }
                        {
                            const isLazyCreate = true;
                            const itemCreation = (elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                ListItem.create(deepRenderFunction, isLazyCreate);
                                if (!isInitialRender) {
                                    ListItem.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            };
                            const observedShallowRender = () => {
                                this.observeComponentCreation(itemCreation);
                                ListItem.pop();
                            };
                            const observedDeepRender = () => {
                                this.observeComponentCreation(itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Button.createWithChild({ type: ButtonType.Normal });
                                    Button.height('90%');
                                    Button.borderRadius(15);
                                    Button.backgroundColor('#2100');
                                    Button.fontColor('#ff5756');
                                    Button.width(140);
                                    if (!isInitialRender) {
                                        Button.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Column.create({ space: 2 });
                                    if (!isInitialRender) {
                                        Column.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('亚运男足');
                                    Text.fontSize(20);
                                    Text.fontColor(Color.White);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('中国队晋级八强');
                                    Text.fontColor(Color.White);
                                    Text.fontSize(13);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Column.pop();
                                Button.pop();
                                ListItem.pop();
                            };
                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                itemCreation(elmtId, isInitialRender);
                                this.updateFuncByElmtId.set(elmtId, itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Button.createWithChild({ type: ButtonType.Normal });
                                    Button.height('90%');
                                    Button.borderRadius(15);
                                    Button.backgroundColor('#2100');
                                    Button.fontColor('#ff5756');
                                    Button.width(140);
                                    if (!isInitialRender) {
                                        Button.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Column.create({ space: 2 });
                                    if (!isInitialRender) {
                                        Column.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('亚运男足');
                                    Text.fontSize(20);
                                    Text.fontColor(Color.White);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('中国队晋级八强');
                                    Text.fontColor(Color.White);
                                    Text.fontSize(13);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Column.pop();
                                Button.pop();
                                ListItem.pop();
                            };
                            if (isLazyCreate) {
                                observedShallowRender();
                            }
                            else {
                                observedDeepRender();
                            }
                        }
                        {
                            const isLazyCreate = true;
                            const itemCreation = (elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                ListItem.create(deepRenderFunction, isLazyCreate);
                                if (!isInitialRender) {
                                    ListItem.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            };
                            const observedShallowRender = () => {
                                this.observeComponentCreation(itemCreation);
                                ListItem.pop();
                            };
                            const observedDeepRender = () => {
                                this.observeComponentCreation(itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Button.createWithChild({ type: ButtonType.Normal });
                                    Button.height('90%');
                                    Button.borderRadius(15);
                                    Button.backgroundColor('#2100');
                                    Button.fontColor('#ff5756');
                                    Button.width(140);
                                    if (!isInitialRender) {
                                        Button.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Column.create({ space: 2 });
                                    if (!isInitialRender) {
                                        Column.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('实时报道');
                                    Text.fontSize(20);
                                    Text.fontColor(Color.White);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('7×24小时在线');
                                    Text.fontColor(Color.White);
                                    Text.fontSize(13);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Column.pop();
                                Button.pop();
                                ListItem.pop();
                            };
                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                itemCreation(elmtId, isInitialRender);
                                this.updateFuncByElmtId.set(elmtId, itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Button.createWithChild({ type: ButtonType.Normal });
                                    Button.height('90%');
                                    Button.borderRadius(15);
                                    Button.backgroundColor('#2100');
                                    Button.fontColor('#ff5756');
                                    Button.width(140);
                                    if (!isInitialRender) {
                                        Button.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Column.create({ space: 2 });
                                    if (!isInitialRender) {
                                        Column.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('实时报道');
                                    Text.fontSize(20);
                                    Text.fontColor(Color.White);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create('7×24小时在线');
                                    Text.fontColor(Color.White);
                                    Text.fontSize(13);
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                Column.pop();
                                Button.pop();
                                ListItem.pop();
                            };
                            if (isLazyCreate) {
                                observedShallowRender();
                            }
                            else {
                                observedDeepRender();
                            }
                        }
                        List.pop();
                        Row.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.height('90%');
                            Row.backgroundColor(Color.White);
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            List.create();
                            List.width('100%');
                            List.height('100%');
                            List.backgroundColor(Color.White);
                            List.listDirection(Axis.Vertical);
                            List.divider({
                                color: '#aabbcc',
                                strokeWidth: 1
                            });
                            if (!isInitialRender) {
                                List.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        {
                            const isLazyCreate = true;
                            const itemCreation = (elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                ListItem.create(deepRenderFunction, isLazyCreate);
                                if (!isInitialRender) {
                                    ListItem.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            };
                            const observedShallowRender = () => {
                                this.observeComponentCreation(itemCreation);
                                ListItem.pop();
                            };
                            const observedDeepRender = () => {
                                this.observeComponentCreation(itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Refresh.create({ refreshing: this.refreshing });
                                    Refresh.width('100%');
                                    Refresh.height('0.0000000001%');
                                    Refresh.backgroundColor("#ffec5e5e");
                                    Refresh.onRefreshing(() => {
                                        this.refreshing = true; // 进入刷新状态
                                        setTimeout(() => {
                                            this.refreshing = false;
                                        }, 500);
                                        this.httpRequest();
                                    });
                                    if (!isInitialRender) {
                                        Refresh.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Refresh.pop();
                                ListItem.pop();
                            };
                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                itemCreation(elmtId, isInitialRender);
                                this.updateFuncByElmtId.set(elmtId, itemCreation);
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Refresh.create({ refreshing: this.refreshing });
                                    Refresh.width('100%');
                                    Refresh.height('0.0000000001%');
                                    Refresh.backgroundColor("#ffec5e5e");
                                    Refresh.onRefreshing(() => {
                                        this.refreshing = true; // 进入刷新状态
                                        setTimeout(() => {
                                            this.refreshing = false;
                                        }, 500);
                                        this.httpRequest();
                                    });
                                    if (!isInitialRender) {
                                        Refresh.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Refresh.pop();
                                ListItem.pop();
                            };
                            if (isLazyCreate) {
                                observedShallowRender();
                            }
                            else {
                                observedDeepRender();
                            }
                        }
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            ForEach.create();
                            const forEachItemGenFunction = (_item, index) => {
                                const item = _item;
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    If.create();
                                    if (!index) {
                                        this.ifElseBranchUpdateFunction(0, () => {
                                            {
                                                const isLazyCreate = true;
                                                const itemCreation = (elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    ListItem.create(deepRenderFunction, isLazyCreate);
                                                    if (!isInitialRender) {
                                                        ListItem.pop();
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                };
                                                const observedShallowRender = () => {
                                                    this.observeComponentCreation(itemCreation);
                                                    ListItem.pop();
                                                };
                                                const observedDeepRender = () => {
                                                    this.observeComponentCreation(itemCreation);
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Button.createWithChild({ type: ButtonType.Normal });
                                                        Button.backgroundColor(Color.White);
                                                        if (!isInitialRender) {
                                                            Button.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Row.create();
                                                        Row.height('9%');
                                                        if (!isInitialRender) {
                                                            Row.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('15%');
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Image.create({ "id": 16777233, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" });
                                                        Image.objectFit(ImageFit.ScaleDown);
                                                        Image.width('50%');
                                                        if (!isInitialRender) {
                                                            Image.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Column.pop();
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('85%');
                                                        Column.alignItems(HorizontalAlign.Start);
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(item);
                                                        Text.fontColor(Color.Black);
                                                        Text.maxLines(1);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    Row.pop();
                                                    Button.pop();
                                                    ListItem.pop();
                                                };
                                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                                    itemCreation(elmtId, isInitialRender);
                                                    this.updateFuncByElmtId.set(elmtId, itemCreation);
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Button.createWithChild({ type: ButtonType.Normal });
                                                        Button.backgroundColor(Color.White);
                                                        if (!isInitialRender) {
                                                            Button.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Row.create();
                                                        Row.height('9%');
                                                        if (!isInitialRender) {
                                                            Row.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('15%');
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Image.create({ "id": 16777233, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" });
                                                        Image.objectFit(ImageFit.ScaleDown);
                                                        Image.width('50%');
                                                        if (!isInitialRender) {
                                                            Image.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Column.pop();
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('85%');
                                                        Column.alignItems(HorizontalAlign.Start);
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(item);
                                                        Text.fontColor(Color.Black);
                                                        Text.maxLines(1);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    Row.pop();
                                                    Button.pop();
                                                    ListItem.pop();
                                                };
                                                if (isLazyCreate) {
                                                    observedShallowRender();
                                                }
                                                else {
                                                    observedDeepRender();
                                                }
                                            }
                                        });
                                    }
                                    else if (index < 4) {
                                        this.ifElseBranchUpdateFunction(1, () => {
                                            {
                                                const isLazyCreate = true;
                                                const itemCreation = (elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    ListItem.create(deepRenderFunction, isLazyCreate);
                                                    if (!isInitialRender) {
                                                        ListItem.pop();
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                };
                                                const observedShallowRender = () => {
                                                    this.observeComponentCreation(itemCreation);
                                                    ListItem.pop();
                                                };
                                                const observedDeepRender = () => {
                                                    this.observeComponentCreation(itemCreation);
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Button.createWithChild({ type: ButtonType.Normal });
                                                        Button.backgroundColor(Color.White);
                                                        if (!isInitialRender) {
                                                            Button.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Row.create();
                                                        Row.height('9%');
                                                        if (!isInitialRender) {
                                                            Row.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('15%');
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(index.toString());
                                                        Text.fontColor(Color.Red);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('85%');
                                                        Column.alignItems(HorizontalAlign.Start);
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(item);
                                                        Text.fontColor(Color.Black);
                                                        Text.maxLines(1);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    Row.pop();
                                                    Button.pop();
                                                    ListItem.pop();
                                                };
                                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                                    itemCreation(elmtId, isInitialRender);
                                                    this.updateFuncByElmtId.set(elmtId, itemCreation);
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Button.createWithChild({ type: ButtonType.Normal });
                                                        Button.backgroundColor(Color.White);
                                                        if (!isInitialRender) {
                                                            Button.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Row.create();
                                                        Row.height('9%');
                                                        if (!isInitialRender) {
                                                            Row.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('15%');
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(index.toString());
                                                        Text.fontColor(Color.Red);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('85%');
                                                        Column.alignItems(HorizontalAlign.Start);
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(item);
                                                        Text.fontColor(Color.Black);
                                                        Text.maxLines(1);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    Row.pop();
                                                    Button.pop();
                                                    ListItem.pop();
                                                };
                                                if (isLazyCreate) {
                                                    observedShallowRender();
                                                }
                                                else {
                                                    observedDeepRender();
                                                }
                                            }
                                        });
                                    }
                                    else {
                                        this.ifElseBranchUpdateFunction(2, () => {
                                            {
                                                const isLazyCreate = true;
                                                const itemCreation = (elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    ListItem.create(deepRenderFunction, isLazyCreate);
                                                    if (!isInitialRender) {
                                                        ListItem.pop();
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                };
                                                const observedShallowRender = () => {
                                                    this.observeComponentCreation(itemCreation);
                                                    ListItem.pop();
                                                };
                                                const observedDeepRender = () => {
                                                    this.observeComponentCreation(itemCreation);
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Button.createWithChild({ type: ButtonType.Normal });
                                                        Button.backgroundColor(Color.White);
                                                        if (!isInitialRender) {
                                                            Button.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Row.create();
                                                        Row.height('9%');
                                                        if (!isInitialRender) {
                                                            Row.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('15%');
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(index.toString());
                                                        Text.fontColor(Color.Black);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('85%');
                                                        Column.alignItems(HorizontalAlign.Start);
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(item);
                                                        Text.fontColor(Color.Black);
                                                        Text.maxLines(1);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    Row.pop();
                                                    Button.pop();
                                                    ListItem.pop();
                                                };
                                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                                    itemCreation(elmtId, isInitialRender);
                                                    this.updateFuncByElmtId.set(elmtId, itemCreation);
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Button.createWithChild({ type: ButtonType.Normal });
                                                        Button.backgroundColor(Color.White);
                                                        if (!isInitialRender) {
                                                            Button.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Row.create();
                                                        Row.height('9%');
                                                        if (!isInitialRender) {
                                                            Row.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('15%');
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(index.toString());
                                                        Text.fontColor(Color.Black);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Column.create();
                                                        Column.width('85%');
                                                        Column.alignItems(HorizontalAlign.Start);
                                                        if (!isInitialRender) {
                                                            Column.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        Text.create(item);
                                                        Text.fontColor(Color.Black);
                                                        Text.maxLines(1);
                                                        if (!isInitialRender) {
                                                            Text.pop();
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                    Text.pop();
                                                    Column.pop();
                                                    Row.pop();
                                                    Button.pop();
                                                    ListItem.pop();
                                                };
                                                if (isLazyCreate) {
                                                    observedShallowRender();
                                                }
                                                else {
                                                    observedDeepRender();
                                                }
                                            }
                                        });
                                    }
                                    if (!isInitialRender) {
                                        If.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                If.pop();
                            };
                            this.forEachUpdateFunction(elmtId, this.title, forEachItemGenFunction, undefined, true, false);
                            if (!isInitialRender) {
                                ForEach.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        ForEach.pop();
                        List.pop();
                        Row.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.TabBar1.call(this, "热榜", 2);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width('100%');
                            Column.height('100%');
                            Column.backgroundColor("#ffe8edf1");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create("只做了热榜");
                            Text.width("100%");
                            Text.height("100%");
                            Text.fontSize(50);
                            Text.textAlign(TextAlign.Center);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.TabBar1.call(this, "发现", 3);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width('100%');
                            Column.height('100%');
                            Column.backgroundColor("#ffe8edf1");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create("只做了热榜");
                            Text.width("100%");
                            Text.height("100%");
                            Text.fontSize(50);
                            Text.textAlign(TextAlign.Center);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.TabBar1.call(this, "福州", 4);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width('100%');
                            Column.height('100%');
                            Column.backgroundColor("#ffe8edf1");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create("只做了热榜");
                            Text.width("100%");
                            Text.height("100%");
                            Text.fontSize(50);
                            Text.textAlign(TextAlign.Center);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.TabBar1.call(this, "亚运会", 5);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width('100%');
                            Column.height('100%');
                            Column.backgroundColor("#ffe8edf1");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create("只做了热榜");
                            Text.width("100%");
                            Text.height("100%");
                            Text.fontSize(50);
                            Text.textAlign(TextAlign.Center);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.TabBar1.call(this, "视频", 6);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width('100%');
                            Column.height('100%');
                            Column.backgroundColor("#ffe8edf1");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create("只做了热榜");
                            Text.width("100%");
                            Text.height("100%");
                            Text.fontSize(50);
                            Text.textAlign(TextAlign.Center);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.TabBar1.call(this, "不知道", 7);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
                Tabs.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBar0.call(this, { "id": 16777224, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, { "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, '首页', 0);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width("100%");
                    Column.height("100%");
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor("#ffe8edf1");
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Blank.create();
                    if (!isInitialRender) {
                        Blank.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Blank.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Video.create({
                        src: "http://chenyv.gitee.io/webprogramming/homeworks/html/media/movie.ogg",
                        previewUri: "https://www.arkui.club/img/test.png",
                        controller: this.videoController // 设置控制器
                    });
                    Video.width(300);
                    Video.height(210);
                    if (!isInitialRender) {
                        Video.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create({ space: 10 });
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithLabel("开始播放");
                    Button.onClick(() => {
                        this.videoController.start();
                    });
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Button.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithLabel("暂停播放");
                    Button.onClick(() => {
                        this.videoController.pause();
                    });
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Button.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithLabel("继续播放");
                    Button.onClick(() => {
                        this.videoController.start();
                    });
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Button.pop();
                Row.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithLabel("全屏播放");
                    Button.onClick(() => {
                        this.videoController.requestFullscreen(true);
                    });
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Button.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithLabel("退出全屏");
                    Button.onClick(() => {
                        this.videoController.exitFullscreen();
                    });
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Button.pop();
                Row.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Blank.create();
                    if (!isInitialRender) {
                        Blank.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Blank.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBar0.call(this, { "id": 16777234, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, { "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, '视频', 1);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor("#ffe8edf1");
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create("没做红包");
                    Text.width("100%");
                    Text.height("100%");
                    Text.fontSize(50);
                    Text.textAlign(TextAlign.Center);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBar0.call(this, { "id": 16777231, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, { "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, '', 2);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor("#ffe8edf1");
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create("没做好礼季");
                    Text.width("100%");
                    Text.height("100%");
                    Text.fontSize(50);
                    Text.textAlign(TextAlign.Center);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBar0.call(this, { "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, { "id": 16777230, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, '好礼季', 3);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor("#ffe8edf1");
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(' ');
                    Text.fontSize(100);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(' ');
                    Text.fontSize(20);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TextInput.create({ placeholder: '手机号/邮箱地址/账号名' });
                    TextInput.caretColor(Color.Blue);
                    TextInput.onChange((value) => {
                        //this.text = value
                    });
                    TextInput.height(50);
                    TextInput.width(330);
                    TextInput.fontSize(20);
                    if (!isInitialRender) {
                        TextInput.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TextInput.create({ placeholder: '密码' });
                    TextInput.caretColor(Color.Blue);
                    TextInput.onChange((value) => {
                        //this.text2 = value
                    });
                    TextInput.height(50);
                    TextInput.width(330);
                    TextInput.fontSize(20);
                    if (!isInitialRender) {
                        TextInput.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(' ');
                    Text.fontSize(20);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(' ');
                    Text.fontSize(20);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithLabel('登录', { type: ButtonType.Capsule, stateEffect: true });
                    Button.onClick(() => {
                        // 处理点击事件逻辑
                    });
                    Button.width('60%');
                    Button.height(30);
                    Button.fontSize(20);
                    Button.fontWeight(FontWeight.Medium);
                    Button.backgroundColor('#007DFF');
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Button.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithLabel('注册', { type: ButtonType.Capsule, stateEffect: true });
                    Button.onClick(() => {
                        // 处理点击事件逻辑
                    });
                    Button.width('60%');
                    Button.height(30);
                    Button.fontSize(20);
                    Button.fontWeight(FontWeight.Medium);
                    Button.backgroundColor('#ffd6d0d0');
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Button.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBar0.call(this, { "id": 16777222, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, { "id": 16777223, "type": 20000, params: [], "bundleName": "com.example.ui", "moduleName": "entry" }, '我的', 4);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
        Column.pop();
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
                    for (let index = 0; index < 30; index++) {
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
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new EnterMenu(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Index2.js.map