import { StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-date-ranges';

const Availability = () => {
  return (
    <View>
      <DatePicker
                style={ { width: 350,
                  height: 30, borderRadius: 0, 
                  borderColor: "transparent",
                  borderWidth: 0
                  }}
                customStyles = { {
                  placeholderText:{ 
                    fontSize:15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto"
                  }, // placeHolder style
                  headerStyle : { 
                    backgroundColor: "#003580"
                  },			// title container style
                  contentText: {
                    fontSize: 15,
                    flexDirection:"row",
                    alignItems: "center",
                    marginRight: "auto"
                  }, //after selected text Style
                } } // optional 
                selectedBgColor="#0047AB"
                allowFontScaling = {false} // optional
                placeholder={'Apr 27, 2018 → Jul 10, 2018'}
                mode={'range'}
              /> 
    </View>
  )
}

export default Availability

const styles = StyleSheet.create({})