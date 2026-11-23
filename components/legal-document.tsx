export function LegalDocument({ title, html }: { title: string; html: string }) {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-8 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
      <h1 className="text-balance text-3xl font-bold uppercase tracking-wide md:text-4xl">{title}</h1>
      <div
        className="flex flex-col gap-4 text-pretty text-base leading-relaxed md:text-lg [&_a]:underline [&_a]:underline-offset-4 [&_li]:leading-relaxed [&_ol]:flex [&_ol]:list-decimal [&_ol]:flex-col [&_ol]:gap-1 [&_ol]:pl-6 [&_strong]:font-semibold [&_table]:w-full [&_td]:border [&_td]:p-2 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1 [&_ul]:pl-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}
