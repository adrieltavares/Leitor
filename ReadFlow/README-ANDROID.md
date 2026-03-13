# ReadFlow no Android

O projeto foi preparado para ser empacotado como app Android usando `Capacitor`.

## O que ja ficou pronto

- Estrutura `package.json` com scripts do Capacitor.
- Configuracao `capacitor.config.json` apontando para este app web.
- Ajustes no front para funcionar melhor em tela pequena e WebView.
- Fallback de exportacao para arquivo HTML quando `window.print()` nao estiver disponivel.

## O que falta no seu computador

Neste ambiente eu nao consegui gerar a pasta nativa `android/` porque `Node.js`, `npm` e `Java` nao estao instalados aqui.

Voce precisa ter:

1. Node.js LTS
2. Android Studio
3. JDK 17

## Como gerar o app Android

Dentro da pasta do projeto:

```powershell
npm install
npx cap add android
npx cap sync android
npx cap open android
```

Depois, no Android Studio:

1. Espere o Gradle sincronizar.
2. Clique em `Run` para testar no celular/emulador.
3. Para APK: `Build > Build Bundle(s) / APK(s) > Build APK(s)`.

## Observacoes

- O importador de PDF ainda usa `pdf.js` via CDN. Se quiser que ele funcione 100% offline no Android, o proximo passo e baixar essa biblioteca para dentro do projeto.
- O botao de exportar tenta gerar PDF no navegador desktop e, no Android/WebView, cai para um arquivo `.html` pronto para compartilhar ou imprimir.
