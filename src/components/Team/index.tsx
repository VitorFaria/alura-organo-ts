import { ICollaborator } from '../../shared/interfaces/ICollaborator';
import Collaborator from '../Collaborator'
import './Team.css'

interface TeamProps {
    primaryColor: string;
    secondaryColor: string;
    name: string;
    collaborators: ICollaborator[];
}

const Team = (props: TeamProps) => {
    const css = { backgroundColor: props.secondaryColor }

    return (
        (props.collaborators.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => 
                    <Collaborator 
                        backgroundColor={props.primaryColor} 
                        key={collaborator.name} 
                        name={collaborator.name} 
                        position={collaborator.position} 
                        image={collaborator.image}
                    /> )}
            </div>
        </section> 
        : <></>
    )
}

export default Team