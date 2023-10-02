import './Collaborator.css'

interface CollaboratorProps {
    name: string;
    image: string;
    position: string;
    backgroundColor: string;
}

const Collaborator = ({ name, image, position, backgroundColor }: CollaboratorProps) => {
    return (<div className='collaborator'>
        <div className='header' style={{ backgroundColor: backgroundColor }}>
            <img src={image} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>)
}

export default Collaborator