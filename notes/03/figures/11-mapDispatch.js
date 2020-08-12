const mapDispatchToProps = dispatch => {
  return {
    handleSave: value => {
      // dispatch the action
      dispatch(step(value));

      // go to the homepage
      history.push("/");
    },
  };
};
