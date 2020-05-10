const parser = require('../index');

let obj = {
  key: 'value',
  object: {
    key: 'value',
    array: [1, { key: { key: { key: 'value' } } }, 'hello'],
  },
};

let obj2 = {
  deviceToken: {
    deviceLocation: 'Lat: 37.4219983, Long: -122.084',
    deviceInformation:
      '{"osVersion":"","osCodeName":"REL","boardName":"goldfish_x86","bootloaderVersion":"unknown","brandName":"google","deviceName":"generic_x86_arm","displayName":"PSR1.180720.117","fingerprint":"google/sdk_gphone_x86_arm/generic_x86_arm:9/PSR1.180720.117/5875966:user/release-keys","hostName":"abfarm-us-east1-c-0025","id":"PSR1.180720.117","manufacturer":"Google","model":"AOSP on IA Emulator","product":"sdk_gphone_x86_arm","tags":"release-keys","type":"user","isPhysicalDevice":"false","androidId":"77a7a31089f6c66a"}',
    deviceId: 'PSR1.180720.117',
    imeiNo: '358240051111110',
    simPhoneNumber: null,
    accelerometer: '{"accelerometer":"","userAccelerometer":"","gyroscope":""}',
    gps: 'Lat: 37.4219983, Long: -122.084',
    ipAddress: '192.168.232.2',
    page: '/front-page',
    appVersion:
      '{"appName":"test - staging","packageName":"com.test","version":"1.1.0-staging","buildNumber":"29"}',
    appChecksum: null,
  },
};

let obj3 = {
  deviceToken: {
    deviceLocation: 'Lat: 37.4219983, Long: -122.084',
    deviceInformation: {
      osVersion: '',
      osCodeName: 'REL',
      boardName: 'goldfish_x86',
      bootloaderVersion: 'unknown',
      brandName: 'google',
      deviceName: 'generic_x86_arm',
      displayName: 'PSR1.180720.117',
      fingerprint:
        'google/sdk_gphone_x86_arm/generic_x86_arm:9/PSR1.180720.117/5875966:user/release-keys',
      hostName: 'abfarm-us-east1-c-0025',
      id: 'PSR1.180720.117',
      manufacturer: 'Google',
      model: 'AOSP on IA Emulator',
      product: 'sdk_gphone_x86_arm',
      tags: 'release-keys',
      type: 'user',
      isPhysicalDevice: 'false',
      androidId: '77a7a31089f6c66a',
    },
    deviceId: 'PSR1.180720.117',
    imeiNo: '358240051111110',
    simPhoneNumber: '',
    accelerometer: {
      accelerometer: '',
      userAccelerometer: '',
      gyroscope: '',
    },
    gps: 'Lat: 37.4219983, Long: -122.084',
    ipAddress: '192.168.232.2',
    page: '/front-page',
    appVersion: {
      appName: 'test - staging',
      packageName: 'com.test',
      version: '1.1.0-staging',
      buildNumber: '29',
    },
    appChecksum: '',
  },
};

let string =
  '{"key":"value","object":{"key":"value","array":[1,{"key":{"key":{"key":"value"}}},"hello"]}}';

test('Test Parse Nested Object', () => {
  try {
    let str = JSON.stringify(obj2);
    console.log(str);
    let json = JSON.parse(str);
    console.log(json);
    let res = parser.parse(str);
    expect(res).toEqual(obj3);
  } catch (err) {
    console.log(err);
  }
});
