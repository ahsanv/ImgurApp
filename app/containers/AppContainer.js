import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { imagesLoaded } from '../actions';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import Home from './Home';

class AppContainer extends Component {

	render() {
		return (
			<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		bottom: 0,
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});


const mapDispatchToProps = dispatch => {
	return {
		onImagesLoaded: () => {
			dispatch(imagesLoaded());
		}
	}
}

function mapStateToProps(state) {
	return {
		images: state.images
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
