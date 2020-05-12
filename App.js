import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions} from 'react-native';
import {AntDesign,Entypo,Ionicons} from '@expo/vector-icons'
import Swiper from 'react-native-swiper'
import Block from './components/Block'
import { LinearGradient } from 'expo-linear-gradient';

var {height, width } = Dimensions.get('window');
const gray = "#91A1BD"
export default function App() {
  
const NeuMorph = ({children,size,style}) => {
  return(
  <View style ={styles.topShadow}>
    <View style={styles.bottomShadow}>
      <View style={[styles.inner,{width:size || 40, height:size||40,borderRadius:10},
      style
      ]}>
        {children}
      </View>
    </View>
  </View>
  );
};

  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf:'stretch'}}>
        <View style={{marginHorizontal:0,marginTop:10}}>
          <View style ={styles.topContainer}>
            <NeuMorph style={{marginHorizontal:20}}>
            <Image source={require('../DtApp/assets/logo.png')} style = {{width:35,height:35}} />
            </NeuMorph >
            <View>
              <Text style={styles.playing}>Dashboard</Text>
            </View>
            <NeuMorph style={{marginHorizontal:20}}>
            <Entypo name="menu" size={24} color={"#000000"} />
            </NeuMorph>
          </View>
        </View>
        <View style={{marginHorizontal:5}}>
          <View style ={styles.swiper}>
         <Swiper style={{height:width/2}}  showsButtons={false} autoplay={true} autoplayTimeout={2}  showsPagination={true} > 
   <View style={styles.swiperItemContainer}>
   <NeuMorph size={220}>

           <Image source={require('../DtApp/assets/dt1.jpg')}  style = {styles.swiperItem}/>
           </NeuMorph>
  
   </View>
   <View style={styles.swiperItemContainer}>
   <NeuMorph size={220}>

           <Image source={require('../DtApp/assets/dt2.jpg')}  style = {styles.swiperItem}/>
           </NeuMorph>
  
   </View>
   <View style={styles.swiperItemContainer}>
   <NeuMorph size={220}>

           <Image source={require('../DtApp/assets/dt3.jpg')}  style = {styles.swiperItem}/>
           </NeuMorph>
  
   </View>
   <View style={styles.swiperItemContainer}>
   <NeuMorph size={220}>

           <Image source={require('../DtApp/assets/dt4.jpg')}  style = {styles.swiperItem}/>
           </NeuMorph>
  
   </View>
                </Swiper>

          </View>
        </View>
        <Block padding={10}>
          <Block direction="row" paddingVertical={10}>
          <NeuMorph style={{height:100,width:(width/2) -20}}>
              <Image source={require('../DtApp/assets/s1.png')}  style = {styles.menuImage}/>
              <Text style={styles.menuText}>My Profile</Text>

            </NeuMorph>
            <Block width={10} />
            <NeuMorph style={{height:100,width:(width/2) -20 }}>
            <Image source={require('../DtApp/assets/s2.png')}  style = {styles.menuImage}/>
              <Text style={styles.menuText}>My Leaves</Text>
            </NeuMorph>
          </Block>
        </Block>
        <Block padding={10}>
          <Block direction="row" paddingVertical={10}>
          <NeuMorph style={{height:100,width:(width/2) -20 }}>
          <Image source={require('../DtApp/assets/s3.png')}  style = {{  flex: 1, width: 20, height: 20, resizeMode: 'contain'}}/>
              <Text style={styles.menuText}>Holidays</Text>
            </NeuMorph>
            <Block width={10} />
            <NeuMorph style={{height:100,width:(width/2) -20 }}>
            <Image source={require('../DtApp/assets/s4.png')}  style = {{  flex: 1, width: 20, height: 20, resizeMode: 'contain'}}/>
              <Text style={styles.menuText}>Employee</Text>
            {/* <LinearGradient 
   style={styles.gradient,{height:100,width:(width/2) -20 ,borderRadius : 10}} 
   locations={[0, 1.0]} 
   colors={['#fdfbfb', '#ebedee']}
   style={{backgroundColor:"#000",height:100,width:(width/2) -20 ,borderRadius : 10 }}
 /> */}
            </NeuMorph>
          </Block>
        </Block>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: 'center',
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:"#AFEEEE",
  }, inner:{
    backgroundColor:"#DEE9F7",
    alignItems:'center',
    justifyContent:'center',
    borderColor:"#E2ECFD",
    borderWidth:1
  },
  topShadow:{
    shadowOffset:{
      width:-6,
      height:-6
    },
    shadowOpacity:1,
    shadowRadius:6,
    shadowColor:"#FBFFFF"
  },
  bottomShadow:{
    shadowOffset:{
      width:6,
      height:6
    },
    shadowOpacity:1,
    shadowRadius:6,
    shadowColor:"#B7C4DD"
  },
  playing:{
    color:"#333333",
    fontWeight:'800',
    fontSize:24
  },
 imageBanner: {
    height:width/2,
    width:width-40,
    borderRadius:10,
    marginHorizontal:20
  }, swiper:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'flex-start',
    height:300,
    marginTop:0,
  },image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
},swiperItemContainer:{
  marginVertical:32,
  alignItems:'center'
},
swiperItem:{
  width: width - 15,
  height: 220,
    borderRadius:10,
    borderColor:"#DEE9FD",
    borderWidth:5
},
menuImage:{
  flex: 1,
  width: 27,
  height: 27,
  resizeMode: 'contain'
},menuText:{
  color:"#333333",
  fontWeight:'600',
  fontSize:16,
  alignContent:'center',
  justifyContent:'center',
  marginBottom:10
}

});
