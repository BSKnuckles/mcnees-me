import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael McNees</title>
        <meta
          name='description'
          content="I'm a senior frontend engineer with a passion for modern tooling and retro video games."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='min-h-screen w-full flex flex-col justify-center prose px-8'>
        <h1 className='text-white text-5xl mb-0'>Hi, I'm Michael McNees 🕹</h1>
        <p className='text-gray-300'>
          I build web apps using awesome technologies like{' '}
          <a className='text-sky-400' href='https://nextjs.org/' target='_blank' referrerPolicy='no-referrer'>
            Next
          </a>
          ,{' '}
          <a
            className='text-sky-400'
            href='https://www.typescriptlang.org/'
            target='_blank'
            referrerPolicy='no-referrer'>
            TypeScript
          </a>
          , and{' '}
          <a className='text-sky-400' href='https://tailwindcss.com/' target='_blank' referrerPolicy='no-referrer'>
            Tailwind
          </a>
          . The site you're looking at now uses all three.
        </p>
        <nav className='fixed top-0 right-8'>
          <ul className='list-none flex space-x-4'>
            <li>
              <a
                className='text-gray-300'
                href='mailto:mcnees.michael@gmail.com'
                target='_blank'
                referrerPolicy='no-referrer'>
                Get In Touch
              </a>
            </li>
            <li>
              <a
                className='text-gray-300'
                href='https://www.dropbox.com/s/obn7wi4m37phdnl/MichaelMcNees_Resume_0323.pdf?dl=0'
                target='_blank'
                referrerPolicy='no-referrer'>
                Resume
              </a>
            </li>
            <li>
              <a
                className='text-gray-300'
                href='https://gitlab.com/mmcnees'
                target='_blank'
                referrerPolicy='no-referrer'>
                GitLab
              </a>
            </li>
            <li>
              <a
                className='text-gray-300'
                href='https://github.com/BSKnuckles'
                target='_blank'
                referrerPolicy='no-referrer'>
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <a
          className='fixed bottom-4 right-4 text-red-700/60 text-[0.5rem]'
          href='https://create.t3.gg/'
          target='_blank'
          referrerPolicy='no-referrer'>
          Bleed Responsibly
        </a>
      </main>
    </>
  )
}
