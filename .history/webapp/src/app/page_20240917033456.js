import React from 'react';
import PostContent from '@/components/mycustom/molecule/Post';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          style={{
            padding: '10px',
            border: '1px solid orange',
            margin: '0 auto',
            maxWidth: '600px',
            borderRadius: '10px',
          }}
        >
          <h1
            style={{
              fontSize: '18px',
              color: 'brown',
              fontWeight: '800',
              marginBottom: '5px',
              textAlign: 'center',
            }}
          >
            Welcome to the Story of Momma Cat!
          </h1>

          <PostContent
            imageUri="https://upload.wikimedia.org/wikipedia/commons/0/0d/Momma_Cat_%26_squash_on_the_porch_3_%2848757670872%29.jpg"
            nameTitle="Momma Cat"
            messageContent={`This is Momma Cat. He was once suspected of stealing squash from Tom's family farm. For weeks, Tom couldn't figure out who was taking the squash every night, until one day, he found Momma Cat sneaking around the farm. Instead of chasing him away, Tom and his family decided to adopt him. Ever since then, Momma Cat has stopped stealing squash and started helping the family by catching all the rats on the farm. Now, he's not just a suspect, but the farm's hero!`}
          />
        </div>
      </main>
      <footer className={styles.footer}>BCIT-</footer>
    </div>
  );
}
