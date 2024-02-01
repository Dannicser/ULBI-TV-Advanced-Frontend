type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined>): string => {
  const filteredMods = Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className, value]) => className);

  return [cls, ...additional.filter(Boolean), ...filteredMods].join(" ");
};

// cls - главный класс
// mods -
// позволяет удобно комбинировать классы
