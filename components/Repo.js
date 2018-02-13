import React, { Component } from 'react';
 
import { View, Text, Image, StyleSheet } from 'react-native';


export default class Repo extends Component {
	render() {
		return(
				<View style={styles.repo}>
					<Image
						style={styles.repoImage}
						source={{ uri: this.props.data.thumbnail}}
					/>  	
				
					<View style={styles.repoInfo}>
						<Text style={styles.repoTitle}>{this.props.data.title}</Text>
						<Text style={styles.repoAuthor}>{this.props.data.author}</Text>
 					</View>

	
 					<View style={styles.repoExtraInfo}>
					
					<View style={styles.extraUp}>
						<Image 
							style={styles.imgUpdated}
							source={{ uri: 'https://cdn0.iconfinder.com/data/icons/feather/96/clock-512.png'}}
						/>	
						<Text style={styles.textUpdated}>{this.props.data.updated_day}({this.props.data.updated_time})</Text>
						
					</View>
						
						<View style={styles.extraDown}>
							<Image 
								style={styles.imgWatch} 
		 						source={{ uri: 'https://cdn0.iconfinder.com/data/icons/cosmo-medicine/40/eye_6-512.png'}}
							/>
							
							<Text style={styles.textWatch}>{this.props.data.watch}</Text>
 						</View>
 					</View>

 				
 					
				</View>
		);
	}
}

	const styles = StyleSheet.create({
		repo: {
			padding: 20,
		    backgroundColor:'#FFF',
		    height: 100,
		    marginBottom: 20,
		    borderRadius: 5,
  			flexDirection: 'row',
  			alignItems: 'center',
  		},

  		repoImage : {
  			width: 50,
  			height: 50,
  		},

  		repoInfo: {
  			marginLeft: 10,
  		},

  		repoTitle: {
  			fontSize: 12,
  			fontWeight: 'bold',
  			color: '#000',
  		},

  		repoAuthor: {
  			fontSize: 12,
  			color: '#555',	
  			fontWeight: 'bold',
  			
  		},
		
		repoExtraInfo: {
			position: 'absolute',
  			justifyContent: 'space-between',
  			flexDirection: 'column',
  			marginRight: 10,
  			marginLeft: 200,
  		},

  		extraUp: {
  			flexDirection: 'row',
  			marginLeft: 3,
  		},

  		extraDown : {
  			flexDirection: 'row',
  		},


  		

  		imgWatch: {
  			width: 21,
  			height: 15,
  			marginTop: 4,
  		},

  		imgUpdated: {
  			width: 15,
  			height: 15,
  		},

  		textWatch: {
  			textAlign: 'left', 
  			alignSelf: 'stretch',
  			fontWeight: 'bold', 
  			color: '#000',
  			fontSize: 10,
  			marginTop: 4,
  			marginLeft: 3,
  		},

  		textUpdated: {
  			textAlign: 'left', 
  			alignSelf: 'stretch',
  			fontWeight: 'bold',
  			color: '#000',
  			fontSize: 10,
  			marginLeft: 5,
  		},

	});
