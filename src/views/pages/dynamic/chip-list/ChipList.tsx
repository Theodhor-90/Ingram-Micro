import React, { FunctionComponent } from 'react';
import { Chip } from '../../../../components/chip/chip';

interface ChipListProps {
  title: string;
  data: any[];
  selectedPillarIndex?: number | null;
  interactive?: boolean;
  onChipClick?: Function;
  disabled?: boolean;
  marginBottom?: boolean;
  icon?: any;
  whenEntering?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    title: string
  ) => void;
  whenLeaving?: () => void;
}

export const ChipList: FunctionComponent<ChipListProps> = ({
  title,
  data,
  onChipClick,
  selectedPillarIndex,
  disabled,
  marginBottom,
  icon,
  whenEntering,
  whenLeaving,
}) => {
  return (
    <div className={marginBottom ? 'mb-2' : ''}>
      <div className='d-flex'>
        <div className='card-title margin-8'>{title}</div>
        {icon ? (
          <div
            onMouseEnter={(e) => whenEntering && whenEntering(e, title)}
            onMouseLeave={() => whenLeaving && whenLeaving()}
          >
            {icon}
          </div>
        ) : null}
      </div>
      <div className='row mx-0'>
        {data.map((el: any, index: number) => (
          <div
            className='col col-auto p-0 chip-container'
            key={`pillar-${index}`}
            onClick={
              onChipClick &&
              function () {
                onChipClick(index);
              }
            }
          >
            <Chip
              chipText={el.name}
              helperClasses={`${
                index === selectedPillarIndex ? 'selected' : ''
              }`}
              disabled={disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
