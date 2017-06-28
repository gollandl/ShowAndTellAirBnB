import Navigator from 'native-navigation';
import { SCREENONE, SCREENTWO } from './routes';


Navigator.registerScreen(
  SCREENONE,
  () => require('./screens/ScreenOne'),
  {
    initialConfig: {
      title: 'Screen One',
    },
  }
);

Navigator.registerScreen(
  SCREENTWO,
  () => require('./screens/ScreenTwo'),
  {
    initialConfig: {
      title: 'Screen Two',
    },
  }
);
