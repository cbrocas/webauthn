# webauthn

Two pages to get WebAuthn and Platform authenticator support from the current browser and platform.
- `interactive-WebAuthn-support-checker.html`: 
  - display WebAuthn and Platform authenticator support of the current browser
  - send these info to an URL passed to `SendInfo()` function
  - set a cookie (name: `WebAuthnCookie`) after the support checking and sending info. The cookie is then tested to prevent running the support check and info sending more than 1 time during a specific time frame. It will preserve your eventual analytics to be falsify by inadvertense.

- `WebAuthn-support-checker.html`: 
  - same as above but display nothing. Only do some console logging.
  
