import { Card, Header } from "semantic-ui-react";
import Container from "../Container/Container";
import "./ListLastEvent.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";

export default function ListLastEvent() {
  const lastEventsFetch = useFetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d88ae9c796545d66b47080b6c7201870&hash=b500a04b3538d43798e6a0c5d527791a&limit=5");
  
  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container>
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventsFetch={lastEventsFetch} />
        </Card.Group>
      </Container>
    </div>
  );
}
