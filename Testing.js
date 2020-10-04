// import React, { useEffect, useState } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     Animated,
//     TouchableHighlight,
//     StatusBar,
//     ScrollView,
//     Image,
//     YellowBox,
// } from 'react-native';

// import { SwipeListView } from 'react-native-swipe-list-view';
// import { Button } from "react-native-paper";
// YellowBox.ignoreWarnings(['Encountered two children with the same key']);
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const TestingScreen = ({ navigation }) => {

//     const [listData, setListData] = useState([
//         {
//             key: `4`,
//             title: 'Your pizza order placed successfully',
//             details: 'Your pizza order to snack corner has been accepted and being processed.'
//         },
//         {
//             key: `3`,
//             title: 'Your bengali thali order has been delivered',
//             details: 'Your bengali thali has been delivered by Delicious Bong Recipe.'
//         },
//         {
//             key: `2`,
//             title: 'Out for delivery',
//             details: 'Bengali thali will reach to you within 30 minutes.'
//         },
//         {
//             key: `1`,
//             title: 'Your bengali thali order placed successfully',
//             details: 'Your bengali thali order to Delicious Bong Recipe has been accepted and being processed.'
//         },
//     ]);

//     const deleteRow = (rowMap, rowKey) => {
//         // closeRow(rowMap, rowKey);
//         const newData = [...listData];
//         const prevIndex = listData.findIndex(item => item.key === rowKey);
//         newData.splice(prevIndex, 1);
//         setListData(newData);
//     };


//     const onRightActionStatusChange = rowKey => {
//         console.log('onRightActionStatusChange', rowKey);
//     };

//     const onRightAction = rowKey => {
//         console.log('onRightAction', rowKey);
//     };

//     const VisibleItem = props => {
//         const {
//             data,
//             rowHeightAnimatedValue,
//             removeRow,
//             // leftActionState,
//             rightActionState,
//         } = props;

//         if (rightActionState) {
//             Animated.timing(rowHeightAnimatedValue, {
//                 toValue: 0,
//                 duration: 200,
//                 useNativeDriver: false,
//             }).start(() => {
//                 removeRow();
//             });
//         }

//         return (
//             <Animated.View
//                 style={[styles.rowFront, { height: rowHeightAnimatedValue }]}>
//                 <TouchableHighlight
//                     style={styles.rowFrontVisible}
//                     onPress={() => console.log('Element touched')}
//                     underlayColor={'#aaa'}>
//                     <View>
//                         <Text style={styles.title} numberOfLines={1}>
//                             {data.item.title}
//                         </Text>
//                         <Text style={styles.details} numberOfLines={1}>
//                             {data.item.details}
//                         </Text>
//                     </View>
//                 </TouchableHighlight>

//             </Animated.View>
//         );
//     };

//     const renderItem = (data, rowMap) => {
//         const rowHeightAnimatedValue = new Animated.Value(60);

//         return (
//             <VisibleItem
//                 data={data}
//                 rowHeightAnimatedValue={rowHeightAnimatedValue}
//                 removeRow={() => deleteRow(rowMap, data.item.key)}
//             />
//         );
//     };

//     const HiddenItemWithActions = props => {
//         const {
//             swipeAnimatedValue,
//             leftActionActivated,
//             rightActionActivated,
//             rowActionAnimatedValue,
//             rowHeightAnimatedValue,
//             onClose,
//             onDelete,
//         } = props;

//         if (rightActionActivated) {
//             Animated.spring(rowActionAnimatedValue, {
//                 toValue: 500,
//                 useNativeDriver: false
//             }).start();
//         } else {
//             Animated.spring(rowActionAnimatedValue, {
//                 toValue: 75,
//                 useNativeDriver: false
//             }).start();
//         }

//         return (
//             <Animated.View style={[styles.rowBack, { height: rowHeightAnimatedValue }]}>
//                 <Text>Delete</Text>
//             </Animated.View>
//         );
//     };

//     const renderHiddenItem = (data, rowMap) => {
//         const rowActionAnimatedValue = new Animated.Value(75);
//         const rowHeightAnimatedValue = new Animated.Value(80);

//         return (
//             <HiddenItemWithActions
//                 data={data}
//                 rowMap={rowMap}
//                 rowActionAnimatedValue={rowActionAnimatedValue}
//                 rowHeightAnimatedValue={rowHeightAnimatedValue}
//                 onClose={() => closeRow(rowMap, data.item.key)}
//                 onDelete={() => deleteRow(rowMap, data.item.key)}
//             />
//         );
//     };

//     const AddNotification = () => {
//         let x = (parseInt(listData[0].id) + 1).toString();
//         if (listData.length !== 0) {
//             setListData([{ key: x, title: "Title", details: "Details" }, ...listData]);
//         }
//         else {
//             setListData([{ key: x, title: "Title", details: "Details" }]);
//         }
//     }

//     // const closeRow = (rowMap, rowKey) => {
//     //     if (rowMap[rowKey]) {
//     //         rowMap[rowKey].closeRow();
//     //     }
//     // };

//     // const onRowDidOpen = rowKey => {
//     //     console.log('This row opened', rowKey);
//     // };

//     // const onLeftActionStatusChange = rowKey => {
//     //     console.log('onLeftActionStatusChange', rowKey);
//     // };

//     // const onLeftAction = rowKey => {
//     //     console.log('onLeftAction', rowKey);
//     // };

//     return (
//         <>
//             <View style={styles.container}>
//                 {/* <StatusBar barStyle="dark-content" /> */}
//                 <StatusBar backgroundColor="#5F00E3" barStyle="light-content" />
//                 <View style={{ alignItems: 'center' }}>
//                     <Text style={{ fontSize: 30, color: '#5F00E3' }}>Notifications</Text>
//                 </View>

//                 {listData.length !== 0
//                     &&
//                     <SwipeListView
//                         data={listData}
//                         renderItem={renderItem}
//                         renderHiddenItem={renderHiddenItem}
//                         disableRightSwipe
//                         rightActivationValue={-130}
//                         rightActionValue={-500}
//                         onRightAction={onRightAction}
//                         onRightActionStatusChange={onRightActionStatusChange}
//                     // leftOpenValue={75}
//                     // rightOpenValue={-150}
//                     // onRowDidOpen={onRowDidOpen}
//                     // leftActivationValue={100}
//                     // leftActionValue={0}
//                     // onLeftAction={onLeftAction}
//                     // onLeftActionStatusChange={onLeftActionStatusChange}
//                     />
//                 }
//                 {
//                     listData.length !== 0 &&
//                     <Button
//                         onPress={() => {
//                             // console.log(listData.length) 
//                             setListData([])
//                         }}
//                     >Clear All</Button>
//                 }
//                 {(listData.length === 0) &&
//                     <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

//                         <Image source={require('./src/assets/aa.jpg')} style={{ height: 150, width: '100%' }}></Image>
//                     </View>
//                 }
//                 {/* <View><Button onPress={() => {
//                     console.log(listData)
//                     console.log(listData.length)
//                 }}>CONSOLE NOTIFICATIONS</Button></View> */}
//                 {
//                     listData.length !== 0 &&

//                     <View>
//                         <Button onPress={() => {
//                             AddNotification();
//                             // console.log(listData)
//                         }}>ADD NEW NOTIFICATION
//                         </Button>
//                     </View>

//                 }
//             </View>
//         </>
//     );
// };

// export default TestingScreen;

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#f4f4f4',
//         flex: 1,
//     },
//     rowFront: {
//         backgroundColor: '#FFF',
//         borderRadius: 5,
//         height: 65,
//         margin: 5,
//         marginBottom: 20,
//         shadowColor: '#999',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         elevation: 5,
//     },
//     rowFrontVisible: {
//         backgroundColor: '#FFF',
//         borderRadius: 5,
//         height: 65,
//         padding: 10,
//         marginBottom: 20,
//     },
//     rowBack: {
//         alignItems: 'center',
//         backgroundColor: 'red',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         paddingLeft: 15,
//         margin: 5,
//         marginBottom: 15,
//         borderRadius: 5,
//     },
//     title: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         marginBottom: 5,
//         color: '#666',
//     },
//     details: {
//         fontSize: 12,
//         color: '#999',
//     },
// });