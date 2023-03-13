import React from 'react';
import {useRouter} from 'next/router'
import styles from '../../styles/user.module.scss'

export default function ({user}) {
    const {query} = useRouter()
    return (
        <div className={styles.user}>
            <h1>User: {query.id}</h1>
            <div>User name: {user.name}</div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json();

    return {
        props: {user}
    }
}