import { Injectable, OnDestroy } from '@angular/core';
import { LocalStorageService } from '@shared';
import { BehaviorSubject, Observable, Subject, Subscription, timer } from 'rxjs';
import { share } from 'rxjs/operators';
import { currentTimestamp, filterObject } from './helpers';
import { Token } from './interface';
import { BaseToken } from './token';
import { TokenFactory } from './token-factory.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements OnDestroy {
  private key = 'oee-token';

  private change$ = new BehaviorSubject<BaseToken | undefined>(undefined);
  private refresh$ = new Subject<BaseToken | undefined>();
  private timer$?: Subscription;

  private _token?: BaseToken;

  constructor(
    private store: LocalStorageService,
    private factory: TokenFactory
  ) {}

  private get token(): BaseToken | undefined {
    if (!this._token) {
      this._token = this.factory.create(this.store.get(this.key));
    }

    return this._token;
  }

  change(): Observable<BaseToken | undefined> {
    return this.change$.pipe(share());
  }

  refresh(): Observable<BaseToken | undefined> {
    this.buildRefresh();

    return this.refresh$.pipe(share());
  }

  set(token?: Token): TokenService {
    this.save(token);

    return this;
  }


  clear(): void {
    console.log('t');
    this.save();
  }

  valid(): boolean {
    return this.token?.valid() ?? false;
  }

  getBearerToken(): string {
    return this.token?.getBearerToken() ?? '';
  }

  getRefreshToken(): string | void {
    return this.token?.refresh_token;
  }

  ngOnDestroy(): void {
    this.clearRefresh();
  }

  private save(token?: Token): void {
    console.log(token);
    this._token = undefined;

    if (!token) {
      console.log(this.key);
      this.store.remove(this.key);
    } else {
      const value = Object.assign({ access_token: 'Bearer:' + token.token, token_type: 'Bearer' }, token, {
        exp: token.expires_in,
      });
      console.log(token);
      this.store.set(this.key, filterObject(value));
      this.store.set('rolename', token.rolename);
      this.store.set('ischild', token.ischild);
    }

    this.change$.next(this.token);
    this.buildRefresh();
  }

  private buildRefresh() {
    this.clearRefresh();

    if (this.token?.needRefresh()) {
      this.timer$ = timer(this.token.getRefreshTime() * 1000).subscribe(() => {
        this.refresh$.next(this.token);
      });
    }
  }

  private clearRefresh() {
    if (this.timer$ && !this.timer$.closed) {
      this.timer$.unsubscribe();
    }
  }
}
