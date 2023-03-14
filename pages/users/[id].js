import React from 'react';
import {useRouter} from 'next/router'
import styles from '../../styles/user.module.scss'
import MainComponent from "../../components/MainComponent";

export default function ({user}) {
    const {query} = useRouter()
    console.log(user.name)
    return (
        <MainComponent keywords={user.name}>
        <div className={styles.user}>
            <h1>User: {query.id}</h1>
            <div>User name: {user.name}</div>
        </div>
        </MainComponent>
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