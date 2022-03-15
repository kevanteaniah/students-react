import ScoreList from "./ScoreList.jsx"

const Student = (props) => {
  return (
    <>
  <div className="card">
  <div className="card-body">
    <h5 className="card-title">{props.student.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">{props.student.bio}</p>
    
  </div>
</div>
        <ScoreList scores ={props.student.scores} />
      
    </>
  );
}

export default Student;