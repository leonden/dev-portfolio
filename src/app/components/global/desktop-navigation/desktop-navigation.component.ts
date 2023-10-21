import { Component } from '@angular/core';
import { EffectService } from 'src/app/services/effect.service';

@Component({
  selector: 'app-desktop-navigation',
  templateUrl: './desktop-navigation.component.html',
  styleUrls: ['./desktop-navigation.component.scss'],
})
export class DesktopNavigationComponent {
  constructor(private effect: EffectService) {}

  anchorHover(e: MouseEvent) {
    this.effect.anchorHover(e);
  }
}
