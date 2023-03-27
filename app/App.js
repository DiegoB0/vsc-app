import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';

const socket = io('http://192.168.3.126:3000');
socket.emit('connection', () => {
	console.log('Hola prueba');
});

const Stack = createNativeStackNavigator();

//Screens
import CountScreen from './screens/CountScreen';
import GraphScreen from './screens/GraphScreen';
import LoginScreen from './screens/LoginScreen';
import ProductsList from './screens/ProductsScreen';

function MyStack() {
	return (
		<Stack.Navigator screenOptions={globalScreenOptions}>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{ title: 'Mi Chuy 🍔' }}
			/>
			<Stack.Screen name="GraphScreen" component={GraphScreen} />
			<Stack.Screen name="ProductsList" component={ProductsList} />

			<Stack.Screen name="CountScreen" component={CountScreen} />
		</Stack.Navigator>
	);
}

//Styles
const globalScreenOptions = {
	headerStyle: { backgroundColor: '#ffa100' },
	headerTitleStyle: { color: 'white', fontWeight: '800' },
	headerTintColor: 'white',
	headerTitleAlign: 'center',
};

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
