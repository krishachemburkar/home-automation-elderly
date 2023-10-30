import { useState } from "react";
import { Pressable } from "react-native";
import { View } from 'react-native-web';
import { Image } from 'react-native-web';
function Device(){
    var [image, setImage] = useState('Light_Switch_off')
    var [temp, setTemp] = useState('hi')
    // const icon = this.props.active? require('./assets/Light_Switch_on'): require('./assets/Light_Switch_off');
  
    function handleImageChange(){
      if (image==='Light_Switch_off'){
        setImage(image='Light_Switch_on')
        console.log(image);
      }else{
        setImage(image='Light_Switch_off')
        console.log(image);
      }
      // if (temp==='hi'){
      //   setTemp(temp='Bye')
      //   console.log(temp);
      // }else{
      //   setTemp(temp='hi')
      //   console.log(temp);
      // }
    }
  
    return (
      <View style={{display:'flex', border:'1px solid red', width:'100%'}}>
        <View style={{flex:1, border:'2px solid blue'}}>
          Device
        </View>
        
        <View style={{flex:11, border:'2px solid blue'}} >
        <Pressable onPress={handleImageChange}>
          <Image source={require('./assets/'+image+'.jpg')} style={{width: 400, height: 400}}/>
          {/* <Text>hi</Text> */}
          </Pressable>
           {/* <Image source={re} style={{width: 400, height: 400}} />; */}
        </View>
        
        <View style={{flex:1, border:'2px solid blue'}}>
          {/* <Text onPress={()=>{console.log('hello everynyan')}}>Nav Bar</Text> */}
          <Icon name='rowing'
        onPress={() => navigation.navigate('Home')}
      />
          {/* <Home /> */}
        </View>
        
      </View>
  
    );
  
}

export default Device;