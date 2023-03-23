import './Step.css'

function Step({stepNum, title}) {
  return (
    <div className='step'>
        <span>{stepNum}</span>
        <div className="text">
            <p>Step {stepNum}</p>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Step