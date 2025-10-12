import { Component } from '@angular/core';
import { CommonTableFeed } from '../../../shared/components/common-table-feed/common-table-feed';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonTableFeed],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
