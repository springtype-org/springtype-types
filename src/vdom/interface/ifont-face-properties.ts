import { Property } from 'csstype';

export interface FontFaceProperties {
  MozFontFeatureSettings?: Property.FontFeatureSettings;
  fontDisplay?: 'auto' | 'block' | 'fallback' | 'optional' | 'swap' | (string & {});
  fontFamily?: Property.FontFamily;
  fontFeatureSettings?: Property.FontFeatureSettings;
  fontStretch?: Property.FontStretch;
  fontStyle?: Property.FontStyle;
  fontVariant?: Property.FontVariant;
  fontVariationSettings?: Property.FontVariationSettings;
  fontWeight?: Property.FontWeight;
  src?: string;
  unicodeRange?: string;
}
