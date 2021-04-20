export const Container = (props) => {
  return (
    <div
      id={props.id}
      className={`flex flex-col w-screen text-black`
        .concat(` `)
        .concat(props.className)}
    >
      {props.children}
    </div>
  );
};
