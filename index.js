import Recat from 'react';
import Navigator from 'native-navigation';

import { SCREENONE, SCREENTWO, SCREENTHREE, SCREENFOUR } from './routes';


Navigator.registerScreen(
  SCREENONE,
  () => require('./screens/ScreenOne'),
  {
    initialConfig: {
      title: 'British Gas',
    },
  }
);

Navigator.registerScreen(
  SCREENTWO,
  () => require('./screens/ScreenTwo'),
  {
    initialConfig: {
      title: 'Top up',
    },
  }
);


Navigator.registerScreen(
  SCREENTHREE,
  () => require('./screens/ScreenThree'),
  {
    initialConfig: {
      title: 'Top up History',
    },
  }
);

Navigator.registerScreen(
  SCREENFOUR,
  () => require('./screens/ScreenFour'),
  {
    initialConfig: {
      title: 'Confirmation',
    },
  }
);
