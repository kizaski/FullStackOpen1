const App = () =>
{
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

  let exercises_sum = 0
  for ( const val of parts.filter( x => x.exercises ) )
  {
    exercises_sum += val.exercises
  }

  let content = []
  for ( let i = 0; i < parts.length; i++ )
  {
    content.push(
      <Content name={ parts.at( i ).name } exercises={ parts.at( i ).exercises } />
    )
  }

  return (
    <div>
      <Header title={ course } />
      { content }
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