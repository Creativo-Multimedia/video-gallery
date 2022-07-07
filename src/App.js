import { useState } from 'react'
import './App.css'
import { videosSrc } from './data'
import { PASSCODE } from './data'

function App() {
  const initialState = {
    password: '',
    isSubmitting: false,
    errorMessage: null,
    isLogged: false
  }
  const [data, setData] = useState(initialState)

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = () => {
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    if (data.password === PASSCODE) {
      setData({
        ...data,
        isSubmitting: false,
        isLogged: true
      })
    } else {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: 'Contraseña inválida'
      })
    }
  }

  return (
    <div className="App">
      <div className='content-wrap'>
        {!data.isLogged ? (
          <div className='login'>
            <h3>Ingrese la contraseña que le fué proporcionada para ver los videos</h3>
            <label htmlFor='password'>
              Contraseña:
              <input
                type='password'
                value={data.password}
                onChange={handleInputChange}
                className='password-input'
                name='password'
                id='password' />
            </label>
            <button onClick={handleFormSubmit} disabled={data.isSubmitting}>
              {data.isSubmitting ? (
                'Espere...'
              ) : (
                'Entrar'
              )}
            </button>
            {data.errorMessage && (
              <span className='login-error'>{data.errorMessage}</span>
            )}
          </div>
        ) : (
          <div className='video-grid'>
            {videosSrc.map((el, idx) => {
              return (
                <iframe src={`https://www.youtube.com/embed/${el}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen key={idx}></iframe>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
