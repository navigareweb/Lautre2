import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/400x600.jpeg"}
        width={600}
        height={600}
        className={styles.img}
        alt="imgLautrec"
      ></Image>
      <div className={styles.description}>
        <h3 className={styles.text}>HENRI DE TOULOUSE-LAUTREC</h3>
        <audio
          controls
          src="/HENRI-DE-TOULOUSE-LAUTREC.mp3"
          className={styles.audio}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p className={styles.p}>
          Henri de Toulouse-Lautrec (Albi, 1864 - Saint-Andrè-du-Bois, 1901) was
          born into a French aristocratic family. Despite his short life and
          even shorter career, he turned into one of the most important artists
          of the 19th century, known for his representation of late 19th-century
          Parisian nightlife and for disrupting the engraving and printing
          techniques of his time. His works reflect the nightlife of the
          so-called Belle Époque, one of the most fascinating periods in history
          and society. Started off on art since he was very young, his teachers
          were Leon Bonnat, who introduced “the Spanish way of painting" to
          Paris, particularly Velázquez and Goya, as well as Manet and Fernand
          Cormon, the latter being the one from whom he learned the classical
          technique and psychological study of the human figure. In his atelier
          he met Van Gogh and Degas, whose production was for him a source of
          inspiration on several occasions, both in terms of subject matter and
          technique. Lautrec's works immortalize the world of nightclubs,
          cabarets and prostitution. Lautrec was very keen on human beings,
          their psychology and peculiarities; his popular gaze, which let him
          get closer to the lowest strata of society, subjectively took
          possession of everything he saw, moving into the realm of actors,
          dancers, bourgeoisie and courtesans. The places where he worked, from
          “Le Chat Noir” to the “Moulin de la Galette” or the grand and iconic
          Moulin Rouge, represented much more than simple theater or cabaret for
          him, as they offered additional “side” shows - much more interesting
          to the artist - made up of clowns, cancan dancers, cartomances, and
          all the underworld that animated late 19th-century Paris. For Lautrec,
          this world was a personal shelter from the misunderstanding he felt in
          the aristocratic milieu he came from, and many of the characters he
          depicted would turn into his great friends later, including the dancer
          Jane Avril - to whom he dedicated several paintings and posters - or
          the singer and dancer Marcelle Lender, who became a real obsession for
          him. Lautrec's work was subjected to multiple influences (Art Nouveau,
          his contemporaries, Degas and the Impressionists, photography, and
          Japanese printing, from which he drew his distinctive way of framing
          composition and breaking up space); nevertheless, his unique skill as
          an artist consists precisely in readjusting and deconstructing all
          these influences to create a new modern figurative language, which
          found its highest expression in engraving and poster illustration.
        </p>
      </div>
    </main>
  );
}
