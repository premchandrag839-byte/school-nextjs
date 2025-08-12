import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { PLASMIC } from "../plasmic-init";
import {
  ComponentRenderData,
  PlasmicComponent,
  PlasmicRootProvider
} from "@plasmicapp/loader-nextjs";

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
}) {
  const { plasmicData } = props;
  if (!plasmicData) {
    return <div>Not found</div>;
  }
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
    </PlasmicRootProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await PLASMIC.fetchPages();
  return {
    paths: pages.map((p) => ({ params: { catchall: p.path.substring(1).split("/") } })),
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const plasmicPath = "/" + ((ctx.params?.catchall as string[]) ?? []).join("/");
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (!plasmicData) {
    return { notFound: true };
  }
  return {
    props: { plasmicData },
    revalidate: 60
  };
};
