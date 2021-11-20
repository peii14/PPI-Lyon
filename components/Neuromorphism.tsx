
import n from "../styles/Neuromorphism.module.css";
const Neuromorphism: React.FC = (props: any) => {
  return (
    <div className='cursor-pointer'>
      <div className={n.Neuro}>{props.children}</div>
    </div>
  );
};

export default Neuromorphism;
