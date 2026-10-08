export type ProjectStatus = "shipped" | "in-progress" | "idea";

export type Project = {
  name: string;
  description: string;
  status: ProjectStatus;
  /** Path under /public, e.g. "/projects/my-app.png". Leave out to show a placeholder. */
  image?: string;
  /** Where "Try it" / "Follow along" points. Leave out for ideas. */
  url?: string;
};

// Edit this list to update the "What we're making" page.
export const projects: Project[] = [
  { name: "[PROJECT NAME]", description: "[One line on what it does and who it's for.]", status: "shipped", url: "#" },
  { name: "[PROJECT NAME]", description: "[One line on what it does and who it's for.]", status: "shipped", url: "#" },
  { name: "[PROJECT NAME]", description: "[One line on what it does and who it's for.]", status: "in-progress", url: "#" },
  { name: "[PROJECT NAME]", description: "[One line on what it does and who it's for.]", status: "in-progress", url: "#" },
  { name: "[PROJECT NAME]", description: "[One line on the idea.]", status: "idea" },
  { name: "[PROJECT NAME]", description: "[One line on the idea.]", status: "idea" },
];
