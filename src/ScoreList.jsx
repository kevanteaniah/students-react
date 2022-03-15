import Score from "./Score.jsx"

const ScoreList = (props) => {
  return (
    <>

      <h4>{props.scores.map(score => 
      <Score key={score.date} score={score}/>
      )}</h4>
    </>
  )
}

export default ScoreList