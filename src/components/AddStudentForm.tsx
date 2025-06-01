import React, { useState } from 'react';

interface Props {
    onAdd: (name: string) => void;
}

const AddStudentForm: React.FC<Props> = ({ onAdd }) => {
    const [name, setName] = useState('');

    return (
        <>
            <input
                type="text"
                value={name}
                placeholder="Imię ucznia"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                if (name.trim()) {
                    onAdd(name);
                    setName('');
                }
            }}>
                Dodaj ucznia
            </button>
        </>
    );
};

export default AddStudentForm;
