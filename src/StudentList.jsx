import Student from "./Student.jsx"

const StudentList = (props) => {
  return (
    <>
      <h4>{props.students.map(student => 
      <Student key={student.name} student={student}/>
      )}</h4>
    </>
  )
}

export default StudentList