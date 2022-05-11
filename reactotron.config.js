import Reactotron, {
    asyncStorage,
    networking,
    openInEditor,
} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
        name: 'Swiper App',
        port: 9090,
    })
    .use(asyncStorage())
    .use(openInEditor())
    .use(networking())
    .useReactNative()
    .connect();
