// import { Icon } from '@rneui/themed';
import { View, Pressable } from 'react-native-web';

const Home = ()=>{

    <View style={{display:'flex', border:'10px solid black', width:'100%'}}>
        {/* <Text>Hello</Text> */}
    {/* <ScrollView contentContainerStyle={{scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  }}}> */}
    <View style={{flex:1, border:'2px solid black'}}>
        <Pressable onPress={()=>{navigation.navigate('Device')}}>
            <Image source={require('./assets/Light_Switch_on.jpg')} style={{width: 400, height: 400}}/>
        </Pressable>
        
    </View>
    <View style={{flex:1, border:'2px solid black'}}>
        <Pressable onPress={()=>{navigation.navigate('Device')}}>
            <Image source={require('./assets/Light_Switch_on.jpg')} style={{width: 400, height: 400}}/>
        </Pressable>
    </View>
    <View style={{flex:1, border:'2px solid black'}}>
        <Pressable onPress={()=>{navigation.navigate('Device')}}>
            <Image source={require('./assets/Light_Switch_on.jpg')} style={{width: 400, height: 400}}/>
        </Pressable>
    </View>
    {/* </ScrollView> */}
    </View>
}

export default Home;