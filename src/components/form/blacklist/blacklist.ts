import competitor from './competitors.json';
import vendor from './vendor.json';
import personal from './personal.json';

export type TBlackMail = {
  name: 'competitor' | 'personal' | 'vendor';
  value: 'string';
};

const blacklist = [] as TBlackMail[];

competitor.forEach((el) =>
  blacklist.push({ name: 'competitor', value: el.competitors } as TBlackMail)
);
personal.forEach((el) =>
  blacklist.push({ name: 'personal', value: el.personal } as TBlackMail)
);
vendor.forEach((el) =>
  blacklist.push({ name: 'vendor', value: el.domain } as TBlackMail)
);

export { blacklist };
