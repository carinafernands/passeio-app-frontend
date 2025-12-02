import { AuthConfig } from 'angular-oauth2-oidc';


export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '35997657676-8c1jedumgg966bv334qje2rkbve4gup1.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
};

