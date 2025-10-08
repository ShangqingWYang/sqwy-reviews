cat > pages/_app.js <<'JS'
import '../styles/globals.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
JS