import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take, tap, filter, switchMap, catchError } from 'rxjs/operators';
import * as fromRoot from '../store';

@Injectable({
  providedIn: 'root',
})
export class MetaMaskConnectGuard implements CanLoad {
  constructor(private store: Store<fromRoot.AppState>) {}

  canLoad(): Observable<boolean> {
    return this.store.pipe(
      select(fromRoot.getEthereumConnected),
      tap((connected) => {
        if (!connected) {
          this.store.dispatch(
            fromRoot.ErrorActions.errorMessage({
              errorMsg: `Không thể kết nối đến tài khoản Ethereum.`,
            })
          );
          this.store.dispatch(
            fromRoot.Web3GatewayActions.ethereumConnectRedirect()
          );
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
