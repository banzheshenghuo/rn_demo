import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'native-base';
import RNFS from 'react-native-fs';
const FileOpener = require('react-native-file-opener');

const FilePath =
  'https://stg-fs.crmpower.cn/rest/images//2018-06-27-7905193648786432?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI3MzMxMDIwNzEzMzY0NDg0IiwidGVuYW50SWQiOiJUNzMyNDI0NjkzNjkxNDk0NyIsImV4cCI6MTUzNjU2ODQ2MiwibmJmIjoxNTMxMzg0MTYyfQ.3umjXq-wEDglAN8kP0AoRH3I2qCO5-_9QZgX4MM2YEo'; // path of the file
const FileMimeType = 'application/msword'; // mime type of the file

const demo =
  '/Users/awake/Library/Developer/CoreSimulator/Devices/B7AE994C-03EF-419C-A4C4-68086B1CC5CD/data/Containers/Data/Application/5CA964F1-E833-49AA-AD92-99A194D6A78C/Documents/cache/123.jpg';
export default class HomeScreen extends React.Component {
  state = {
    path: '',
  };

  uploadBegin = (response) => {
    var jobId = response.jobId;
    console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
  };

  uploadProgress = (response) => {
    var percentage = Math.floor(
      (response.totalBytesSent / response.totalBytesExpectedToSend) * 100,
    );
    console.log('UPLOAD IS ' + percentage + '% DONE!');
  };

  isCache = async () => {
    console.log('cache url===>', RNFS.DocumentDirectoryPath + '/cache/123.jpg');
    const exists = await RNFS.exists(RNFS.DocumentDirectoryPath + '/cache');
    if (!exists) {
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + '/cache');
    }
    console.log('exists', exists);
  };

  download = () => {
    RNFS.downloadFile({
      fromUrl: FilePath,
      toFile: RNFS.DocumentDirectoryPath + '/cache/123.jpg',
      progress: this.uploadProgress,
    })
      .promise.then((response) => {
        console.log('response====>', response);
        if (response.statusCode == 200) {
          console.log('FILES UPLOADED!', response); // response.statusCode, response.headers, response.body
        } else {
          console.log('SERVER ERROR');
        }
      })
      .catch((err) => {
        if (err.description === 'cancelled') {
          // cancelled by user
        }
        console.log(err);
      });
  };

  fileOpen = () => {
    console.log('FileOpener=====>', FileOpener);
    const url = RNFS.DocumentDirectoryPath + '/cache/123.jpg';
    FileOpener.open(url, 'image/jpg').then(
      (msg) => {
        console.log('success!!', msg);
      },
      (err) => {
        console.log('error!!', err);
      },
    );
  };

  print = () => {
    FileOpener.find('123').then(
      (msg) => {
        console.log('success!!', msg);
      },
      (err) => {
        console.log('error!!', err);
      },
    );
  };

  render() {
    return (
      <View style={{ marginTop: 200, flex: 1 }}>
        <Text onPress={this.fileOpen}>Home</Text>
        <Button onPress={this.download}>
          <Text>下载</Text>
        </Button>
        <Button onPress={this.isCache}>
          <Text>是否存在</Text>
        </Button>
        <Button onPress={this.print}>
          <Text>打印日志</Text>
        </Button>
      </View>
    );
  }
}
