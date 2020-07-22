import { TechnologyLogo } from './technologyLogo';

export interface Project {
  name: string;
  description: string;
  websiteImage: string;
  sourceCode: string;
  technologyLogos: TechnologyLogo[];
}