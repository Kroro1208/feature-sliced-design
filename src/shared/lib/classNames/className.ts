type ClassValue = string | Record<string, boolean> | undefined | null;

export const classNames = (...args: ClassValue[]): string => {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      if (typeof arg === 'string') return [arg];
      if (typeof arg === 'object') {
        return (
          Object.entries(arg)
            // trueの値を持つキーだけを取り出し
            .filter(([_, value]) => Boolean(value))
            .map((arg) => arg[0])
        );
      }
      return [];
    })
    .join(' ');
};
