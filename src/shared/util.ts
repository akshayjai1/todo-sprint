export const getInitials = (name: string): string =>
  (name || '')
    ?.split?.(' ')
    .map((e) => e[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() ?? '';
