import { useState, useCallback } from 'react'
import { Stack, Button, Box, Flex, useToast } from '@sanity/ui'
import { CopyIcon, CheckmarkIcon } from '@sanity/icons'
import { set, useFormValue } from 'sanity'
import { getSocialPrompt } from '../../utils/socialPrompts'

const AIInput = (props) => {
  const { onChange, value } = props
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const toast = useToast()

  // Obtenim títol, cos, slug i idioma
  const body = useFormValue(['body'])
  const title = useFormValue(['title'])
  const slug = useFormValue(['slug'])
  const language = useFormValue(['language'])

  const generateAI = useCallback(async () => {
    if (!body) {
      return alert('Escriu primer el contingut (Body) de l\'article per poder generar un resum!')
    }

    setLoading(true)
    const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY
    const fieldName = props.path[props.path.length - 1]
    const postUrl = `https://eduvallve.com/${language}/blog/${slug?.current || ''}`

    // Mapegem l'idioma per la IA
    const langName = language === 'en' ? 'English' : 'Catalan'

    const prompt = getSocialPrompt(fieldName, {
      title,
      postUrl,
      body,
      langName
    })

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://eduvallve.com',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.0-flash-001',
          messages: [{ role: 'user', content: prompt }]
        })
      })

      const data = await response.json()
      const aiText = data.choices[0]?.message?.content?.trim()

      if (aiText) {
        // Netegem possibles cometes extres
        let cleanText = aiText.replace(/^["']|["']$/g, '')

        // Substituïm el placeholder {{URL}} per la URL real de l'article
        cleanText = cleanText.replace(/\{\{URL\}\}|\[link\]|\[enllaç\]/gi, postUrl)

        onChange(set(cleanText))
      }
    } catch (error) {
      console.error('AI Error:', error)
      alert('Error connectant amb OpenRouter')
    } finally {
      setLoading(false)
    }
  }, [body, title, onChange, props.path, language, slug])

  const handleCopy = useCallback(() => {
    if (!value) return
    navigator.clipboard.writeText(value)
    setCopied(true)
    toast.push({
      title: 'Copiat al porta-retalls!',
      status: 'success',
      duration: 2000
    })
    setTimeout(() => setCopied(false), 2000)
  }, [value, toast])

  return (
    <Stack space={3}>
      {/* Input original de Sanity */}
      {props.renderDefault(props)}

      <Box>
        <Flex gap={2}>
          <Button
            fontSize={1}
            padding={3}
            text={loading ? 'Generant...' : 'Generar amb IA ✨'}
            tone="primary"
            mode="ghost"
            onClick={generateAI}
            disabled={loading}
            style={{ width: '100%' }}
          />
          <Button
            fontSize={1}
            padding={3}
            mode="bleed"
            icon={copied ? CheckmarkIcon : CopyIcon}
            onClick={handleCopy}
            disabled={!value}
            title="Copiar text"
          />
        </Flex>
      </Box>
    </Stack>
  )
}

export default AIInput
