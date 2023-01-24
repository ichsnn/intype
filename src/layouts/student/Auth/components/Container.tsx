import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="min-h-screen flex">{children}</div>;
};

export default Container;
