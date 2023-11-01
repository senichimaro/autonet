import Card from "../elements/Card/Card";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query Query {
    getPosts {
      id
      title
      body
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <p>...error :(</p>;
  return (
    <>Posts
        <ol className="d-flex flex-wrap justify-content-between">
          {data.getPosts.map((post) => (
              <Card 
                key={post.id} 
                title={post.title} 
                body={post.body} 
                userId={post.userId} 
                id={post.id}
              />
          ))}
        </ol>
    </>
  );
}