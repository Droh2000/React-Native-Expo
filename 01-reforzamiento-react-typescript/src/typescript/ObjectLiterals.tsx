
interface Person {
    age: number,
    firstName: string,
    lastName: string,
    address: Address
}

interface Address {
    country: string,
    houseNo: number,
    street?: string
}

export const ObjectLiterals = () => {
    const person: Person = {
        age: 38,
        firstName: 'Jose',
        lastName: 'Herrera',
        address: {
            country: 'Zimbawue',
            houseNo: 615,
            street: 'Hakuna Matata'
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}