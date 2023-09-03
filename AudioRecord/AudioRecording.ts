import { 
   Platform 
} from 'react-native'
import AudioRecorderPlayer, { 
   AudioSet, 
   AudioEncoderAndroidType, 
   AudioSourceAndroidType, 
   AVEncoderAudioQualityIOSType, 
   AVEncodingOption 
} from 'react-native-audio-recorder-player'
var RNFS = require('react-native-fs');

const AudioRecordFileName = "sample_audio.wav"

export default class AudioRecording {
   audioRecorderPlayer: AudioRecorderPlayer;
   constructor() {
      this.audioRecorderPlayer = new AudioRecorderPlayer()
      this.audioRecorderPlayer.setSubscriptionDuration(0.09);
   }
   public startRecord = async () => {
      console.log("Recording started......")
      var output_path = RNFS.DownloadDirectoryPath + '/' + AudioRecordFileName;
      const path = Platform.select({
         ios: AudioRecordFileName,
         android: output_path,
      });
      const audioSet: AudioSet = {
         AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
         AudioSourceAndroid: AudioSourceAndroidType.MIC,
         AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
         AVNumberOfChannelsKeyIOS: 2,
         AVFormatIDKeyIOS: AVEncodingOption.aac,
      };
      try {
         const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
         console.log("Record Started....", uri)
         this.audioRecorderPlayer.addRecordBackListener((e) => {
         });
      }
      catch (err) {
         console.log(err)
         return
      }
   }

   public endRecord = async () => {
      console.log("Recording end......")
      try {
         const result = await this.audioRecorderPlayer.stopRecorder();
         this.audioRecorderPlayer.removeRecordBackListener();
         console.log("Record Stoppped!!!", result)
      }
      catch (err) {
         console.log(err)
      }
   }

   public playAudio = async (audio_file_path: string) => {
      try {
         console.log('Playing....');
         const msg = await this.audioRecorderPlayer.startPlayer(audio_file_path);
         this.audioRecorderPlayer.setVolume(1.0);

      } catch (error) {
         console.log('Play Audio Error: ', error);
      }
   }

}