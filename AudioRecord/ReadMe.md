## Audio Record and Play

This utility class contain functions for record audio , stop recording and play audio. Recorded audio file will be save in document directory once record stops.


### Install

```
npm i react-native-audio-recorder-player
```

```
npm i react-native-fs
```

### Usage
```
import AudioRecording from '../Utils/AudioRecording';

audioRec: AudioRecording
constructor(props: any) {
	super(props);
   this.audioRec = new AudioRecording();
}

const onPressStartRecord = async () => {
   this.audioRec.startRecord();
}

const onPressStopRecord = async () => {
   this.endRecord.startRecord();
}

const onPressPlaySound = async () => {
   this.audioRec.playAudio("sound.wav");
}

```

### Refference
```
1. https://www.npmjs.com/package/react-native-audio-recorder-player
2. https://www.npmjs.com/package/react-native-fs
