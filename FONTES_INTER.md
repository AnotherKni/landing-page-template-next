# Fontes Inter Locais

Para otimizar a performance e eliminar o render-blocking resource do Google Fonts, você precisa baixar as fontes Inter e colocá-las na pasta `public/fonts/`.

## Fontes Necessárias

Baixe as seguintes fontes da [página oficial do Inter](https://rsms.me/inter/download/):

1. **Inter-Regular.woff2** (peso 400)
2. **Inter-Regular.woff** (peso 400)
3. **Inter-Medium.woff2** (peso 500)
4. **Inter-Medium.woff** (peso 500)
5. **Inter-SemiBold.woff2** (peso 600)
6. **Inter-SemiBold.woff** (peso 600)
7. **Inter-Bold.woff2** (peso 700)
8. **Inter-Bold.woff** (peso 700)

## Estrutura de Pastas

Coloque as fontes na seguinte estrutura:

```
public/
  fonts/
    Inter-Regular.woff2
    Inter-Regular.woff
    Inter-Medium.woff2
    Inter-Medium.woff
    Inter-SemiBold.woff2
    Inter-SemiBold.woff
    Inter-Bold.woff2
    Inter-Bold.woff
```

## Benefícios

- ✅ **Elimina render-blocking resources**
- ✅ **Melhora First Contentful Paint (FCP)**
- ✅ **Reduz tempo de carregamento**
- ✅ **Maior controle sobre as fontes**
- ✅ **Funciona offline**

## Alternativa: Google Fonts Otimizado

Se preferir continuar usando Google Fonts, você pode usar esta versão otimizada:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Mas as fontes locais são a melhor opção para performance.
