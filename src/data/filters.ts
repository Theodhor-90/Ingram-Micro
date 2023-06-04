import { IStructuredPoint } from './getStructuredPainPoints';

export const singleInputFilter = (
  data: IStructuredPoint[],
  criteria: keyof IStructuredPoint,
  value: any
) => {
  const result = [];
  data.forEach((painPoint) => {
    if (painPoint[criteria].includes(value)) {
      result.push(painPoint);
    }
  });
};

export const multipleInputFilter = (
  data: IStructuredPoint[],
  criteria: string,
  value: any
) => {
  const result = [];
  data.forEach((painPoint: IStructuredPoint) => {
    let isIncluded = false;
    value.forEach((el: any) => {
      if (painPoint[criteria as keyof typeof painPoint].includes(el)) {
        isIncluded = true;
      }
    });
    if (isIncluded) {
      result.push(painPoint);
    }
  });
};
