import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wWHyaBbW9UpmgJ6WJ21M8L",  // ID of a project you are using
      token: "5iqtFgsEdh4iNNfiApHk12OunkmcvPdwQ8T4QzFQk9XgSDsW8BATHymMpAAfcXTze6na9cO3UXOzbOwrJw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
