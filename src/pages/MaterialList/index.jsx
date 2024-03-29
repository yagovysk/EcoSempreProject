import { Icon } from '@iconify/react'
import { HeaderSection } from '../../components/HeaderSection'
import { ScrollReveal } from '../../components/ScrollReveal'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import styles from './MaterialList.module.css'

const listMaterials = [
  {
    icon: 'mdi:smartphone-wireless',
    name: 'Smartphones',
  },
  {
    icon: 'mdi:computer',
    name: 'Notebooks',
  },
  {
    icon: 'mdi:printer',
    name: 'Impressoras',
  },
  {
    icon: 'material-symbols:linked-camera',
    name: 'Câmeras',
  },
  {
    icon: 'bi:router-fill',
    name: 'Roteadores',
  },
  {
    icon: 'game-icons:battery-pack',
    name: 'Pilhas',
  },
  {
    icon: 'ic:outline-desktop-mac',
    name: 'Computadores',
  },
  {
    icon: 'zondicons:tablet',
    name: 'Tablets',
  },
  {
    icon: 'mdi:vacuum-cleaner',
    name: 'Aspiradores de Pó',
  },
  {
    icon: 'material-symbols:multicooker',
    name: 'Panelas de Pressão Elétrica',
  },
  {
    icon: 'mingcute:router-modem-fill',
    name: 'Modens',
  },
  {
    icon: 'ic:baseline-keyboard',
    name: 'Teclados',
  },
  {
    icon: 'mingcute:game-2-fill',
    name: 'Videogames',
  },
  {
    icon: 'ri:dvd-fill',
    name: 'DVDPlayers',
  },
  {
    icon: 'ion:headset-sharp',
    name: 'Fones de Ouvido',
  },
  {
    icon: 'material-symbols:scanner',
    name: 'Scanners',
  },
  {
    icon: 'ion:scale-sharp',
    name: 'Balanças',
  },
  {
    icon: 'ph:television-simple-bold',
    name: 'Televisões',
  },
  {
    icon: 'icon-park-solid:sound-one',
    name: 'Caixas de Som',
  },
  {
    icon: 'ph:fan-fill',
    name: 'Ventiladores',
  },
  {
    icon: 'game-icons:toaster',
    name: 'Torradeiras',
  },
  {
    icon: 'ic:round-flashlight-on',
    name: 'Lanternas',
  },
  {
    icon: 'mdi:projector',
    name: 'Projetores de Video',
  },
  {
    icon: 'material-symbols:tools-power-drill',
    name: 'Furadeiras',
  },
  {
    icon: 'mingcute:air-condition-fill',
    name: 'Ar Condicionado',
  },
  {
    icon: 'vaadin:harddrive',
    name: 'External Hard Drive (HDD)',
  },
  {
    icon: 'jam:hairdryer-f',
    name: 'Secadores de Cabelo',
  },
  {
    icon: 'mdi:grill',
    name: 'Churrasqueiras Elétricas',
  },
  {
    icon: 'icon-park-solid:oven',
    name: 'Fornos Elétricos',
  },
  {
    icon: 'mdi:washing-machine',
    name: 'Máquinas de Lavar',
  },
]
const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Programas',
    path: '/materiais',
  },
  {
    name: 'Lista de Materiais',
  },
]

export function MaterialList() {
  const widthWindow = useBreakpoint()
  const materials =
    widthWindow > 630 ? listMaterials : listMaterials.slice(0, 8)

  return (
    <main className={styles.main_content}>
      <HeaderSection
        className={styles.header}
        linksMenu={linksMenu}
        title="Lista de Materiais "
      />
      <div className={`container ${styles.content}`}>
        <ScrollReveal origin="bottom">
          <section className={`${styles.titles}`}>
            <span className="small-text">O Que Pode Ser Descartado?</span>
            <h2 className="title">
              Descubra Quais Materiais Aceitamos para Descarte!
            </h2>
          </section>
        </ScrollReveal>
        <ScrollReveal origin="top">
          <div className={styles.grid_materials}>
            {materials.map((material) => (
              <Box key={material.name}>
                <Icon
                  className={styles.material_icon}
                  icon={material.icon}
                  aria-hidden={true}
                />
                <span className={styles.material_name}>{material.name}</span>
              </Box>
            ))}
          </div>
        </ScrollReveal>

        <a className={`link_more ${styles.link_complete_list}`} href="#">
          Clique aqui para acessar a lista completa {'>>'}
        </a>
      </div>
    </main>
  )
}

function Box({ children }) {
  return <div className={styles.box_wrapper}>{children}</div>
}
