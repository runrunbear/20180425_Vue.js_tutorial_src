# ルートコンストラクタオプション

### routes

- 型: `Array<RouteConfig>`

  `RouteConfig` の型宣言:

  ``` js
  declare type RouteConfig = {
    path: string;
    component?: Component;
    name?: string; // 名前付きルート用
    components?: { [name: string]: Component }; // 名前付き view 用
    redirect?: string | Location | Function;
    alias?: string | Array<string>;
    children?: Array<RouteConfig>; // ネストされたルート用
    beforeEnter?: (route: Route, redirect: Function, next: Function) => void;
    meta?: any;
  }
  ```

### mode

- 型: `string`

- デフォルト: `"hash" (in browser) | "abstract" (in Node.js)`

- 利用可能な値: `"hash" | "history" | "abstract"`

  ルーターモードの設定。

  - `hash`: ルーティングに URL hash を使います。HTML5 History API をサポートしていないブラウザ含めて、全ての Vue がサポートしているブラウザで動作します。

  - `history`: HTML5 History API とサーバーの設定が必要です。[HTML5 History モード](../essentials/history-mode.md) をご参照ください。

  - `abstract`: 全ての JavaScript の環境で動作します。 e.g. Node.js を使ったサーバーサイド。 **もしブラウザの API が存在しない場合、ルーターは自動的にこのモードに強制されます。**

### base

- 型: `string`

- デフォルト: `"/"`

  アプリケーションのベース URL です。例えば、 `/app/` 配下で完全なシングルページアプリケーションを提供する場合、 `base` は `"/app/"` の値が使われるべきです。

### linkActiveClass

- 型: `string`

- デフォルト: `"router-link-active"`

  グローバルに設定される `<router-link>` のデフォルトのアクティブクラスです。こちらの [router-link](router-link.md) もご参照ください。

### scrollBehavior

- 型: `Function`

  シグネチャ:

  ```
  (
    to: Route,
    from: Route,
    savedPosition?: { x: number, y: number }
  ) => { x: number, y: number } | { selector: string } | ?{}
  ```

  より詳細ついては [スクロールの振る舞い](../advanced/scroll-behavior.md) をご参照ください。
