import Menu_bar from '../../components/Menu_bar/Menu_bar'
import styles from '../../styles/home.module.css'
import { useSearchParams } from 'next/navigation'

function LoginPage() {
    return (<main className={styles.main}>
        <Menu_bar/>
    </main>)
}

export default LoginPage