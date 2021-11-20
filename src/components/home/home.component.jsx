import { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../../redux/candidate/actions/candidate.actions";

const Home = ({ candidates, getData }) => {
  // Use useEffect hook to dispatch data async action
  useEffect(() => {
    getData();
  }, []);

  return <div>Hello from Home Component</div>;
};

const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
