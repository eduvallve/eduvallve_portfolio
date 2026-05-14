import { useState, useCallback } from 'react'
import { Stack, Button, Box } from '@sanity/ui'
import { set, useFormValue } from 'sanity'

const AIInput = (props) => {
  const { onChange, schemaType } = props
  const [loading, setLoading] = useState(false)

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
    const apiKey = process.env.OPENROUTER_API_KEY
    const fieldName = props.path[props.path.length - 1]
    const postUrl = `https://eduvallve.com/blog/${slug?.current || ''}`

    // Mapegem l'idioma per la IA
    const langName = language === 'en' ? 'English' : 'Catalan'

    let prompt = `Ets un expert en social media i Copywriting. Escriu en ${langName}. L'objectiu és crear un "reclam" (teaser) que convidi a llegir l'article sencer al blog. `

    if (fieldName === 'twitterSnippet') {
      prompt += `Fes un tweet (màxim 280 caràcters) informal i molt cridaner sobre l'article "${title}". Ha de generar curiositat. INCLOU obligatòriament l'enllaç: ${postUrl}. Usa algun emoji. Contingut: ${body.substring(0, 1200)}`
    } else if (fieldName === 'linkedinPost') {
      prompt += `Fes un post professional per a LinkedIn destacant un aprenentatge clau de l'article "${title}". Ha de convidar a la reflexió i a la lectura completa. INCLOU l'enllaç al final: ${postUrl}. Contingut: ${body.substring(0, 1200)}`
    } else if (fieldName === 'facebookPost') {
      prompt += `Fes un post per a Facebook més humà i proper sobre "${title}". Explica per què és interessant i convida a visitar el blog: ${postUrl}. Contingut: ${body.substring(0, 1200)}`
    } else {
      prompt += `Fes un reclam breu i directe per a xarxes socials de l'article "${title}". Inclou l'enllaç: ${postUrl}. Contingut: ${body.substring(0, 1200)}`
    }

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
        // Netegem possibles cometes extres que a vegades posa la IA
        const cleanText = aiText.replace(/^["']|["']$/g, '')
        onChange(set(cleanText))
      }
    } catch (error) {
      console.error('AI Error:', error)
      alert('Error connectant amb OpenRouter')
    } finally {
      setLoading(false)
    }
  }, [body, title, schemaType.name, onChange, props.path])

  return (
    <Stack space={3}>
      {/* Input original de Sanity */}
      {props.renderDefault(props)}

      <Box>
        <Button
          fontSize={1}
          padding={2}
          text={loading ? 'Generant proposta...' : 'Generar suggeriment amb IA ✨'}
          tone="primary"
          mode="ghost"
          onClick={generateAI}
          disabled={loading}
        />
      </Box>
    </Stack>
  )
}

export default AIInput
