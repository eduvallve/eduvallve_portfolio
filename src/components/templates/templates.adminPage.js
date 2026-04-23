import { Studio } from 'sanity'
import config from '../../sanity.config'

const AdminPage = () => {
  return (
    <div style={{ height: '100vh', minHeight: '100dvh' }}>
      <Studio config={config} />
    </div>
  )
}

export default AdminPage
