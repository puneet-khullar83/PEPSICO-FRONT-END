import React from "react";
import messages from "./../../assets/Local/messages";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const { lang } = this.props;
    //const message = messages[lang];
    console.log(lang);
    return (
      <div className="container my-5">
        <p>
          What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Home);
