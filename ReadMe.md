## AsyncStorage

AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.



### Install

```
npm i @react-native-async-storage/async-storage
```

### Usage
```
import { storeSessionData, getSessionData, clearSessionData } from '../Utils/SessionData';


const onPressLogin = async () => {
   await storeSessionData("user_session_key", "mask7e78337bubds8bu8732b3ub38jcsj")
}

const onHomePageLoad = async () => {
   const user_session = await getSessionData("user_session_key")
   if (user_session){
      // Do something
   }else{
      // Do something
   }
}
const onPressLogout = async () => {
   await clearSessionData()
}
```
