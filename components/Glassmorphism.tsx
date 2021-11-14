const Glassmorphism: React.FC = (props: any) => {
  return (
    <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-10 w-full ">
      {props.children}
    </div>
  );
};

export default Glassmorphism;
