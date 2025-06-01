import { useState } from 'react';
import Clock from './components/Clock';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';

interface Student {
    id: number;
    name: string;
    present: boolean;
}

function App() {
    const [students, setStudents] = useState<Student[]>([]);
    const [showClock, setShowClock] = useState(true);
    const [showList, setShowList] = useState(true);
    const [showForm, setShowForm] = useState(true);

    function addStudent(name: string) {
        const newStudent: Student = {
            id: Date.now(),
            name,
            present: false,
        };
        setStudents([...students, newStudent]);
    }

    function togglePresence(id: number) {
        setStudents((prev) =>
            prev.map((s) =>
                s.id === id ? { ...s, present: !s.present } : s
            )
        );
    }

    return (
        <>
            <h1>BellBuddy - Zarządzanie klasą</h1>

            <button onClick={() => setShowClock(!showClock)}>Pokaż/Ukryj Zegar</button>
            <button onClick={() => setShowList(!showList)}>Pokaż/Ukryj Listę Uczniów</button>
            <button onClick={() => setShowForm(!showForm)}>Pokaż/Ukryj Formularz</button>

            {showClock && <Clock />}
            {showForm && <AddStudentForm onAdd={addStudent} />}
            {showList && <StudentList students={students} onToggle={togglePresence} />}
        </>
    );
}

export default App;