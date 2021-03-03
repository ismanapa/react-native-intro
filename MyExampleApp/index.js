import { AppRegistry } from 'react-native';
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue.js';
import App from './App';
import { name as appName } from './app.json';

const spyFunction = (msg) => {
  //console.log(msg);
};

MessageQueue.spy(spyFunction);

AppRegistry.registerComponent(appName, () => App);
