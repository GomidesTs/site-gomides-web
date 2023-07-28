type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 lg:max-w-5xl">{children}</div>
  );
};
