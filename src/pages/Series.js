import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";
export default function Series() {
  const listSeries = useFetch("http://gateway.marvel.com/v1/public/series?ts=1&apikey=d88ae9c796545d66b47080b6c7201870&hash=b500a04b3538d43798e6a0c5d527791a&limit=20");
  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Las últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
