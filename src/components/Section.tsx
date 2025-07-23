type SectionProps = {
  title: string;
  text: string;
  bg?: string;
};

export default function Section({ title, text, bg = 'bg-white' }: SectionProps) {
  return (
    <section className={`${bg} py-20 px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-lg text-gray-700">{text}</p>
      </div>
    </section>
  );
}
