
const App = () =>
{
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  // const total = parts.reduce( ( s, p ) => s + p.exercises, 0 )
  const total = 0

  return (
    <div>
      <Header course={ course } />
      <Content parts={ parts } />
      <Total sum={ total } />
    </div>
  )
}

const Header = ( { course } ) =>
{
  <h1>{ course }</h1>
}

const Total = ( { sum } ) =>
{
  <p>Number of exercises { sum }</p>
}

const Part = ( { part } ) =>
{
  <p>
    { part.name } { part.exercises }
  </p>
}

const Content = ( { parts } ) =>
{
  <>
    <Part
      part={ parts[ 0 ] }
    />
    <Part
      part={ parts[ 1 ] }
    />
    <Part
      part={ parts[ 2 ] }
    />
  </>
}


export default App