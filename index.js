import Navigator from 'native-navigation';

Navigator.registerScreen(
  'ScreenOne',
  () => require('./screens/ScreenOne'),
);

Navigator.registerScreen(
  'ScreenTwo',
  () => require('./screens/ScreenTwo'),
);
