import { FunctionComponent } from 'react';

interface TooltipProps {
  text?: string;
  position?: { top: number; left: number };
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
  text,
  position,
}) => {
  return (
    <div
      className='description-tooltip'
      style={{ top: position?.top || 0, left: position?.left || 0 }}
    >
      {text}
    </div>
  );
};
