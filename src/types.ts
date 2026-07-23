/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CompanySection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  bulletPoints?: string[];
  metrics?: { label: string; value: string; desc?: string }[];
}

export interface ProductSpec {
  name: string;
  tagline: string;
  description: string;
  advantages: string[];
  region: string;
  altitude: string;
  process: string;
  roastLevel: string;
  sensory: {
    aroma: string;
    body: string;
    acidity: string;
    flavorNotes: string[];
  };
  brewingRecommendation: {
    method: string;
    ratio: string;
    grindSize: string;
    temperature: string;
    instructions: string[];
  };
  packaging: {
    sizes: string[];
    material: string;
    features: string[];
  };
  targetMarket: string[];
  sellingPoints: string[];
}

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
  usage: string;
}

export interface TypographyStyle {
  name: string;
  fontFamily: string;
  weight: string;
  size: string;
  usage: string;
}

export interface BrandGuideline {
  colors: ColorSwatch[];
  typography: TypographyStyle[];
  logoPhilosophy: {
    element: string;
    meaning: string;
    icon: string;
  }[];
}
