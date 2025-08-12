import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "PROJECT_ID", // <-- apna project id yaha daalo
      token: "5iqtFgsEdh4iNNfiApHk12OunkmcvPdwQ8T4QzFQk9XgSDsW8BATHymMpAAfcXTze6na9cO3UXOzbOwrJw"
    }
  ],
  preview: true
});
