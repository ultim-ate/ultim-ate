import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { CourseBackdrop } from "@/components/course-backdrop"
import { getGreekCourse, greekCourses } from "@/lib/greek-courses"

export function generateStaticParams() {
  return greekCourses.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const course = getGreekCourse(slug)
  if (!course) return {}
  return {
    title: `${course.greek} – ${course.lines[0]} | Greek Steps`,
    description: course.lead,
  }
}

export default async function GreekCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = getGreekCourse(slug)
  if (!course) notFound()

  return (
    <>
      <Header solid />
      <main lang="ro" className="relative isolate min-h-screen font-sans text-[var(--course-text)]">
        <CourseBackdrop />
        <article className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-20 pt-32 lg:px-8">
          <Link
            href="/cursuri-limba-greaca"
            className="flex w-fit items-center gap-2 text-sm font-medium text-[var(--culture-heading)] underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Cursuri limba greacă
          </Link>

          <header className="flex flex-col gap-1">
            <h1 lang="el" className="text-2xl font-semibold tracking-wide text-[var(--culture-heading)] md:text-3xl">
              {course.greek}
            </h1>
            {course.lines.map((line) => (
              <p key={line} className="text-base leading-relaxed">
                {line}
              </p>
            ))}
          </header>

          <p className="text-pretty text-lg font-semibold leading-relaxed text-[var(--culture-heading)]">
            {course.lead}
          </p>
          <p className="text-pretty text-base leading-relaxed">{course.body}</p>
        </article>
      </main>
    </>
  )
}
