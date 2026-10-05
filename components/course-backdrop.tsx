import Image from "next/image"

export function CourseBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <Image src="/images/ionian-sea.png" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[var(--course-surface)]/85" />
    </div>
  )
}
