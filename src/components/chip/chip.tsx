import { FunctionComponent } from 'react';
interface ChipProps {
  chipText?: string;
  disabled?: boolean;
  helperClasses?: string;
  onClickCallBack?: () => void;
  isSelected?: boolean;
}

export const Chip: FunctionComponent<ChipProps> = ({
  chipText = 'Hello there',
  disabled,
  helperClasses,
  onClickCallBack,
  isSelected,
}) => {
  return (
    <button
      className={`chip ${isSelected ? 'selected' : ''} ${
        disabled ? 'not-selected' : ''
      } ${helperClasses ?? ''}`}
      onClick={onClickCallBack}
    >
      {chipText}
    </button>
  );
};
