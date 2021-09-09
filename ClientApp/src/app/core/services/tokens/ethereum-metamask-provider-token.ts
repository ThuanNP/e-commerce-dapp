import { InjectionToken } from '@angular/core';

export const EthereumMetamaskProviderToken = new InjectionToken(
  'Ethereum provider',
  {
    providedIn: 'root',
    factory: () => (window as any).ethereum,
  }
);
