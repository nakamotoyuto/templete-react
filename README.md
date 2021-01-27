# react redux(redux toolkit)を使ったテンプレート

## 開発環境

- node v12.13.1
- npm v6.13.4

### install

```
$ npm ci
```

### usage

```
$ npm run start
```

### build

```
$ npm run build
```

### test

```
$npm t
```

### 構成

react / redux-tool-kit を使用

react v16.13.1,
reduxjs/toolkit v1.3.6

![redux-tool-kit](https://user-images.githubusercontent.com/47517709/90846697-ad023980-e3a3-11ea-91cd-d2f6350c95df.png)

```
─── src
    ├── test(テストファイル置き場)
    ├── img (画像置き場)
    │   └── common
    │       └── favicon.png
    ├── pug (render先を指定)
    │   └── index.pug
    ├── ts (react外でjsを使うときに使用)
    │   └── app.ts
    ├── tsconfig.json
    └── tsx
        ├── index.tsx (エントリーポイント)
        ├── stores
        │   ├── index.ts (slicesディレクトリで作られたSliceを結合する)
        │   └── slices (このディレクトリ下で各sliceファイルを扱う)
        │       └── userSlice.ts
        ├── style（各page,componentのcssを切り分けたい時に使用)
        │   ├── GlobalStyle.tsx
        │   ├── components
        │   │   ├── atoms
        │   │   │   └── Button.tsx
        │   │   └── block
        │   │       ├── Footer.tsx
        │   │       └── Header.tsx
        │   ├── pages
        │   │   ├── Login.tsx
        │   │   └── Top.tsx
        │   ├── resetStyle.tsx
        │   └── variables.tsx
        ├── utils(定数などを管理)
        │   └── constants.tsx
        └── views
            ├── components（使い回しのできる要素）
            │   ├── atoms(最小単位のcomponent)
            │   │   └── Button.tsx
            │   ├── block(atomsを組み合わせたり、atomsでは管理しきれないcomponent)
            │   │   ├── Footer.tsx
            │   │   └── Header.tsx
            │   └── modules(機能を持ったcomponent)
            │       └── ScrollTop.tsx
            └── pages（各ページの呼び出し先）
                ├── login
                │   └── Login.tsx
                └── top
                    ├── Top.tsx
                    └── TopList.tsx（そのページでしか使われないreact-componentは同階層に設置）
```

### 解説

https://qiita.com/Sotq_17/items/7c7ab9880597336b3ee5

# React もくもく会のご案内

React もくもく会開催します！

まずはみんなで同じものを作りたいと思います。
（いきなりそれぞれもくもく作業…というのはハードルが高いと思うので）

今回は react + redux (toolkit) の基本を確認する
また、みんなで見せ合うことでより良い書き方を発見する といった会にしたいと思っております。

## もくもく会の流れ

日程：未定（平日 17:30 ~ 18:30)を想定
進め方：実装（30 分) ＋ レビュー（30 分)

- 実装
  個別にブランチを切って、以下「課題」の実装をします。
  とりあえず３０分間もくもく作業します（この際いつでも質問 OK です！）
  終わったらそれぞれブランチに push！

- レビュー
  それぞれのコードをみながら、軽くディスカッション
  書き方の違いを確認し、良い点や改善点などを話し合いましょう！

* 時間がオーバーすれば後日にするなど、調整ができればと思います。

### 課題

ログイン画面と一覧画面を作る

#### API

以下コマンドを叩くと、5000 ポートでモックサーバーが立ち上がります。

```
npm run json-server
```

以下２種類のエンドポイントを用意しております

```
<!-- login用 -->

  http://localhost:5000/login


<!-- 一覧表示用 -->
  http://localhost:5000/users

```

#### ログイン画面

https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/325594/95903f88-e309-21eb-cf13-2b913f6e4088.png

■ 実装内容
【必須】

- username, password を入力し、login 用の API を叩く
- 200 が返ってきたら TOP に遷移する

【できれば】

- バリデーションを入れる（必須のみ？）

* フォーム用のライブラリを入れていただいても OK です！

#### トップ画面

https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/325594/57f3f5ee-3450-a3ef-b12f-bc7fbbca38dc.png

■ 実装内容
【必須】

- トップページにアクセスしたら、Top 用の API を叩く
- 返ってきた Json を Redux に保持する
- よしなに表示する（適当ですみません）

【できれば】

- API 取得時にローディングを入れる
- 内容の編集を可能にする？など
