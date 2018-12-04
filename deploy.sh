#!bin/bash

# appのビルド
cd ./app
npm run build

# ビルドミスなら終了
if [ $? = '1' ]; then
    exit 1;
fi

# 結果をサーバへコピー
\cp -fr ./dist/* ../server/app/

# サーバ側へ移動
cd ../server

# サーバ起動
npm start

# サーバ終了したら元の場所帰る
cd ../

exit 0;
