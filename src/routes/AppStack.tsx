import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen}  = createStackNavigator();

{/* adiconando as páginas */}
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';


function AppStack () {
    {/* tira o cabeçalho da aplicação que vem por padrao*/}


    return(
        <NavigationContainer> 
            <Navigator screenOptions={{ headerShown: false }}> 
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />

            </Navigator>            
        </NavigationContainer>
    )
}

export default AppStack;