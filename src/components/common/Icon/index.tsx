import { ComponentProps } from 'react';

import { IconName } from './icon.type';
import { iconMap } from './iconMap';

interface IconProps extends ComponentProps<'svg'> {
  iconName: IconName;
}

export const Icon = ({
  iconName,
  width = 24,
  height = 24,
  ...props
}: IconProps) => {
  const Icon = iconMap[iconName];
  return <Icon width={width} height={height} {...props} />;
};
