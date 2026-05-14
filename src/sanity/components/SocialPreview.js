import { Card, Stack, Text, Box, Flex, Label, Container } from '@sanity/ui'
import styled from 'styled-components'
import { urlFor } from '../client'

// Estils personalitzats amb Styled Components
const TwitterCard = styled(Card)`
  max-width: 600px;
  border-color: #e1e8ed;
  transition: all 0.2s ease;
  &:hover {
    border-color: #cfd9de;
  }
`

const TwitterBox = styled(Box)`
  &:not([hidden]) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`

const SocialImage = styled.img`
  width: 100%;
  aspect-ratio: 1.91 / 1;
  object-fit: cover;
  display: block;
`

const TwitterDomain = styled(Text)`
  text-transform: lowercase;
  color: #536471;
`

const LinkedInCard = styled(Card)`
  max-width: 552px;
  background: #fff;
  border-color: #e0e0e0;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.08);
`

const LinkedInHeader = styled(Flex)`
  margin-bottom: 12px;
`

const LinkedInBox = styled(Box)`
  &:not([hidden]) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

const ProfileCircle = styled.div`
  width: 48px;
  height: 48px;
  background: #e0e0e0;
  border-radius: 50%;
  flex-shrink: 0;
`

const LinkedInFooter = styled(Card)`
  background: #f2f2f2;
  border-top: 1px solid #e0e0e0;
  &:not([hidden]) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

const SnippetBox = styled(Box)`
  background: #f7f9f9;
  border: 1px solid #e1e8ed;
  max-width: 600px;
  border-radius: 12px;
`

const SocialContainer = styled.div`
  max-width: calc(100vw - 40px);
  margin: auto;
  margin-inline: 20px;
`

const SocialPreview = ({ document }) => {
  const { displayed } = document

  if (!displayed) {
    return (
      <Container padding={4}>
        <Text>Please add content to see the preview.</Text>
      </Container>
    )
  }

  const { title, socialSummary, twitterSnippet, linkedinPost, heroImage } = displayed
  const imageUrl = heroImage?.asset ? urlFor(heroImage).width(1200).height(630).url() : null

  return (
    <SocialContainer padding={4}>
      <Stack space={5}>
        {/* Twitter Preview */}
        <Box>
          <Label size={1} weight="bold" muted style={{ marginBottom: '12px', display: 'block' }}>
            Twitter (X) Card Preview
          </Label>
          <TwitterCard border radius={3} overflow="hidden">
            {imageUrl && <SocialImage src={imageUrl} alt="Twitter Preview" />}
            <TwitterBox padding={3} style={{ borderTop: '1px solid #e1e8ed' }}>
              <TwitterDomain size={1} muted>eduvallve.com</TwitterDomain>
              <Box marginTop={1}>
                <Text size={2} weight="bold">{title || 'Post Title'}</Text>
              </Box>
              <Box marginTop={1}>
                <Text size={1} muted>
                  {socialSummary || 'Provide a social summary to see it here...'}
                </Text>
              </Box>
            </TwitterBox>
          </TwitterCard>
          {twitterSnippet && (
            <SnippetBox marginTop={3} padding={3}>
              <Label size={0} muted style={{ marginBottom: '8px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Tweet Text:
              </Label>
              <Text size={2} style={{ lineHeight: '1.4' }}>{twitterSnippet}</Text>
            </SnippetBox>
          )}
        </Box>

        {/* LinkedIn Preview */}
        <Box>
          <Label size={1} weight="bold" muted style={{ marginBottom: '12px', display: 'block' }}>
            LinkedIn Feed Preview
          </Label>
          <LinkedInCard border radius={2} overflow="hidden">
            <Box padding={3}>
              <LinkedInHeader align="center">
                <ProfileCircle />
                <LinkedInBox marginLeft={3}>
                  <Text size={1} weight="bold">Eduard Vallvé</Text>
                  <Text size={0} muted style={{ display: 'block', marginBottom: '2px' }}>Creative Developer & 3D Artist</Text>
                  <Text size={0} muted>Just now • 🌐</Text>
                </LinkedInBox>
              </LinkedInHeader>
              <Box marginTop={3} marginBottom={2}>
                <Text size={2} style={{ lineHeight: '1.5' }}>
                  {linkedinPost || socialSummary || 'Content for the LinkedIn post...'}
                </Text>
              </Box>
            </Box>
            {imageUrl && <SocialImage src={imageUrl} alt="LinkedIn Preview" />}
            <LinkedInFooter padding={3}>
              <Text size={1} weight="bold" style={{ display: 'block', marginBottom: '2px' }}>
                {title || 'Post Title'}
              </Text>
              <Text size={0} muted>eduvallve.com</Text>
            </LinkedInFooter>
          </LinkedInCard>
        </Box>
      </Stack>
    </SocialContainer>
  )
}

export default SocialPreview
