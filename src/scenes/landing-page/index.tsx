import * as React from "react";
import Heading from "../../components/heading";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page__content">
        <Heading title="Hello TypeScript!" />
      </div>
    );
  }
}

export default LandingPage;
