import {
  processColor,
  Image,
} from 'react-native';
//import shallowEquals from './shallowEquals';



function processConfig(config) {
  if (typeof config !== 'object') {
    return config;
  }
  const obj = {};
  Object.keys(config).forEach(key => {
    if (isColorKey(key)) {
      obj[key] = processColor(config[key]);
    } else if (isImageKey(key)) {
      obj[key] = Image.resolveAssetSource(config[key]);
    } else if (isEventKey(key)) {
      // do nothing
    } else if (Array.isArray(config[key])) {
      obj[key] = config[key].map(processConfig);
    } else {
      obj[key] = config[key];
    }
  });
  return obj;
}
