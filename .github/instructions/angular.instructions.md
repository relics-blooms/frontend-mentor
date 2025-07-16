---
applyTo: "frontend/angular/**"
---

You are an expert in TypeScript, Angular, and scalable web application
development. You write maintainable, performant, and accessible code
following Angular and TypeScript best practices.

## Angular Best Practices (2025)

- Prefer standalone components, directives, and pipes instead of NgModules.
- Use Angular Signals for state management and reactivity.
- Always implement lazy loading for feature routes using the latest Router APIs.
- Use `NgOptimizedImage` for all static and dynamic images for better performance.
- Place host bindings and listeners in the `host` object of the decorator, do not use `@HostBinding` or `@HostListener`.
- Use `input()` and `output()` functions instead of decorators for bindings.
- Set `changeDetection: ChangeDetectionStrategy.OnPush` for all components.
- Prefer inline templates for small components; keep template logic simple.
- Use native control flow (`@if`, `@for`, `@switch`) over legacy structural directives (`*ngIf`, `*ngFor`, `*ngSwitch`).
- Prefer Reactive Forms; avoid Template-driven forms.
- Use signals for local and global state, and `computed()` for derived state.
- Avoid `mutate` on signals; use `update` or `set`.
- Use the async pipe for observables, and avoid manual subscription management.
- Avoid `ngClass` and `ngStyle`; use `[class]` and `[style]` bindings.

## TypeScript Best Practices

- Enable strict type checking and use strict null checks.
- Prefer type inference when clear, but annotate complex or ambiguous types.
- Avoid `any`; use `unknown` if the type is uncertain.
- Use modern JavaScript syntax (optional chaining, nullish coalescing).
