export type ApiProviderPreset = {
  id: string;
  baseUrl: string;
  labelKey: string;
  modelDefaults?: {
    default?: string;
    haiku?: string;
    sonnet?: string;
    opus?: string;
  };
};

export const API_PROVIDER_PRESETS: readonly ApiProviderPreset[] = [
  {
    id: 'anthropic',
    baseUrl: 'https://api.anthropic.com',
    labelKey: 'settings:apiProfiles.presets.anthropic'
  },
  {
    id: 'openrouter',
    baseUrl: 'https://openrouter.ai/api/v1',
    labelKey: 'settings:apiProfiles.presets.openrouter'
  },
  {
    id: 'groq',
    baseUrl: 'https://api.groq.com/openai/v1',
    labelKey: 'settings:apiProfiles.presets.groq'
  },
  {
    id: 'glm-global',
    baseUrl: 'https://api.z.ai/api/anthropic',
    labelKey: 'settings:apiProfiles.presets.glmGlobal',
    modelDefaults: {
      default: 'glm-4.7',
      haiku: 'glm-4.7',
      sonnet: 'glm-4.7',
      opus: 'glm-4.7'
    }
  }
];
