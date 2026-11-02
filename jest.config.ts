// jest.config.ts
import { createDefaultEsmPreset } from 'ts-jest';
import type { Config } from 'jest';

const config: Config = {
  ...createDefaultEsmPreset(),
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default config;
