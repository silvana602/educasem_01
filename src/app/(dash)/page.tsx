import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <section>
        <div>
          <div>
            <Image
              src="https://ximg.es/800x350/000/fff"
              alt="portada"
              fill
              priority
            />
          </div>
          <div></div>
        </div>
      </section>
      <section>
        <div></div>

        <div></div>

        <div></div>

        <div></div>

        <div>
          <div></div>
        </div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>

      <section></section>

      <section>
        <div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
