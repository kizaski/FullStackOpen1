const course = 'Half Stack application development'
const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

const App = () =>
{
  let exercises_sum = 0
  for ( const val of parts.filter( x => x.exercises ) )
  {
    exercises_sum += val.exercises
  }

  return (
    <div>
      <Header title={ course } />
      <Content data={ parts } />
      <TotalExercises sum={ exercises_sum } />
    </div >
  )
}

const TotalExercises = ( props ) =>
{
  return (
    <p>Number of exercises { props.sum }</p>
  )
}

const Content = ( props ) =>
{
  return (
    <div>
      <Part name={ parts[ 0 ].name } exercises={ parts[ 0 ].exercises } />
      <Part name={ parts[ 1 ].name } exercises={ parts[ 1 ].exercises } />
      <Part name={ parts[ 2 ].name } exercises={ parts[ 2 ].exercises } />
    </div>
  )
}

const Part = ( props ) =>
{
  return (
    <p>
      { props.name } { props.exercises }
    </p>
  )
}

const Header = ( props ) =>
{
  return (
    <h1>{ props.title }</h1>
  )
}

export default App