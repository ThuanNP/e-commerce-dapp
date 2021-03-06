import { Injectable, Inject } from '@angular/core';
import { providers } from 'ethers';
import { EthereumMetamaskProviderToken } from '../../../core/services/tokens';
import { MarketPlaceAnchorModule } from '../../market-place-anchor.module';

@Injectable({ providedIn: MarketPlaceAnchorModule })
export class EthersWeb3Token extends providers.Web3Provider {
  constructor(@Inject(EthereumMetamaskProviderToken) web3Provider) {
    super(web3Provider);
  }
}
