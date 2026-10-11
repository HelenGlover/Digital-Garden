import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue, ClassDictionary } from "clsx";

export function cn(...inputs: Array<ClassValue>): string {
  return twMerge(clsx(inputs));
}

export function resolveClasses(
  baseClasses: string,
  secondaryClasses?: string,
  otherClasses?: ClassDictionary,
): string {
  if (secondaryClasses == null && otherClasses == null) return cn(baseClasses);

  let classDict: ClassDictionary = {};

  if (otherClasses != null && Object.keys(otherClasses).length > 0) {
    classDict = { ...otherClasses };
  }
  if (secondaryClasses != null && secondaryClasses.length > 0) {
    classDict[secondaryClasses] = true;
  }

  return cn(baseClasses, classDict);
}
