export default {
    headerLayout: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        fontSize: 20
    },
    headerLogo: {
        display: 'inline-flex',
        alignItems: 'center',
        flex: 1,
        color: '#FFF',
        width: '50%'
    },
    logo: {
        width: 50,
        height: 50
    },
    company: {
        margin: 0,
        padding: '0 10px',
        color: '#FFF'
    },
    headerNavLayout: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1
    },
    headerNav: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        width: 200,
        margin: 0,
        color: '#FFF',
        '& li': {
            flex: 1,
            textAlign: 'center',
            cursor: 'pointer'
        }
    }
}