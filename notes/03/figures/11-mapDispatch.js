const mapDispatchToProps = dispatch => {
  return {
    handleSave: data => {
      // dispatch the action
      dispatch(step(data));

      // go to the homepage
      history.push("/");
    },
  };
};
