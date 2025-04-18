
export const BasicTypes = () => {
    const name: string = 'Juan';
    const age: number = 38;
    const isActive:boolean = false;

    const powers: string[] = ['React', 'ReactNative'];
    

    return (
        <>
            <h3>Tipos Basicos</h3>
            {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
            <p>
                {powers.join(', ')}
            </p>
        </>
    )
}
