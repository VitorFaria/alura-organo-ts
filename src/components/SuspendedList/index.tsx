import './SuspendedList.css'

interface SuspendedListProps {
    label: string;
    onAltered: (value: string) => void;
    isRequired: boolean;
    value: string;
    items: string[];
}

const SuspendedList = (props: SuspendedListProps) => {
    return (
        <div className='suspended-list'>
            <label>{props.label}</label>
            <select onChange={evento => 
                props.onAltered(evento.target.value)} 
                required={props.isRequired} 
                value={props.value}>
                <option value=""></option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default SuspendedList