import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecondsAMinutes'
})
export class MillisecondsAMinutesPipe implements PipeTransform {

  transform(value: number): string {

      let seconds = Math.floor(value / 1000);

      let minutes = Math.floor(seconds / 60);
      let secondsRemaining = seconds % 60;

      let formatSeconds = secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining;

      return `${minutes}:${formatSeconds}`;
  }

}
