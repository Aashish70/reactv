function withCardLook(WrappedComponent) {
  return () => {
    return (
      <>
        <div className="bg-blue-200 rounded mb-2 text-black">
          <h1>This is nested components.</h1>
          <WrappedComponent />
        </div>
      </>
    );
  };
}

export default withCardLook;
