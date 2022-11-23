import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_zhyb24v',
        'template_g393t3k',
        form.current,
        'lfQ5pwTy_W8pIUVYj'
      )
      .then(
        () => {
          alert('Message sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in joining your company and getting learning
            opportunities especially through larger and ambitious projects. Do
            not hesitate to contact me using below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <input type="submit" className="flat-button" value="SEND" />
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Emmanuel Gyan-Amoah,
          <br />
          Czech Republic,
          <br />
          Videnska 20a, 63900 <br />
          Brno Styrice <br />
          <span>shakerbillo@yahoo.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[49.1841, 16.5939]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
            <Marker position={[49.1841, 16.5939]}>
              <Popup>Emmanuel lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
