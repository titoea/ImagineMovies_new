import { GestureResponderEvent } from 'react-native';

export interface IconProps {
  color?: string;
  size?: number;
  opacity?: number;
  handlePress?: () => ((event: GestureResponderEvent) => void) | null | undefined
}
