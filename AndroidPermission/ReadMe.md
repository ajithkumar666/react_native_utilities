## Android Premission Utility class

This utility class using for asking permissions in android devices. Here only contain Storage Read,Write and Mic permissions. You can add more  permissions by modifyng this class such as location , blutooth, etc.. permissions

### Usage
```
import AndroidRequestPermission from '../Utils/AndroidRequestPermission';

constructor(props: any) {
	super(props);
   requestPermissions()   
}


```

### Refference
```
1. https://developer.android.com/reference/android/Manifest.permission
2. https://reactnative.dev/docs/permissionsandroid
