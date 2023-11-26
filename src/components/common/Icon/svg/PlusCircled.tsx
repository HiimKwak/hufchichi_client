import { ComponentProps } from 'react';

interface IconProps extends ComponentProps<'svg'> {}

export const PlusCircled = ({
  width = '48',
  height = '48',
  viewBox = '0 0 48 48',
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 0C4.704 0 0 4.704 0 10.5C0 16.296 4.704 21 10.5 21C16.296 21 21 16.296 21 10.5C21 4.704 16.296 0 10.5 0ZM15.75 11.55H11.55V15.75H9.45V11.55H5.25V9.45H9.45V5.25H11.55V9.45H15.75V11.55Z"
        fill="currentColor"
      />
    </svg>
  );
};
