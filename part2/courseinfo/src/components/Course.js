const Course = ( { course } ) =>
{
  return (
    <div>
      <Header course={ course } />
      <Content course={ course } />
      <Total course={ course } />
    </div>
  )
}

const Header = ( { course } ) =>
{
  return (
    <h1>{ course.name }</h1>
  )
}

const Content = ( { course } ) =>
{
  return (
    <>
      { course.parts.map( ( part ) => (
        <Part key={ part.id } part={ part } />
      ) ) }
    </>
  )
}

const Total = ( { course } ) =>
{
  const sum = course.parts.reduce( ( sum, part ) =>
  {
    return sum + part.exercises;
  }, 0 )

  return (
    <>
      <h4>Total of { sum } exercises</h4>
    </>
  )
}

const Part = ( { part } ) =>
{
  return (
    <p>
      { part.name } { part.exercises }
    </p>
  )
}

export default Course;