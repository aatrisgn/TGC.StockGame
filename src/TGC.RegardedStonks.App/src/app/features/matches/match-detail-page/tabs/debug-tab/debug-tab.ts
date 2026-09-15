import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { GetMatchByIdQueryResponse } from '../../../../../auto_generated/client/models';

@Component({
  selector: 'app-debug-tab',
  imports: [JsonPipe],
  templateUrl: './debug-tab.html',
  styleUrl: './debug-tab.scss'
})
export class DebugTab {
  readonly payload = input<GetMatchByIdQueryResponse>();
}
