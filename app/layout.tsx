import './globals.css'

export const metadata = {
  title: 'ProjectsArea | Academic Projects & Thesis Printing',
  description: 'Academic project assistance, thesis printing, binding and student support in Varanasi and online across India.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
