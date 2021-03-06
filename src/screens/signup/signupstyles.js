
import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headbar:{
        height:70,
        width:"100%",
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',

    },
    mainbox: {
        flex: 1,
        flexDirection:"column",
        justifyContent: "center",
        padding:"5%",
        alignItems:"stretch",
        color: 'yellow',
        backgroundColor:'white',
       
    },
    inputStyles: {
        marginHorizontal: 25,
        borderRadius:20,
        backgroundColor: 'white',
        fontSize:16,
        color:'grey',
        opacity:0.5,
        paddingLeft: 30,
        height:50 ,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: "center",
        marginBottom: 15,
    },
    footer: {
        justifyContent:'flex-end',
        margin: 3,
        alignItems:'center'
    },
    icon_style:
    {
        position:'absolute',
        top:15,
        left:40,
    }
})