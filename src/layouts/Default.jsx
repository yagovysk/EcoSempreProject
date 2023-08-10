import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { FloatingButton } from '../components/FloatingButton'
import { Dots } from '../components/Loader/Dots'
import styles from './Default.module.css'

export function Default() {
  const windowWidth = useBreakpoint()
  const navigation = useNavigation()

  return (
    <>
      <Header />
      <div
        className={`${styles.content} ${
          navigation.state === 'loading' && styles.loading
        }`}
      >
        <Outlet />

        {navigation.state === 'loading' && (
          <div className={styles.container_loader_arrows}>
            <Dots />
          </div>
        )}
      </div>
      <Footer />
      {windowWidth < 500 && <FloatingButton />}
      <ScrollRestoration />
    </>
  )
}
