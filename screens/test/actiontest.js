// import ActionSheet from "react-native-actions-sheet";
// import { Text, StyleSheet, View, ImageBackground } from "react-native";
// import { useRef } from 'react';

// const Actioapp=()=> {

// let actionsheet=useRef();
// let optionArray=[
//     'option1','option2','option3','option4','cancle'
// ]
// const showActionSheet=() =>
// {
//     actionsheet.current.show();
// }

//     return (
//         <View>
//             <Text onPress={showActionSheet}>Open ActionSheet</Text>
//             <ActionSheet
//                 ref={actionsheet}
//                 title={'Which one do you like ?'}
//                 options={optionArray}
//                 cancelButtonIndex={4}
//                 destructiveButtonIndex={1}
//                 onPress={(index) => { /* do something */ }}
//             />
//         </View>
//     )

// }
// export default Actioapp;