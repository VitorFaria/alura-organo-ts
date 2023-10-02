import './FieldText.css'

interface FieldTextProps {
    placeholder: string;
    onAltered: (value: string) => void;
    label: string;
    value: string;
    isRequired: boolean;
}

const FieldText = ({placeholder, onAltered, label, value, isRequired}: FieldTextProps) => {

    const modifiedPlaceholder = `${placeholder}...` 

    const onTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
        onAltered(event.target.value)
    }

    return (
        <div className="field-text">
            <label>
                {label}
            </label>
            <input value={value} onChange={onTyped} required={isRequired} placeholder={modifiedPlaceholder}/>
        </div>
    )
}

export default FieldText