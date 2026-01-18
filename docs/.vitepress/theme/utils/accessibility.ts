/**
 * OpenProtocol Design System - Accessibility Utilities
 * WCAG 2.1 Level AA Compliant
 */

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

// Focus Management
export class FocusManager {
  private static previousFocus: HTMLElement | null = null;

  static trapFocus(containerElement: HTMLElement): void {
    if (!isBrowser) return;

    const focusableElements = this.getFocusableElements(containerElement);
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    containerElement.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();
  }

  static saveFocus(): void {
    if (!isBrowser) return;
    this.previousFocus = document.activeElement as HTMLElement;
  }

  static restoreFocus(): void {
    if (!isBrowser) return;
    if (this.previousFocus && typeof this.previousFocus.focus === 'function') {
      this.previousFocus.focus();
      this.previousFocus = null;
    }
  }

  static getFocusableElements(container: HTMLElement): NodeListOf<Element> {
    const selector = `
      a[href],
      button:not([disabled]),
      textarea:not([disabled]),
      input:not([disabled]),
      select:not([disabled]),
      [tabindex]:not([tabindex="-1"])
    `.trim().replace(/\s+/g, ' ');

    return container.querySelectorAll(selector);
  }

  static moveFocusToFirstError(formElement: HTMLElement): void {
    if (!isBrowser) return;
    const firstError = formElement.querySelector('[aria-invalid="true"]') as HTMLElement;
    if (firstError) {
      firstError.focus();
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// ARIA Manager
export class AriaManager {
  private static liveRegion: HTMLElement | null = null;

  static announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!isBrowser) return;

    if (!this.liveRegion) {
      this.liveRegion = document.createElement('div');
      this.liveRegion.id = 'aria-live-region';
      this.liveRegion.setAttribute('aria-live', priority);
      this.liveRegion.setAttribute('aria-atomic', 'true');
      this.liveRegion.className = 'sr-only';
      document.body.appendChild(this.liveRegion);
    }

    // Update priority if needed
    this.liveRegion.setAttribute('aria-live', priority);

    // Clear and set to ensure announcement
    this.liveRegion.textContent = '';
    setTimeout(() => {
      if (this.liveRegion) {
        this.liveRegion.textContent = message;
      }
    }, 100);
  }

  static setLoadingState(element: HTMLElement, isLoading: boolean): void {
    if (!isBrowser) return;
    element.setAttribute('aria-busy', isLoading.toString());

    if (isLoading) {
      const originalText = element.textContent || '';
      element.dataset.originalText = originalText;
      element.textContent = 'Loading...';
    } else {
      if (element.dataset.originalText) {
        element.textContent = element.dataset.originalText;
        delete element.dataset.originalText;
      }
    }
  }

  static setExpandedState(trigger: HTMLElement, target: HTMLElement, isExpanded: boolean): void {
    if (!isBrowser) return;
    trigger.setAttribute('aria-expanded', isExpanded.toString());
    target.setAttribute('aria-hidden', (!isExpanded).toString());

    if (isExpanded) {
      target.style.display = 'block';
    } else {
      target.style.display = 'none';
    }
  }

  static setErrorState(input: HTMLInputElement, errorMessage: string): void {
    if (!isBrowser) return;
    const errorId = `${input.id}-error`;

    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', errorId);

    let errorElement = document.getElementById(errorId);
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.id = errorId;
      errorElement.className = 'error-message';
      errorElement.setAttribute('role', 'alert');
      input.parentElement?.appendChild(errorElement);
    }

    errorElement.textContent = errorMessage;
  }

  static clearErrorState(input: HTMLInputElement): void {
    if (!isBrowser) return;
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');

    const errorId = `${input.id}-error`;
    const errorElement = document.getElementById(errorId);
    errorElement?.remove();
  }
}

// Contrast Checker
export class ContrastChecker {
  static hexToRGB(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  }

  static getRelativeLuminance(rgb: { r: number; g: number; b: number }): number {
    const rsRGB = rgb.r / 255;
    const gsRGB = rgb.g / 255;
    const bsRGB = rgb.b / 255;

    const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  static calculateContrastRatio(foreground: string, background: string): number {
    const fgRGB = this.hexToRGB(foreground);
    const bgRGB = this.hexToRGB(background);

    const fgLuminance = this.getRelativeLuminance(fgRGB);
    const bgLuminance = this.getRelativeLuminance(bgRGB);

    const lighter = Math.max(fgLuminance, bgLuminance);
    const darker = Math.min(fgLuminance, bgLuminance);

    return (lighter + 0.05) / (darker + 0.05);
  }

  static meetsWCAGRequirement(
    ratio: number,
    level: 'AA' | 'AAA',
    fontSize: number,
    isBold: boolean = false
  ): boolean {
    const isLargeText = (fontSize >= 18 && isBold) || fontSize >= 24;

    if (level === 'AA') {
      return isLargeText ? ratio >= 3.0 : ratio >= 4.5;
    } else {
      return isLargeText ? ratio >= 4.5 : ratio >= 7.0;
    }
  }
}

// Keyboard Navigation
export class KeyboardNavigation {
  static handleArrowNavigation(
    items: HTMLElement[],
    currentIndex: number,
    key: string
  ): number {
    let newIndex = currentIndex;

    switch (key) {
      case 'ArrowDown':
      case 'ArrowRight':
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        newIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = items.length - 1;
        break;
    }

    if (isBrowser) {
      items[newIndex]?.focus();
    }
    return newIndex;
  }

  static handleRovingTabIndex(items: HTMLElement[], activeIndex: number): void {
    if (!isBrowser) return;
    items.forEach((item, index) => {
      item.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
    });
  }
}

// Utility Functions
export function createSROnlyElement(text: string): HTMLSpanElement | null {
  if (!isBrowser) return null;
  const element = document.createElement('span');
  element.className = 'sr-only';
  element.textContent = text;
  return element;
}

export function createSkipLink(targetId: string, text: string): HTMLAnchorElement | null {
  if (!isBrowser) return null;

  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.className = 'skip-link';
  skipLink.textContent = text;

  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus();
      target.scrollIntoView();
    }
  });

  return skipLink;
}

export function generateUniqueId(): string {
  return `ds-${Math.random().toString(36).substr(2, 9)}-${Date.now().toString(36)}`;
}
