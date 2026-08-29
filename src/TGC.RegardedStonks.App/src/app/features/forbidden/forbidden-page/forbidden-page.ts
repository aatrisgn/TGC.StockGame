import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forbidden-page',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './forbidden-page.html',
  styleUrl: './forbidden-page.scss'
})
export class ForbiddenPage {}
