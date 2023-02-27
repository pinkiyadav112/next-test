import storyData from "../../stories";
export default function Story({ story }) {
  return (
    <>
      <main>
        <article>
          <h1>{story.Title}</h1>
          <p>{story.Text}</p>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const stories = storyData;
  const paths = stories.map((story) => ({
    params: { slug: story.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const story = storyData.find((p) => p.Slug === slug);

  return {
    props: { story },
  };
}
