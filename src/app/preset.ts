import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.600}',
      600: '{sky.700}',
      700: '{sky.800}',
      800: '{sky.900}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
  },
});
