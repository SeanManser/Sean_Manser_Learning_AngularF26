import {effect, Service, signal} from '@angular/core';

@Service()
export class ThemeService {
  private readonly themeKey = 'greatestDogs.darkMode';

  private dark = signal(this.loadDarkMode());

  isDark = this.dark.asReadonly();

  constructor() {
    effect(() => {
      const dark = this.dark();
      document.body.classList.toggle('dark', dark);
      try {
        localStorage.setItem(this.themeKey, JSON.stringify(dark));
      } catch {
        // storage is full or blocked
      }
    });
  }

  private loadDarkMode(): boolean {
    try {
      return JSON.parse(localStorage.getItem(this.themeKey) ?? 'false') === true;
    } catch {
      return false;
    }
  }

  toggle(): void {
    this.dark.update((d) => !d);
  }


}
