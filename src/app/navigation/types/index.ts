import {MAIN_STACK_SCREENS, NAVIGATION_STACKS} from '@constants/navigation';

export type AppStackParamList = {
    [NAVIGATION_STACKS.APP_MAIN]?: {
        screen: keyof MainStackParamList;
    };
};

export type MainStackParamList = {
    [MAIN_STACK_SCREENS.HOME]: undefined;
};
