import { Injectable } from '@angular/core';

/**
 * Service that handle the localstorage
 *
 * See {@link https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage}
 */
@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  /**
   * Get a value from the key in localstorage
   */
  get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return;
  }

  /**
   * Save a value from the key in localstorage
   */
  save(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Update a value from the key in localstorage
   */
  update(key: string, prop: string, propValue: any) {
    const value = this.get(key);
    if (value) {
      value[prop] = propValue;
      return this.save(key, value);
    }
    return;
  }

  /**
   * Remove a value from the key in localstorage
   */
  remove(key: string) {
    return localStorage.removeItem(key);
  }

  /**
   * Clear the localstorage
   */
  clear() {
    return localStorage.clear();
  }
}
