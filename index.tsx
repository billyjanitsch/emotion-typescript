export default function withUselessHOC<P>(
  BaseComponent: (props: P) => JSX.Element
): (props: P) => JSX.Element {
  return function ComponentWithUselessHOC(props) {
    return <BaseComponent {...props} />;
  };
}
