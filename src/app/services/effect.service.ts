import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EffectService {
  anchorText: string = '';
  anchorLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  constructor() {}

  /**
   *
   * @requires `data-value` In the template, use `data-value` and the value of the element.
   * @param e The `MouseEvent` to to trigger the effect.
   */
  anchorHover(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');

    if (anchor instanceof HTMLAnchorElement) {
      const datasetValue = target.dataset['value'] || '';
      const randomLetters = Array.from(
        { length: anchor.innerHTML.length },
        () => this.anchorLetters[Math.floor(Math.random() * 36)]
      );

      let iterations = 0;

      const interval = setInterval(() => {
        if (iterations < datasetValue.length) {
          const resolved = anchor.innerHTML
            .split('')
            .map((letter, index) =>
              index <= iterations ? datasetValue[index] : randomLetters[index]
            )
            .join('');

          anchor.innerHTML = resolved;
        }

        if (iterations >= datasetValue.length) {
          clearInterval(interval);
        }

        iterations += 1;
      }, 40);
    }
  }
}
