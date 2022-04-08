import { useState } from 'react'



const App = () =>
{
  const [ votes, setVotes ] = useState( {
    good: 0,
    neutral: 0,
    bad: 0,
  } );

  const upVote = ( which ) => () =>
  {
    const newVotes = { ...votes }
    newVotes[ `${ which }` ] += 1
    setVotes( newVotes )
  }

  return (
    <div>
      <Feedback val={ votes } clickfunc={ upVote } />
      <Statistics val={ votes } />
    </div>
  )
}
const Feedback = ( props ) =>
{
  const btns = Object.keys( props.val )// [ 'good', 'neutral', 'bad' ]
  return (
    <div>
      <Title text={ 'send feedback' } />
      { btns.map( ( button ) =>
        < Button onClick={ props.clickfunc( button ) } text={ button } /> // key={button}
      ) }
    </div>
  )
}
const Button = ( props ) =>
{
  return (
    <>
      <button onClick={ props.onClick }>{ props.text }</button>
    </>
  )
}

const Statistics = ( props ) =>
{
  const valuesArr = Object.values( props.val )
  const isZerosVal = valuesArr.every( item => item === 0 )
  const all = valuesArr.reduce( ( partialSum, a ) => partialSum + a, 0 );
  const average = 1 / ( all / ( props.val.good - props.val.bad ) )
  const goodperc = 100 / all * props.val.good

  const noFeedback = <p>no feedback given</p>
  const statsTable = (
    <table>
      <tbody>
        <StatisticLine text='Good: ' value={ props.val.good } />
        <StatisticLine text='Neutral: ' value={ props.val.neutral } />
        <StatisticLine text='Bad: ' value={ props.val.bad } />
        <StatisticLine text='All: ' value={ all } />
        <StatisticLine text='Average: ' value={ average } />
        <StatisticLine text='Positive %: ' value={ goodperc } />
      </tbody>
    </table> )
  return (
    <div>
      <Title text={ 'statistics' } />
      { isZerosVal
        ? noFeedback
        : statsTable }
    </div>
  )
}
const StatisticLine = ( props ) =>
{
  return (
    <tr>
      <td>{ props.text }</td>
      <td>{ props.value }</td>
    </tr>
  )
}
const Title = ( props ) =>
{
  return (
    <h1>{ props.text }</h1>
  )
}

export default App