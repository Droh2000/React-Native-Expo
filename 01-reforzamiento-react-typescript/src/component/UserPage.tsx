import { useUser } from '../hooks/useUser';
import { UserRow } from './UserRow';

export const UserPage = () => {

    const { users, nextPage, prevPage } = useUser();

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="w-[500px] bg-black rounded-xl text-white">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Queremos separar la logica de esta fila en su propio componente para poder reutilizarlo, expandirlo, modificarlo 
                        Si hay una relacion directa del elemento Padre (tbody) con el "UseRow" entonces si le podriamos mandarle Props
                        (Para ese caso no seria recomendable crearse un context)
                    */}
                    {
                        users.map( user => (
                            // Asi le mandamos los datos con Props
                            <UserRow key={user.id} user={user}/>
                        ))
                    }
                </tbody>
            </table>

            <div className='flex justify-between w-[500px] mt-2'>
                <button 
                    className='p-2 bg-blue-500 text-amber-50 rounded-[5px]'
                    onClick={prevPage}
                >Prev</button>
                <button 
                    className='p-2 bg-blue-500 text-amber-50 rounded-[5px]'
                    onClick={nextPage}
                >Next</button>
            </div>
        </>
    )
}