

export default function Profile(prop)
{
    return(
        <div className="App">
            <h1>{prop.text.name}</h1>
            <h1>{prop.data}</h1>
        </div>
    )
}