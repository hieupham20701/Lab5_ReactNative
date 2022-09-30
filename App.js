import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, Button } from 'react-native';

const products=[
  {
    id:1,
    name:"Ca nấu lẩu",
    shop:"Devan",
    img:require("./assets/ca_nau_lau.png")
  },
  {
    id:2,
    name:"1 Kg Khô gà bơ tỏi",
    shop:"LTD Food",
    img:require("./assets/ga_bo_toi.png")
  },
  {
    id:3,
    name:"Xe cần cẩu đa năng",
    shop:"Thế giới đồ chơi",
    img: require("./assets/xacancau.png")
  },
  {
    id:4,
    name:"Đồ chơi dạng mô hình",
    shop:"Thế giới đồ chơi",
    img: require("./assets/do_choi_dang_mo_hinh.png")
  },
  {
    id:5,
    name:"Lãnh đạo giản đơn",
    shop:"Minh Long Book",
    img: require("./assets/lanh_dao_gian_don.png")
  },
  {
    id:6,
    name:"Hiểu lòng con trẻ",
    shop:"Minh Long Book",
    img: require("./assets/hieu_long_con_tre.png")
  },
  {
    id:7,
    name:"Donal Trump thiên tài lãnh đạo",
    shop:"ATC Book",
    img: require("./assets/trump1.png")
  }
]

const Item = ({ item, onPress, backgroundColor, textColor})=>(
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.rowLayout}>
      <Image source={item.img}/>
      <View style={{flexDirection: "column", flexWrap:"wrap"}}>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.title, textColor]}>{item.name}</Text>

        </View>
        <Text style={[styles.shop, textColor]}>Shop: {item.shop}</Text>
      </View>
      <TouchableOpacity
              style={[styles.chatBtn]}
              // onPress={() => navigate('HomeScreen')}
              underlayColor='#fff'>
              <Text style={[styles.textBtn]}>Chat</Text>
          </TouchableOpacity>
    </View>

  </TouchableOpacity>
)

export default function App() {

  const [selectedId, setSelectedId]= useState(null);
  const renderItem = ({item})=>{
    const backgroundColor = item.id === selectedId ? "powderblue" : "skyblue";
    const color = item.id === selectedId ? 'white' : 'black';
    return( 
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />);
  }
  return (
      <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    marginLeft:10,
    // paddingRight:10,
    flex:1,
    flexWrap:'wrap'
    // marginRight:
  },
  shop:{
    fontSize: 15,
    margin:10,
  },
  rowLayout:{
    flexDirection: "row", 
    flexWrap:"wrap",
  },
  img:{
      
  },
  chatBtn:{
    backgroundColor:"red",
    // padding:10
    position: 'absolute',
    left:270
  },
  textBtn:{
    fontSize:15,
    color:'#fff',
    fontWeight:"bold",
    textAlign:'center',
    padding:20
  }
});
