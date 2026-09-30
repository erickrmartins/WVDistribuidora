import { useState } from 'react'

// Imagem de public/ usando a base do Vite (import.meta.env.BASE_URL).
// Sem src, ou se o arquivo não existir, mostra o fallback.
function Imagem({ src, alt, fallback = null }) {
    const [erro, setErro] = useState(false)

    if (!src || erro) return fallback

    return (
        <img
            src={`${import.meta.env.BASE_URL}${src}`}
            alt={alt}
            loading="lazy"
            onError={() => setErro(true)}
        />
    )
}

export default Imagem
