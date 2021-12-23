import Head from 'next/head'

export default function GridLayout({ children }) {
    return (
      <div className="min-h-screens">
        <Head>
          <link
            type="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"
          />
        </Head>

        {children}
      </div>
    );
}
