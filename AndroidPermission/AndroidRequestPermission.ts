import { Platform, PermissionsAndroid } from "react-native";


export const requestPermissions = async () => {
	console.log("REQUEST FOR PERMISSIONS.......")
	if (Platform.OS === 'android') {

		try {
			console.log('Asking storage write access permission');
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
				{
					title: 'Storage Write Access Permission',
					message: 'APP_NAME  needs write permission access to your storage',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				},
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('Storage Write Access Permission is Granted');
			} else {
				console.log('Storage Write Access Permission Denied');
				return;
			}
		} catch (err) {
			console.warn(err);
			return;
		}
	}
	if (Platform.OS === 'android') {

		try {
			console.log('Asking storage read access permission');
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
				{
					title: 'Storage Read Access Permission',
					message: 'APP_NAME  needs read permission access to your storage',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				},
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('Storage Read Access Permission is Granted');
			} else {
				console.log('Storage Read Access Permission Denied');
				return;
			}
		} catch (err) {
			console.warn(err);
			return;
		}
	}
	if (Platform.OS === 'android') {
		try {
			console.log('Asking audio record permission');
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
				{
					title: 'Microphone Access Permission',
					message: 'APP_NAME  needs microphone access permission to record',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				},
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('Microphone permission is Granted');
			} else {
				console.log('Microphone permission Denied');
				return;
			}
		} catch (err) {
			console.log(err);
			return;
		}
	}
}
