import { ReactElement } from 'react';
import { getFeatureFlag } from '../../lib/setGetFeatures';
import { FeatureFlags } from '../../../../types/featureFlags';

interface ToggleFeaturesProps {
  name: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export function ToggleFeatures({ off, on, name }: ToggleFeaturesProps) {
  if (getFeatureFlag(name)) {
    return on;
  }

  return off;
}
