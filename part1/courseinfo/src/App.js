const App = () =>
{
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ],
    exercises_sum: () =>
    {
      let exercises_sum = 0
      for ( const val of course.parts.filter( x => x.exercises ) )
      {
        exercises_sum += val.exercises
      }
      return exercises_sum
    }
  }

  return (
    <div>
      <Header title={ course.name } />
      <Content parts={ course.parts } />
      <Total data={ course.exercises_sum() } />
    </div >
  )
}

const Total = ( props ) =>
{
  return (
    <p>Number of exercises { props.data }</p>
  )
}

const Content = ( props ) =>
{
  return (
    <div>
      { props.parts.map( part => <Part name={ part.name } exercises={ part.exercises } /> ) }
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