import React from 'react';
import StudentItem from './StudentItem';

interface Student {
    id: number;
    name: string;
    present: boolean;
}

interface Props {
    students: Student[];
    onToggle: (id: number) => void;
}

const StudentList: React.FC<Props> = ({ students, onToggle }) => {
    return (
        <>
            <h2>Lista uczniów</h2>
            {students.map((student) => (
                <StudentItem key={student.id} student={student} onToggle={onToggle} />
            ))}
        </>
    );
};

export default StudentList;
