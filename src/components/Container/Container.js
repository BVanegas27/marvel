import { Container as Content } from "semantic-ui-react";
import "./Container.scss";
export default function Container({ children, bg}) {
  //http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d88ae9c796545d66b47080b6c7201870&hash=b500a04b3538d43798e6a0c5d527791a

  return (
    <div className={bg ? '' : 'container-bg'}>
      <Content>{children}</Content>
    </div>
  );
}