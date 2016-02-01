"use strict";

const app = require('app');  // アプリケーション作成用モジュールをロード
const BrowserWindow = require('browser-window');

let mainWindow = null;

// 全てのウィンドウが閉じたらアプリケーションを終了します。
app.on('window-all-closed', () => {
  app.quit();
});

// アプリケーションの初期化が完了したら呼び出されます。
app.on('ready', () => {
  // メインウィンドウを作成します。
  mainWindow = new BrowserWindow({width: 600, height: 400});

  // メインウィンドウに表示するURLを指定します。
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
