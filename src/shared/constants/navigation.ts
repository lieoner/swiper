import {StackNavigationOptions} from '@react-navigation/stack';

export enum NAVIGATION_STACKS {
    APP_MAIN = 'AppMain',
}

export enum MAIN_STACK_SCREENS {
    HOME = 'Home',
}

export const NAVIGATION_OPTIONS_NO_HEADER: StackNavigationOptions = {
    header: () => null,
};
