import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './app/containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware,
		),
	);
	return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
	<Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('ImgurApp', () => App);


// import React, { Component } from 'react';
// import {
// 	AppRegistry,
// 	StyleSheet,
// 	Text,
// 	View
// } from 'react-native';
//
// export default class ImgurApp extends Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
// 		);
// 	}
// }
//
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF',
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5,
// 	},
// });
//
// AppRegistry.registerComponent('ImgurApp', () => ImgurApp);
