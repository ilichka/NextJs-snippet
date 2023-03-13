import Link from "next/link";
import A from "../components/A";

const Users = ({users}) => {

    return (
        <div>
            <div className='navbar'>
                <A href='/' text='Main' />
                <A href='/users' text='Users' />
            </div>
            <h1>Users list</h1>
            <ul>
                {users.map(user => <li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                </li>)}
            </ul>
            <style jsx>
                {`
                    .navbar {
                      background-color: orange;
                      padding: 15px;
                    }
                    
                    
                `}
            </style>
        </div>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();

    return {
        props: {users}
    }
}