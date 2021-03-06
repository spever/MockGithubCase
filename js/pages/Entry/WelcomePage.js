import React,{Component}from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  InteractionManager,
  Platform
} from 'react-native';
import HomePage from "./HomePage";
import ThemeDao from "../../dao/ThemeDao";

export default class WelcomePage extends Component{


  componentDidMount() {

    const {navigator} = this.props;

    new ThemeDao().getTheme().then((data) =>{
      this.theme=data;
    });

    this.timer = setTimeout(() => {

      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component:HomePage,
          name:'HomePage',
          params:{
            theme:this.theme
          }
        });
      })
    },500);

  }


  componentWillUnmount() {
    this.timer && (this.timer);
  }

  render(){
    return(
        <View style={styles.container}>
          {/*<Image source={require()}/>*/}
        </View>
    );
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})