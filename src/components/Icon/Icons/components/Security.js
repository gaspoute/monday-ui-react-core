/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Security = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.1445 17.2207L10.1425 17.2214C10.0429 17.2597 9.93171 17.2597 9.83206 17.2214L9.83016 17.2207L9.07282 16.9322C9.07269 16.9322 9.07255 16.9321 9.07242 16.9321C7.29367 16.2511 5.76766 15.0571 4.69352 13.5087C3.61941 11.9604 3.04693 10.1296 3.04982 8.257V8.25584V5.57569C4.35309 5.63401 5.65741 5.40897 6.86881 4.91199C8.04682 4.42872 9.10257 3.70238 9.96683 2.78522C11.6304 4.65547 14.0392 5.56145 16.9248 5.53311L16.9248 8.25584L16.9248 8.257C16.9277 10.1296 16.3552 11.9604 15.2811 13.5087C14.207 15.0571 12.6809 16.2511 10.9022 16.9321C10.9021 16.9321 10.9019 16.9322 10.9018 16.9322L10.1445 17.2207Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.8131 8.15966C13.1392 8.41512 13.1964 8.88653 12.9409 9.21259L10.5905 12.2126C10.3487 12.5211 9.91018 12.5915 9.58405 12.3741L8.08405 11.3741C7.73941 11.1443 7.64628 10.6787 7.87604 10.334C8.10581 9.98936 8.57146 9.89623 8.9161 10.126L9.83812 10.7407L11.7602 8.28748C12.0156 7.96142 12.487 7.9042 12.8131 8.15966Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Security.displayName = 'Security';
Security.propTypes = {
  size: PropTypes.string
}
export default Security;
/* tslint:enable */
/* eslint-enable */