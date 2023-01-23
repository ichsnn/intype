export default function Wrapper({ children }: React.PropsWithChildren) {
  return <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">{children}</div>;
}
