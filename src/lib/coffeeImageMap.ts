/**
 * Coffee Origin Image Mapping
 * Note: Images are now directly specified in coffee-beans.json
 * This file is kept for backwards compatibility but is no longer needed
 */

export function getCoffeeImage(nameAr: string): string {
  // Images are now stored directly in the bean.image field
  return `/images/${nameAr}.png`;
}

export function hasCoffeeImage(nameAr: string): boolean {
  // All beans now have images defined in JSON
  return true;
}
