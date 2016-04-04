# WebP画像を作る君

## 開発中の紹介ビデオ

https://youtu.be/eAbopb5bvas

## 動作環境

- Windows
- OS X

## 公開したら

[開発者のTwitter](https://twitter.com/clockmaker)をチェックくださいませ。

## 開発者向け情報

ソースファイルから編集する場合は、`src`フォルダーを参照ください。ビルド手順は`src`フォルダー内の`ReadMe.md`ファイルに記載しています。

[ビルド手順](./src/ReadMe.md)


## ビルドコマンド

```
electron-packager ./src main --platform=darwin,win32 --arch=x64 --version=0.36.1
```