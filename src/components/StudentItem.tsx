interface Props {
    student: {
        id: number;
        name: string;
        present: boolean;
    };
    onToggle: (id: number) => void;
}

const StudentItem: React.FC<Props> = ({ student, onToggle }) => {
    return (
        <div>
            <span>{student.name}</span>
            <button onClick={() => onToggle(student.id)}>
                {student.present ? 'Obecny' : 'Nieobecny'}
            </button>
        </div>
    );
};

export default StudentItem;
