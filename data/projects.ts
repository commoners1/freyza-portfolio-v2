import { mergeTags } from "@/lib/mergeTags";
import { projectDetails } from "./project-details";
import { legacyProjects } from "./projects-legacy";
import { professionalProjects } from "./projects-professional";
import { portfolioTagSources } from "./project-tag-sources";
import type { Project } from "./types";

function enrichProject(project: Project): Project {
  const sourceTags = portfolioTagSources[project.title];
  const details = projectDetails[project.title];

  return {
    ...project,
    ...(details ?? {}),
    tags: sourceTags ? mergeTags(project.tags, sourceTags) : project.tags,
  };
}

export const projects = [...professionalProjects, ...legacyProjects].map(enrichProject);
