const Student = (props) => {
  return (
    <>
      <h2>
        {props.student.name}
        {props.student.bio}
      </h2>
    </>
  )
}

export default Student