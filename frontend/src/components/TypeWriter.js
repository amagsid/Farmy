import { Typewriter } from 'react-simple-typewriter'

 const CustomSimpleTypewriter = () => {
    return (
        <div className='App'>
          <h1 className='banner-text'
            style={{ paddingTop: '23rem', margin: 'auto 0', fontWeight: 'normal' }}
          >
            Save{' '}
            <span style={{ color: 'green', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['time', 'money', 'stress', 'the environment']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
                onLoopDone={() => console.log(`Done after 5 loops!`)}
              />
            </span>
          </h1>
        </div>
      )
}

export default CustomSimpleTypewriter