

const useCardLook = (Component) => {
  return () => {
    return (
      <div className="bg-gray-700 p-10 rounded-2xl">
        <Component />
      </div>
    );
  };
};

export default useCardLook;
