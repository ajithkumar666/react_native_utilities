import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeSessionData = async (key: string, value:string) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.log("Store data to local storage failed ", e)
		throw e
	}
};
export const getSessionData = async (key:string) => {
	try {
		const data = await AsyncStorage.getItem(key)
		return data
	} catch (e) {
		console.log("Fetch data from local storage failed ", e)
		throw e
	}
};
export const clearSessionData = async () => {
	try {
		await AsyncStorage.clear()
	} catch (e) {
		console.log("Clear data in local storage failed ", e)
		throw e
	}
};


