import { useSearchParams } from 'next/navigation';
import Menu_bar from '../../../components/Menu_bar/Menu_bar';
import styles from '../../../styles/home.module.css'
import { DiscordLoading } from "../../../lib/discrodfecht"


export default function handler() {
    const code = useSearchParams().get("code")
    // Éléments **cruciaux pour la sécurité** :
    // 1. Ne stockez JAMAIS le jeton d'accès côté client
    // 2. Utilisez des jetons d'accès à courte durée et des jetons d'actualisation pour obtenir de nouveaux jetons d'accès si nécessaire

    // Stockez en toute sécurité le jeton d'actualisation (par exemple, dans une base de données)
    // Utilisez le jeton d'actualisation pour obtenir un nouveau jeton d'accès sur un serveur back-end sécurisé

    // Vous pouvez renvoyer un jeton d'identification unique à votre application frontale
    // Ce jeton d'identification peut être utilisé pour identifier l'utilisateur connecté
    // sans exposer le jeton d'accès
    return (<main className={styles.main}>
        <Menu_bar />
        <DiscordLoading code={code} />
    </main>)
}
