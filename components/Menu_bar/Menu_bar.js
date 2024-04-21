import styles from './Menu_bar.module.css'
import Image from 'next/image'
import icon from '../../assets/images/worldmy_icon.png'

export default function Menu_bar() {
  return (<div className={styles.menu_bar}>
    <div className={styles.icontitle}>
    <Image
    src={icon}
    width={100}
    height={100}
    className={styles.icon}
    />
    <h1 className={styles.title}>Worldmy</h1>
    </div>
    <a>test</a>
  </div>)
}