import { Studio } from 'sanity'
import config from '../../sanity.config'
import { createGlobalStyle } from 'styled-components'

// Defineix els estils globals pel Studio
const StudioStyles = createGlobalStyle`
  [data-ui="Stack"] {
    gap: 1rem;
  }

  [data-ui="Box"]:has(>[data-ui="Text"] + [data-ui="Text"]) {
    gap: 8px;
    display: flex;
    flex-direction: column;
  }

  [data-ui="Box"]:has(>[data-ui="Text"] + [data-ui="Text"]) [data-ui="Text"] span {
    word-break: break-word;
  }
`

const AdminPage = () => {
  return (
    <div style={{ height: '100vh', minHeight: '100dvh' }}>
      <StudioStyles />
      <Studio config={config} />
    </div>
  )
}

export default AdminPage
