import React, {
  FunctionComponent,
  useState,
  useLayoutEffect,
  useRef,
} from 'react';
import { Chip } from '../../../../components/chip/chip';
import { ChipList } from '../chip-list/ChipList';
import skus from '../../../../data/sku.json';
import { Button } from '../../../../components/button/button';
import { Chevron } from '../../../../icons/Chevron';
import { Plus } from '../../../../icons/Plus';
import { Minus } from '../../../../icons/Minus';
import descriptionsCopies from '../../../../data/descriptions.json';

import { motion, AnimatePresence } from 'framer-motion';
import { act } from 'react-dom/test-utils';

const descriptionTitles = {
  Marketing: 'Marketing Challenges',
  'Distribution & Logistics': 'Distribution & Logistics',
  Operations: 'Operations & IT Challenges',
  HR: 'Human Resources Challenges',
  Finance: 'Finance Challenges',
  Sales: 'Sales & Post-Sales Challenges',
  Customer: 'Customer Experience',
  Employee: 'Employee Experience',
  'Supplier/Partner': 'Supplier/Partner Experience',
};

const pillarsCopies = {
  'Business Performance':
    'This pillar includes business applications to support sales and revenue operations.',
  'Connected Workspace':
    'This pillar includes solutions to facilitate collaboration and secure sharing of resources.',
  'Seamless Security':
    'This pillar includes solutions to manage security operations and safeguard infrastructure, endpoints, and data.',
  'Modern Cloud Platforms':
    'This pillar includes infrastructure and platform solutions that support profitability and business growth.',
};

const getPillarCopy = (pillar: keyof typeof pillarsCopies) =>
  pillarsCopies[pillar];

const DescriptionElement: FunctionComponent<{
  title?: any;
  paragraphs?: any;
}> = ({ title, paragraphs }) => {
  return (
    <div>
      <div className='description-title'>{title}</div>
      {paragraphs && paragraphs.length
        ? paragraphs.map((paragraph: any, index: number) => (
            <p
              className='description-paragraph'
              key={`${title}-${index}`}
            >
              {paragraph}
            </p>
          ))
        : null}
    </div>
  );
};

const PillarElement: FunctionComponent<{
  el: any;
  index: number;
  pointNumber: number | undefined;
}> = ({ el, index, pointNumber }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  const getSkuDescription = (sku: string) => {
    const pilarSku = skus.find((el) => el['SKU'] === sku);
    return pilarSku?.['SKU Description'];
  };

  const getSkuCapabilities = (sku: string) => {
    const pilarSku = skus.find((el) => el['SKU'] === sku);
    const rawCapabilities = pilarSku?.['SKU Capabilities'].split('|');
    const trimmedCapabilites = rawCapabilities?.map((el) => {
      return { name: el.trim() };
    });
    return trimmedCapabilites || [];
  };
  return (
    <div
      className={`pillar-element ${
        index === 0 ? 'bordered-top bordered-bottom' : 'bordered-bottom'
      }`}
    >
      <div
        className='row justify-content-between pointer'
        onClick={toggleActive}
      >
        <div className='col col-auto card-title no-margin capped-width-48'>
          {el}
        </div>
        <div className='col col-auto'>
          <div className='position-relative-acc'>
            <Minus active={active} />
            <Plus active={!active} />
          </div>
        </div>
      </div>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
      >
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            key={`pillar-element-${pointNumber}-${index}`}
          >
            <div className='row py-3'>
              <div className='col col-12 col-lg-6 mb-3 mb-lg-0'>
                <div>{getSkuDescription(el)}</div>
              </div>
              <div className='col col-12 col-lg-6'>
                <ChipList
                  data={getSkuCapabilities(el)}
                  title='SKU Capabilities'
                  disabled={true}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PainPointExtension: FunctionComponent<{
  data?: any;
  title?: string;
  closeExtension?: () => void;
  description?: any;
  descriptionArray?: any;
  pointNumber?: number;
}> = ({
  data,
  title,
  closeExtension,
  description,
  descriptionArray,
  pointNumber,
}) => {
  const descriptionText =
    description !== null ? descriptionArray[description].name : null;
  const getTitle = (target: any) => {
    return target[descriptionText];
  };
  const descriptionTitle = getTitle(descriptionTitles);
  let descriptionCopy;
  const getParagraphs = (target: any) => {
    return target[0][descriptionText];
  };
  if (description !== null && descriptionArray) {
    descriptionCopy = getParagraphs(descriptionsCopies);
  }
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0 }}
      transition={{ duration: 0.3 }}
      key={`painpoint-extension-${pointNumber}-${description}-${title}`}
    >
      <div className='painpoint-extension'>
        <div className='row m0'>
          {description !== null ? (
            <DescriptionElement
              title={descriptionTitle}
              paragraphs={descriptionCopy}
            />
          ) : (
            <div>
              <div className='col col-auto pb-3'>
                <Chip
                  chipText={title}
                  helperClasses='selected'
                />
                <p>
                  {title && getPillarCopy(title as keyof typeof pillarsCopies)}
                </p>
              </div>
              <div className='col col-auto m-auto-0 pb-3'>
                {data.length > 1
                  ? 'The SKUs below are filtered to address your selected pain point'
                  : 'The SKU below addresses your selected pain point'}
              </div>
            </div>
          )}
        </div>
        {data && data.length ? (
          <div>
            {data.map((el: any, index: number) => (
              <PillarElement
                el={el}
                index={index}
                key={`pillar-element-${pointNumber}-${index}`}
                pointNumber={pointNumber}
              />
            ))}
          </div>
        ) : null}
        <div className='row justify-content-center'>
          <Button
            text='Close'
            btnType='ghost'
            triggerCallBack={closeExtension}
            customIcon={<Chevron />}
          />
        </div>
      </div>
    </motion.div>
  );
};
