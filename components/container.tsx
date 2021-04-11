export const Container = (props) => {
  return (
    <div
      id={props.id}
      className={`bg-yellow flex flex-col w-screen text-black`
        .concat(` `)
        .concat(props.className)}
    >
      {props.children}
    </div>
  );
};
