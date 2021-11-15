import n from '../styles/Neuromorphism.module.css'

const Neuromorphism: React.FC = (props: any)=>{
    return(
        <div className={n.Neuro}>
            {props.children}
        </div>
    )
}
export default Neuromorphism;