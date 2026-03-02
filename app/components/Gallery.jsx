import styles from './gallery.module.css'

const IMAGES = [
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section className={styles.galleryWrap} aria-label="Фото галерея">
      <div className={styles.gallery}>
        {IMAGES.map((src, i) => (
          <div className={styles.item} key={i}>
            <img
              className={styles.img}
              src={src}
              alt={`Photo ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
