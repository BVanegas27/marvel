import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";
export default function Comics() {
  const [renderComics, setRenderComics] = useState(10);
  const listComics = useFetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d88ae9c796545d66b47080b6c7201870&hash=b500a04b3538d43798e6a0c5d527791a&limit=10");
  console.log(listComics);
  return (
    <div className="comics-page">
      <div id="slide-comics-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Los mejores Comics</Header>
            <ListComics
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
