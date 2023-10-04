

## Getting Started

Build and run the server

```bash
pnpm build && pnpm start
```

## Working page
- Navigate to http://localhost/preload/alex
- Run ```Array.from(document.querySelectorAll('[rel=\"preload\"]')).map(l => l.href)``` in the console. You'll have an array with many preload links

## Failing page
- Navigate to http://localhost/no-preload/alex
- Run ```Array.from(document.querySelectorAll('[rel=\"preload\"]')).map(l => l.href)``` in the console. The array is now empty.