import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideTranslocoScope } from '@ngneat/transloco';
import 'zone.js';

const loader = ['he', 'en'].reduce((ac, lang) => {
  ac[lang] = () => import(`./i18n/${lang}.json`);
  console.log({ ac });
  return ac;
}, {} as Record<string, () => Promise<Record<string, string>>>);
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideTranslocoScope({scope: 'ba', loader})],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}
bootstrapApplication(App);
