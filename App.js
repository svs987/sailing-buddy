import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { SkipperInvitePage } from './components/SkipperInvitePage';
import {HomePage} from './components/HomePage';
import {ViewInvitesPage} from './components/ViewInvitesPage'; 
import {TopBar} from './components/TopBar';
import Constants from 'expo-constants';
 
export default function App() {
	const [currentPage, onChangePage] = React.useState(1);

	return (
			<View style={styles.container}>
			  <TopBar/>
			{currentPage===1 && (
					<HomePage onChoose={onChangePage}/> 
			)}
			{currentPage===2 && (
					<SkipperInvitePage onChoose={onChangePage}/> 
			)}
			{currentPage===3 && (
					<ViewInvitesPage onChoose={onChangePage}/> 
			)}
			</View>
	);
}

const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	  },
	});


	