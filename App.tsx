// importする場所
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
// フックをimport useState = Hook
import React, {useState} from "react";
// 画像をインポート｡このときモジュールを指定する
import logo1 from "./assets/egg01.png";
import logo2 from './assets/egg02.png' ;
import logo3 from "./assets/egg03.png" ;



export default function App() {

  // カウントに関する変数の宣言
  const [count,setCount] = useState(100);

  // 配列に画像を入れた
  let imgArray = [logo1, logo2, logo3];
  // 画像を表示する変数
  let eggImage = imgArray[0];

// 画像の表示
  if(count<100 && count >50){
    eggImage = imgArray[0]
  } else if(count<50 && count>0){
    eggImage = imgArray[1]
  } else if(count==0){
    eggImage = imgArray[2]
  };

  // テキストを表示する変数
  let countLabel;

  // テキストの表示
  if(count==75){
    countLabel = "まだまだ!"
  }else if(count==50){
    countLabel = "えっっ"
  }else if(count==25){
    countLabel = "あっっ!!"
  } else if(count==0){
    countLabel = "割れたよ!"
  } else{
    countLabel = count
  };

// ここからUI
  return (
    <View style={styles.container}>
      <View style={styles.CountContainer}>
        <Text style={styles.CountText}>{countLabel}</Text>
      </View>

      <Pressable onPress={() => setCount(count - 1)}>
        <Image source={eggImage} style={styles.eggImage} />
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  CountContainer: {
    width: 400,
    height: 150,
    position: "absolute",
    top: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
  },
  CountText: { color: "#FFFFFF", fontSize: 40 },
  textLabel: {
    width: 360,
    height: 70,
    position: "absolute",
    top: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  eggImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
    resizeMode: "contain",
  },
  instructions: {
    color: "#195",
    fontSize: 18,
    marginHorizontal: 15,
  },
});
