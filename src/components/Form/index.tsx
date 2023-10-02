import { useState } from 'react'
import Button from '../Button'
import FieldText from '../FieldText'
import SuspendedList from '../SuspendedList'
import './Form.css'
import { ICollaborator } from '../../shared/interfaces/ICollaborator'

interface FormProps {
    onRegisteredCollaborator: (collaborator: ICollaborator) => void,
    teams: string[],
}

const FormElements = (props: FormProps) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onRegisteredCollaborator({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText 
                    isRequired={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    value={name}
                    onAltered={value => setName(value)}
                />
                <FieldText
                    isRequired={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    value={position}
                    onAltered={value => setPosition(value)}
                />
                <FieldText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    value={image}
                    onAltered={value => setImage(value)}
                />
                <SuspendedList
                    isRequired={true}
                    label="Time" 
                    items={props.teams}
                    value={team}
                    onAltered={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default FormElements