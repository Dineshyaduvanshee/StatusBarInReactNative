import { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

const App = () =>{
  const [hide,setHide] = useState(false);
  const [barStyle,setbarStyle] = useState("default");
  return(
    <View style={styles.container}>
      <StatusBar
      backgroundColor="blue"
      barStyle={barStyle}

      hidden={hide}
      />
      <Button title="Toggle Status Bar" onPress={()=>setHide(!hide)}/>
      <Button title="update Status Bar" onPress={()=>setbarStyle("dark-content")}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  }
})
export default App;
