# JavaScriptで学ぶオブジェクト指向プログラミング

このリポジトリは #p4d のJavaScriptハンズオンで、実際に手を動かしながら
オブジェクト指向を学ぶための教材です。

Titanium や PhoneGap, enchant.js などはデザイナーが身につければ
一人でプロダクトを作ることができる強力なツールだと思いますが
オブジェクト指向を理解することで、それらを効率的に学ぶことができます。

基本的に以下の手順に沿ってやっていただければ独習も可能ですが
全く説明を入れていませんので、内容を理解できる方にメンターをしてもらいながら
すすめることをお勧めします。

## 準備

gitが使える方は、好きなディレクトリにこのリポジトリをcloneしてください。

    $ git clone git://github.com/prog4designer/js-hands-on-1.git
    $ cd js-hands-on-1

gitが準備できていない方は https://github.com/prog4designer/js-hands-on-1/tags から
step0.zip から step4.zip までダウンロードして好きなディレクトリに解凍してください。


## ルール

編集していいファイルは script.js のみです。  
index.htmlも触らずに進めてください。


## STEP0

    $ git checkout step0

以下の仕様を満たすように script.js を編集してください。

1. 'button1', 'button2'という名前のボタンを２つ置いてください。
2. それぞれクリックするとconsoleに以下の文言を出力するようにしてください。  
   「button1 は 1 回クリックされました」
3. それぞれのボタンごとに独立してカウントするようにしてください。


## STEP1

    $ git checkout step1

STEP0で作った script.js をオブジェクト指向にしてください。

1. Button というコンストラクタを作り、その中でinput要素の生成・DOMへの追加とカウンタの初期化をおこなってください。
2. Button オブジェクトのprototypeとしてcountUpメソッドを定義し、その中でカウントアップとconsoleへの出力を行なってください。
3. ボタンをクリックされた時にそれぞれのcountUpメソッドを呼ぶようにしてください。


## STEP2

    $ git checkout step2

カウントダウン機能とリセット機能を実装してください。

1. Button オブジェクトのprototypeにcountDown, resetメソッドを実装してください。
2. 'Count Down' ボタンを追加し、クリックすると button1, button2 両方のcountDown()メソッドを呼ぶようにしてください。
3. 'Reset' ボタンを追加し、クリックすると button1, button2 両方のresetメソッドを呼ぶようにしてください。

