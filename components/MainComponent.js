import A from "./A";
import Head from "next/head";

const MainComponent = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={`nextjs-snippet next ${keywords}`}></meta>
                <title>Users page</title>
            </Head>
            <style jsx>
                {`
                    .navbar {
                      background-color: orange;
                      padding: 15px;
                    }
                `}
            </style>
            <div className='navbar'>
                <A href='/' text='Main' />
                <A href='/users' text='Users' />
            </div>
            <div>{children}</div>
        </>
    );
};

export default MainComponent;