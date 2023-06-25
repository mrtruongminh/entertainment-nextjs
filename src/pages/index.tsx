import Image from "next/image";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Grid from "@/components/Grid";
import data from "@/data.json";

// console.log(data);

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <Grid>
          {data.map((n) => (
            <Image
              src={n.thumbnail.regular.large}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          ))}
        </Grid>
      </Layout>
    </>
  );
}
