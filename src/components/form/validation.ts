import * as yup from 'yup';

export const salesSupportSchema = yup.object().shape({
  firstName: yup.string().required('firstName-First Name field is required'),
  lastName: yup.string().required('lastName-Last Name field is required'),
  email: yup
    .string()
    .required('email-Email is required')
    .email('email-Email must be a valid input'),
  bcn: yup.string().required('bcn-BCN field is required'),
  company: yup.string().required('company-Company field is required'),
  country: yup.string().required('country-Country field is required'),
  growthsolution: yup
    .string()
    .required('growthsolution-Interested Growth Solution Areas is required'),
  consent: yup.boolean(),
  phone: yup.string().required('phone-Phone Number field is required'),
  iagree: yup
    .boolean()
    .required('iagree-Privacy Policy terms must be accepted')
    .isTrue('iagree-Privacy Policy terms must be accepted'),
  stateProv: yup.string().when('country', {
    is: 'United States',
    then: yup.string().required('stateProv-State field is required'),
  }),
  title: yup.string().required('title-Title field is required'),
});
