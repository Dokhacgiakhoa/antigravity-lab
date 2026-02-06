/**
 * Helper to localize content based on locale.
 * Supports the pattern: key (default/vi) vs key_En (english)
 */
export function localize(data: any, key: string, locale: string): any {
  if (!data) return undefined;

  // If asking for 'vi', return the root key directly
  if (locale === 'vi') {
    return data[key];
  }

  // If asking for 'en'
  if (locale === 'en') {
    const enKey = `${key}_En`;
    const enKeyCamel = `${key}En`; // Support camelCase pattern (e.g. descEn)
    
    // Check underscore first
    if (data[enKey]) return data[enKey];
    // Check camelCase second
    if (data[enKeyCamel]) return data[enKeyCamel];
  }

  // Fallback to default/root
  return data[key];
}
