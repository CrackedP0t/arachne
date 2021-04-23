import { readFile } from 'fs/promises';
import { BagOfCrafting } from "bagofcrafting";
// import { ItemPool, ItemQualities } from "bagofcrafting";
import { XmlParser } from "bagofcrafting";
import ItemEntry from "../components/ItemEntry";

type StaticProps = {
  itempools: string,
  items_metadata: string
};

export async function getStaticProps(): Promise<{props: StaticProps}> {
  return {
    props: {
      itempools: await readFile("assets/itempools.xml", "utf8"),
      items_metadata: await readFile("assets/items_metadata.xml", "utf8")
    }
  };
}

export default function Home({ itempools, items_metadata }: StaticProps) {
  let bag: BagOfCrafting = new BagOfCrafting(XmlParser.loadPools(itempools), XmlParser.loadMeta(items_metadata));
  return <div>
      <ItemEntry bag={bag}></ItemEntry>
    </div>
}
