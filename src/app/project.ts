import { TechnologyLogo } from './technologyLogo';

export interface Project {
  name: string;
  url?: string;
  description: string;
  websiteImage: string;
  sourceCode: string;
  technologyLogos: TechnologyLogo[];
}