import Image from 'next/image'
import React from 'react'
import styles from './Presentation.module.css'

export const Presentation = () => {
  return (
        <section className={styles.Presentation__Container}>
            <div className={styles.Presentation__ContImage}>
                <Image className={styles.Presentation__Image} src='./static/blog-img.svg' width={2000} height={2000} alt={'blog-img'}/>
            </div>
            <div className={styles.Presentation__TextCont}>
                    <p className={styles.Presentation__Text}>
                    ¡Bienvenidos al universo de <span className={styles.Presentation__TextTitle}>MiBlog</span>!
                    </p>
                    <p className={styles.Presentation__Text}>
                    En este espacio virtual, exploraremos un sinfín de ideas, reflexiones y descubrimientos que nos invitan a expandir nuestras mentes y corazones. En cada entrada, nos sumergiremos en temas fascinantes que abarcan desde la ciencia y la tecnología hasta la filosofía y el arte.
                    </p>
                    <p className={styles.Presentation__Text}>
                    <span className={styles.Presentation__TextTitle}>MiBlog</span> es más que un simple compendio de palabras; es un viaje hacia la comprensión y la inspiración. Aquí, encontrarás análisis perspicaces, opiniones provocativas y la chispa de la creatividad que alimenta nuestro espíritu inquisitivo.
                    </p>
                    <p className={styles.Presentation__Text}>
                    Nuestro objetivo es crear un espacio inclusivo donde todos puedan participar, aprender y crecer juntos. Desde los curiosos recién llegados hasta los sabios veteranos, todos son bienvenidos a unirse a esta comunidad apasionada.
                    </p>
                    <p className={styles.Presentation__Text}>
                    Prepárate para explorar nuevos horizontes, desafiar tus percepciones y abrirte a un mundo de posibilidades ilimitadas. ¡Acompáñanos en este emocionante viaje mientras desentrañamos los misterios del conocimiento y la imaginación!
                    </p>
                    <p className={styles.Presentation__Text}>
                    Únete a nosotros en <span className={styles.Presentation__TextTitle}>MiBlog</span> y descubre un océano de ideas esperando ser exploradas.
                    </p>
                    <p className={styles.Presentation__Text}>
                    ¡Adelante, el viaje comienza aquí!
                    </p>
                </div>
        </section>
  )
}
