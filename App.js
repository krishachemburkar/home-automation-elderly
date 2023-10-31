// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Pressable,
//   Button,
//   DeviceEventEmitter,
// } from "react-native";
// import { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { Icon } from "@rneui/themed";
// import axios from "axios";

// const Stack = createStackNavigator();

// const styles_device = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white", // Set the background color of the entire container
//   },
//   header: {
//     flex: 1,
//     backgroundColor: "#76bdd5", // Set the blue background color for the header
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   headerText: {
//     fontWeight: "bold",
//     color: "black", // Set the text color for the header
//     fontSize: 20,
//   },
//   content: {
//     flex: 11,
//     alignItems: "center",
//   },
//   image: {
//     width: 300,
//     height: 300,
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontWeight: "bold",
//     backgroundColor: "#76bdd5",
//     padding: 15,
//     borderRadius: 20,
//   },
//   iconContainer: {
//     flex: 2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// // const styles = StyleSheet.create({
// //   gridContainer: {
// //     flexDirection: 'row', // Horizontal layout
// //     flexWrap: 'wrap', // Wrap items to next line when they don't fit
// //   },
// //   gridItem: {
// //     width: '50%', // Three columns, adjust as needed for your layout
// //     // flex:1,
// //     padding: 0,
// //     // margin: '1px',
// //     // borderWidth: 1,
// //     // borderColor: '#ddd',
// //     borderRadius: 20,
// //     overflow: 'hidden'
// //   },
// //   headerArea: {
// //     // alignItems:'center'

// //     fontWeight: "bold",
// //     color: "Black"
// //   }
// // });

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F5F5',
// //   },
// //   headerContainer: {
// //     backgroundColor: 'blue',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 10,
// //   },
// //   headerText: {
// //     fontWeight: 'bold',
// //     color: 'white', // Text color
// //   },
// //   gridContainer: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'space-between',
// //     padding: 10,
// //   },
// //   gridItem: {
// //     flexBasis: '45%', // Adjust as needed to control spacing between items
// //     marginVertical: 10,
// //   },
// //   image: {
// //     width: '100%', // Make the image responsive
// //     aspectRatio: 1, // Maintain the original aspect ratio
// //     borderRadius: 10, // Add rounded corners
// //   },
// // });

// const styles = {
//   header: {},
//   headerText: {
//     fontWeight: "bold",
//     color: "black",
//     fontSize: 20,
//   },
//   image: {
//     width: "30%",
//     height: "30%", // Make the image responsive
//   },
// };

// function HomeScreen({ navigation, route }) {
//   // useEffect(()=>{

//   // })
//   console.log(route);

//   var [fanState, setFanState] = useState(0);
//   var [lightState, setLightState] = useState(0);
//   useEffect(() => {
//     if (route.params !== undefined) {
//       const dataReceived = route.params.data;
//       switch (dataReceived.device_name) {
//         case "Light":
//           // if(dataReceived.state==null){
//           //   setLightState(0);
//           // }else{
//           setLightState(dataReceived.state);
//           // }
//           break;

//         case "Fan":
//           // if(dataReceived.state==null){
//           //   setFanState(0);
//           // }else{
//           setFanState(dataReceived.state);
//           // }
//           break;
//         default:
//           break;
//       }
//     }
//     console.log("current light state", lightState);
//     console.log("current fan state", fanState);
//   }, [route.params]);

//   return (
//     <View style={{ display: "flex", backgroundColor: "#F5F5F5" }}>
//       <View
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 15,
//           // backgroundColor: '#F5F5F5',
//           backgroundColor: "#76bdd5",
//         }}
//       >
//         <Text style={styles.headerText}>App Name</Text>
//       </View>

//       <View
//         style={{
//           flex: 1,
//           flexDirection: "row",
//           borderWidth: 1,
//           borderColor: "red",
//         }}
//       >
//         <View
//           id="grid-item-1"
//           style={{
//             flex: 1,
//             margin: 10,
//             height: 100,
//             backgroundColor: "lightblue", // Blue shade background
//             borderRadius: 10,
//           }}
//         >
//           <Pressable
//             onPress={() =>
//               navigation.navigate("Device", {
//                 data: {
//                   device_name: "Light",
//                   images: ["./assets/off.png", "./assets/on.png"],
//                   states: ["OFF", "ON"],
//                   current_state: lightState,
//                 },
//               })
//             }
//           >
//             <Image
//               source={require("./assets/bulbo.png")}
//               style={{
//                 borderWidth: 1,
//                 borderColor: "red",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//           </Pressable>
//         </View>
//         <View
//           id="grid-item-2"
//           style={{
//             flex: 1,
//             margin: 10,
//             height: 100,
//             backgroundColor: "lightblue", // Blue shade background
//             borderRadius: 10, // Rounded corners
//             // alignItems: 'center', // Center items horizontally
//             // justifyContent: 'center', // Center items vertically
//           }}
//         >
//           <Pressable
//             onPress={() =>
//               navigation.navigate("Device", {
//                 data: {
//                   device_name: "Fan",
//                   images: [
//                     "./assets/1.png",
//                     "./assets/2.png",
//                     "./assets/3.png",
//                     "./assets/4.png",
//                   ],
//                   states: ["1", "2", "3", "4"],
//                   current_state: fanState,
//                 },
//               })
//             }
//           >
//             <Image
//               source={require("./assets/fan.png")}
//               style={{
//                 borderWidth: 1,
//                 borderColor: "red",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//           </Pressable>
//         </View>
//       </View>

//       <View
//         style={{
//           flex: 2,
//           flexDirection: "row",
//           flexWrap: "wrap",
//           justifyContent: "space-between",
//           alignItems: "center",
//           borderWidth: 1,
//           borderColor: "red",
//         }}
//       >
//         <View
//           id="grid-item-3"
//           style={{
//             flex: 1,
//             margin: 10,
//             height: 100,
//             backgroundColor: "lightblue", // Blue shade background
//             borderRadius: 10, // Rounded corners
//             // alignItems: 'center', // Center items horizontally
//             // justifyContent: 'center', // Center items vertically
//           }}
//         >
//           <Pressable
//           // onPress={() =>
//           //   navigation.navigate('Device', {
//           //     data: {
//           //       device_name: 'fan',
//           //       images: ['1.svg', '2.svg', '3.svg', '4.svg'],
//           //       states: ['1', '2', '3', '4'],
//           //       current_state: fanState,
//           //     },
//           //   })
//           // }
//           >
//             <Image
//               source={require("./assets/bulbo.png")}
//               style={{
//                 borderWidth: 1,
//                 borderColor: "red",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//           </Pressable>
//         </View>
//         <View
//           id="grid-item-4"
//           style={[
//             {
//               flex: 1,
//               margin: 10,
//               height: 100,
//               backgroundColor: "lightblue", // Blue shade background
//               borderRadius: 10, // Rounded corners
//               // alignItems: 'center', // Center items horizontally
//               // justifyContent: 'center', // Center items vertically
//             },
//             { borderWidth: 1, borderColor: "black" },
//           ]}
//         >
//           <Pressable
//           // onPress={() =>
//           //   navigation.navigate('Device', {
//           //     data: {
//           //       device_name: 'fan',
//           //       images: ['1.svg', '2.svg', '3.svg', '4.svg'],
//           //       states: ['1', '2', '3', '4'],
//           //       current_state: fanState,
//           //     },
//           //   })
//           // }
//           >
//             <Image
//               source={require("./assets/fan.png")}
//               style={{
//                 borderWidth: 1,
//                 borderColor: "red",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />
//         {/* <Stack.Screen name="Device" component={DeviceScreen} options={{headerShown: false}}/>  */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// // function DeviceScreen({navigation, route}){

// //   var displayText;
// //   const dataReceived = route.params.data;
// //   // device_state = dataReceived.current_state;
// //   var [device_state, setDeviceState] = useState(dataReceived.current_state);
// //   var [displayState, setDisplayState] = useState(dataReceived.states[device_state]);
// //   var [device_img, setDeviceImage] = useState(dataReceived.images[device_state]);

// //   if(dataReceived.device_name == 'Light'){
// //     displayText = "LIGHT: "+ displayState;
// //   }else if(dataReceived.device_name == 'Fan'){
// //     displayText = "SPEED: " + displayState;
// //   }

// //   function selectDevice(){
// //       switch(dataReceived.device_name){
// //     case "Light":
// //       handleImageLight();
// //       break;
// //     case "Fan":
// //       handleImageFan();
// //       break;
// //     default:
// //       break;
// //     }
// //     updateDeviceState(device_state)
// //   }

// //   const updateDeviceState = async (device_state) => {
// //     try {
// //       const response = await axios.post('http://localhost:8080/device_state', {
// //         name:dataReceived.device_name,
// //         state: device_state, // 0 for off, 1 for on
// //       });
// //       console.log(response.data.message);
// //     } catch (error) {
// //       console.error('Error updating light state:', error);
// //     }
// //   };

// //   function handleImageFan(){
// //     if (device_state===0){
// //       setDeviceState(device_state = 1)
// //       // device_state = 1
// //       // device_state = 1;
// //       // displayText = "SPEED:" + displayState
// //       console.log('state changed to',device_state);

// //       setDeviceImage(device_img = dataReceived.images[device_state])
// //       setDisplayState(dataReceived.states[device_state])

// //     }else if(device_state===1){
// //       setDeviceState(device_state = 2)
// //       // device_state = 2
// //       // device_state = 2;
// //       console.log(device_state);
// //       // console.log(image);
// //       setDeviceImage(device_img = dataReceived.images[device_state])
// //       setDisplayState(dataReceived.states[device_state])
// //     }else if(device_state===2){
// //       setDeviceState(device_state = 3)
// //       // device_state = 3
// //       // device_state = 3;
// //       console.log(device_state);
// //       // console.log(image);
// //       setDeviceImage(device_img = dataReceived.images[device_state])
// //       setDisplayState(dataReceived.states[device_state])
// //     }else if(device_state===3){
// //       setDeviceState(device_state = 0)
// //       // device_state = 0
// //       // device_state = 0;
// //       console.log(device_state);
// //       // console.log(image);
// //       setDeviceImage(device_img = dataReceived.images[device_state])
// //       setDisplayState(dataReceived.states[device_state])
// //     }
// //   }
// //     function handleImageLight(){
// //       console.log('after vlickignn before changing value is ', device_state)
// //       if (device_state===0){
// //         setDeviceState(device_state = 1)
// //         // device_state = 1
// //         // device_state = 1;
// //         console.log('state changed to',device_state);
// //         // console.log(image);
// //         // device_img =  dataReceived.images[device_state]
// //         setDeviceImage(device_img = dataReceived.images[device_state])
// //         setDisplayState(dataReceived.states[device_state])
// //       }else if(device_state===1){
// //         setDeviceState(device_state = 0)
// //         // device_state = 0
// //         // device_state = 0;
// //         console.log('state changed to',device_state);
// //         // console.log(image);
// //         setDeviceImage(device_img = dataReceived.images[device_state])
// //         setDisplayState(dataReceived.states[device_state])
// //       }
// //     }

// //     var test = './assets/1.png'

// //     return (

// //       <View style={styles_device.container}>
// //   <View style={styles_device.header}>
// //     <Text style={styles_device.headerText}>{dataReceived.device_name}</Text>
// //   </View>

// //   <View style={styles_device.content}>
// //     <Pressable onPress={selectDevice}>
// //       {console.log('CURRENT LOG', device_img)}
// //       <Image source={
// //         require(test)
// //         } style={styles_device.image} />
// //     </Pressable>
// //   </View>

// //   <View style={styles_device.textContainer}>
// //     <Text style={styles_device.text}>{displayText}</Text>
// //   </View>

// //   <View style={styles_device.iconContainer}>
// //     <Icon
// //       name="home"
// //       type='fontisto'
// //       onPress={() =>
// //         navigation.navigate('Home', {
// //           data: { device_name: dataReceived.device_name, state: device_state },
// //         })
// //       }
// //       style={{ width: 24, height: 24, color: 'black' }}
// //     />

// //   </View>
// // </View>

// //     )
// // }


import React from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import {Icon} from '@rneui/themed'


const Home = () => {

  return (
    <>
    <View style={{borderWidth: 1, borderColor: 'black', backgroundColor:'lightblue', marginTop: 50, borderWidth: 1, borderColor: 'blue', alignItems:'center', padding: 12}}>
      <Text style={{fontSize: 25}}>App Header</Text>
    </View>
    <View style={{flex:1, borderWidth: 0, borderColor: 'red',  flexDirection: 'row', maxHeight: 200, marginTop: 50}}>
    <Pressable style={{flex: 1, borderWidth: 1, borderColor: 'black'}}>
      <View style={{flex:1 , flexDirection:'row',  borderWidth: 0, borderColor: 'blue', backgroundColor:'lightblue',
      borderRadius: 20, margin: 10, justifyContent:'center', alignItems:'center', 
    }}>
        <Image source={require('./assets/bulbo.png')} style={{height: 'auto', width: '50%', aspectRatio: 1}}/>
      </View>
      </Pressable>
      <Pressable style={{ flex: 1, borderWidth: 1, borderColor: 'black'}}>
      <View style={{ flex:1 , flexDirection:'row',  borderWith: 1, borderColor: 'blue', backgroundColor:'lightblue',
      borderRadius: 20, margin: 10, justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./assets/fan.png')} style={{height: 'auto', width: '100%', aspectRatio: 1}}/>
      </View>
      </Pressable>

    </View>
    <View style={{flex:1, borderWidth: 0, borderColor: 'red', marginTop: 40, flexDirection: 'row', maxHeight: 200}}>
    <Pressable style={{flex: 1, borderWidth: 1, borderColor: 'black'}}>
    <View style={{flex:1 , flexDirection:'row',  borderWidth: 0, borderColor: 'blue', backgroundColor:'lightblue',
    borderRadius: 20, margin: 10, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('./assets/bulbo.png')} style={{height: 'auto', width: '50%', aspectRatio: 1}}/>
    </View>
    </Pressable>
    <Pressable style={{flex: 1, borderWidth: 1, borderColor: 'black'}}>
    <View style={{ flex:1 , flexDirection:'row',  borderWidth: 0, borderColor: 'blue', backgroundColor:'lightblue',
    borderRadius: 20, margin: 10, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('./assets/fan.png')} style={{height: 'auto', width: '100%', aspectRatio: 1}}/>
    </View>
    </Pressable>
  </View>

  {/* Text view  */}

    <View style={{borderWidth: 1, borderColor: 'red', alignItems:'center', marginTop: 35}}>
      <Text style={{fontSize: 25}}>Welcome home</Text>
    </View>


  {/* text view end */}

  {/* bottom nav bar  */}
  <View style={{borderWidth: 1, borderColor: 'red', flexDirection: 'row', minHeight: 20, padding: 25, 
 backgroundColor: 'lightblue',  bottom: 0, position:"absolute", }}>
    <View style={{flex: 1, borderWidth: 1, borderColor: 'blue', marginRight: 5, marginLeft: 5}}>
    <Icon 
        type="fontisto"
        name="info"
      />
    </View>
    <View style={{flex: 1, borderWidth: 1, borderColor: 'blue', marginRight: 5, marginLeft: 5}}>
    <Icon 
        type="fontisto"
        name="home"
      />
    </View>

    <View style={{flex: 1, borderWidth: 1, borderColor: 'blue', marginRight: 5, marginLeft: 5}}>
      <Icon 
        type="fontisto"
        name="home"
      />
    </View>
    
  </View>

  {/* bottom nav bar end */}
  </>
  );

}



export default Home;


