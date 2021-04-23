import { readFile } from "fs/promises";
import { BagOfCrafting } from "bagofcrafting";
import { XmlParser } from "bagofcrafting";
import ItemEntry from "../components/ItemEntry";

import styles from "./index.module.css";

type StaticProps = {
  itempools: string,
  items_metadata: string,
  items: string
};

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  return {
    props: {
      itempools: await readFile("assets/itempools.xml", "utf8"),
      items_metadata: await readFile("assets/items_metadata.xml", "utf8"),
      items: await readFile("assets/items.json", "utf8")
    }
  };
}

export default function Home({ itempools, items_metadata, items }: StaticProps) {
  let bag: BagOfCrafting = new BagOfCrafting(XmlParser.loadPools(itempools), XmlParser.loadMeta(items_metadata));
  return <div className={styles.main}>
    <ItemEntry bag={bag} components={[1, 1, 1, 1, 1, 1, 1, 1]} items={JSON.parse(items)} />
  </div>
}
