handleSubmit(e) {
  e.preventDefault();

  // call the passed in function
  // pass it the current input value
  this.props.handleSave({ ...this.state });
}
