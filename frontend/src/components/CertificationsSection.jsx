const certifications = [
  'Cybersecurity certification from NPTEL',
  'Completed Infosys SpringBoard course on Bootstrap 4',
  'Completed Infosys SpringBoard course on Database and SQL',
];

export default function CertificationsSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-primary animate-slide-up">
        Certifications
      </h2>
      <ul className="space-y-4">
        {certifications.map((cert, idx) => (
          <li
            key={cert}
            className="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow p-4 text-lg text-gray-800 dark:text-gray-200 border border-primary/20 card-hover-effect animate-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}