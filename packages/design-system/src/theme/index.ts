import { DefaultTheme } from 'styled-components/native';

import colors from './colors';
import units from './units';

import {
  TColors,
  TSpacingSizes,
  TBorderRadius,
} from '../interfaces';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    colors: TColors;
    space: TSpacingSizes;
    radii: TBorderRadius;
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    primaryDark: colors.primaryDark,
    secondaryDark: colors.secondaryDark,
    error: colors.error,
    black: colors.black,
    blackNormal: colors.blackNormal,
    blackDark: colors.blackDark,
    blackLight: colors.blackLight,
    white: colors.white,
    gray: colors.gray,
  },
  space: {
    spacing1: units.sizes.spacing1,
    spacing2: units.sizes.spacing2,
    spacing4: units.sizes.spacing4,
    spacing8: units.sizes.spacing8,
    spacing10: units.sizes.spacing10,
    spacing12: units.sizes.spacing12,
    spacing16: units.sizes.spacing16,
    spacing18: units.sizes.spacing18,
    spacing20: units.sizes.spacing20,
    spacing24: units.sizes.spacing24,
    spacing32: units.sizes.spacing32,
  },
  radii: {
    xsmall: units.borderRadius.xsmall,
    small: units.borderRadius.small,
    medium: units.borderRadius.medium,
    large: units.borderRadius.large,
    full: units.borderRadius.full,
  },
};
