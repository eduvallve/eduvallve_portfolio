import { Card, Text, Flex, Button, Box } from '@sanity/ui'
import { LaunchIcon } from '@sanity/icons'
import { useFormValue } from 'sanity'
import { BASE_PATH } from '../../config'

const ExternalLink = (props) => {
  const slug = useFormValue(['slug'])
  const language = useFormValue(['language'])

  if (!slug?.current) {
    return (
      <Card padding={3} tone="caution">
        <Text size={1}>Genera primer el slug per poder veure la previsualització.</Text>
      </Card>
    )
  }

  const fullUrl = `${window.location.origin}${BASE_PATH}/${language}/blog/${slug.current}`

  return (
    <Card padding={3} border borderStyle="dashed" tone="transparent">
      <Flex align="center" justify="space-between">
        <Box flex={1}>
          <Text size={1} weight="semibold">Enllaç de l'article:</Text>
          <Text size={1} muted style={{ marginTop: '4px' }}>{fullUrl}</Text>
        </Box>
        <Button
          as="a"
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          icon={LaunchIcon}
          text="Obrir a la web"
          fontSize={1}
          padding={2}
          mode="ghost"
        />
      </Flex>
    </Card>
  )
}

export default ExternalLink
