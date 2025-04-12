import { Component, Input } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-popup-overlay',
  imports: [SharedModule],
  templateUrl: './popup-overlay.component.html',
  styleUrls: ['./popup-overlay.component.scss'],
  standalone: true
})
export class PopupOverlayComponent {
  @Input() isVisible = false; // Controls visibility

  closePopup(): void {
    this.isVisible = false; // Hide the popup
  }
}