export default function Wrapper({children}: React.PropsWithChildren) {
  return <div className="grid grid-cols-[minmax(0,300px),auto] gap-16 max-w-6xl mx-auto">
    {children}
  </div>
}