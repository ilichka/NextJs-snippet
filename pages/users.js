import Link from "next/link";
import MainComponent from "../components/MainComponent";

const Users = ({users}) => {

    return (
        <MainComponent keywords='users page'>
            <div>
                <h1>Users list</h1>
                <ul>
                    {users.map(user => <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>)}
                </ul>

            </div>
        </MainComponent>

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