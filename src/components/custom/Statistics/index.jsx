// styled components
import { Card, Info, Content } from "./style";

// components
import Widget from "components/custom/Widget";
import WidgetBody from "components/custom/Widget/WidgetBody";
import CountUp from "react-countup";
import { FaRegHospital } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const Statistics = ({ data }) => {
  const Icon = () => {
    switch (data.type) {
      default:
      case "cause":
        return <i className="icon-stomach" />;
      case "teeth":
        return <i className="icon-tooth" />;
      case "heart":
        return <i className="icon-monitor" />;
      case "clinic":
        return <FaRegHospital />;
      case "appointment":
        return <MdBookmarkAdded />;
      case "medic":
        return <FaUserDoctor />;
    }
  };

  const color = () => {
    //get a random color each time the component is rendered

    switch (data.type) {
      default:
      case "clinic":
        return "peach";
      case "appointment":
        return "teal";
      case "medic":
        return "green";
    }
  };

  return (
    <Widget name="Statistics">
      <WidgetBody>
        <Content>
          <Card className={color()}>
            <Icon />
          </Card>
          <Info>
            <CountUp
              className="value"
              start={0}
              end={data.value}
              delay={0}
              duration={1}
              enableScrollSpy
            />
            <p className="h3">{data.text}</p>
          </Info>
        </Content>
      </WidgetBody>
    </Widget>
  );
};

export default Statistics;
