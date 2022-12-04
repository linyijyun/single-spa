import { registerApplication, start } from "single-spa";

// registerApplication => 註冊微前端應用，接受四個參數
//   1.name: 字符串類型，微前端應用名稱"@組織名稱/應用名稱"
//   2.app: 函數類型，返回Promise,通過systemjs引用打包好的微前端應用（umd）
//   3.activeWhen: 路由匹配即啟動應用
//   4.customProps 傳遞給子應用的參數

registerApplication(
  { // 註冊應用
    name: "@single-spa/welcome",// 應用名稱
    app: () =>
      System.import(
        "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
      ),
    activeWhen: location => location.pathname == '/welcome',
  }
);

registerApplication(
  { // 註冊應用
    name: "@l/react",// 應用名稱,   It's recommended to use the application's package.json name field
    app: () =>
      System.import('@l/react'),
    activeWhen: ["/react"], // url造訪react路徑的時候，加載System.import('@l/react')
    customProps: { a: 1 } // 參數傳遞
  }
);

registerApplication(
  { // 註冊應用
    name: "@l/vue-app",// 應用名稱
    app: () =>
      System.import('@l/vue-app'),
    activeWhen: ["/vue"], // url造訪vue路徑的時候，加載System.import('@l/vue-app')
    customProps: { a: 1 } // 參數傳遞
  }
);

registerApplication(
  { // 註冊應用
    name: "angular-app",// 應用名稱
    app: () =>
      System.import('angular-app'),
    activeWhen: ["/angular"], // url造訪angular路徑的時候，加載System.import('angular-app')
    customProps: { a: 1 } // 參數傳遞
  }
);

// registerApplication({
//   name: "@n/navbar",
//   app: () => System.import("@n/navbar"),
//   activeWhen: ["/"]
// });

// single-spa start啟用路徑這個方法必須在這個root-config配置文件中使用
// 這時應用才會被真正掛載。在start被調用之前，應用先被下載，但不會初始化/掛載/卸載
start({ // 啟動路徑
  urlRerouteOnly: true,
});
