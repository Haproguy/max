export default function UserDetailPage(props) {
    return (
        <>
            <h1>User Name : {props.id}</h1>
        </>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;

    const userId = params.uid;

    return {
        props: {
            id: 'userId-' + userId,
        },

    }

}