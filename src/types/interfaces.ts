export interface IBusinessPillars {
  name: string;
  values: string[];
}

export interface IStructuredPoint {
  description: string;
  businessFunctions: string[];
  businessPillars: IBusinessPillars[];
  growthStages: string[];
  experiences: string[];
}
