import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OrdersQueries } from '../restaurant/queries/orders.queries';
import { MenuItem } from './models';
import { ReservedTablesComponent } from './components/reserved-tables/reserved-tables.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatLegacyButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatLegacyListModule,
    NgFor,
    NgIf,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    ReservedTablesComponent
  ],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @Input()
  menuItems: MenuItem[];

  @Input()
  appTitle = 'NGXS Diner';

  clickToClose = false;

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  menuItemAction(item: MenuItem): boolean {
    if (item && item.actionOnClick) {
      return item.actionOnClick();
    }
    return true;
  }

  openExternal(item: MenuItem): boolean {
    if (item && item.externalLink) {
      window.open(item.externalLink, '_blank');
      return true;
    }
    return false;
  }
}
