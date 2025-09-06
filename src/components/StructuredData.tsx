const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anil Chhetri',
    jobTitle: 'ML Engineer & AI Developer',
    description: 'Building innovative AI solutions and machine learning applications. Student pursuing Bachelor\'s in Artificial Intelligence & Machine Learning.',
    url: 'https://anilchhetri.dev',
    sameAs: [
      'https://github.com/AnilChettri',
      'https://www.linkedin.com/in/anil-chhetri-880a8b253/',
    ],
    knowsAbout: [
      'Python',
      'Machine Learning',
      'Artificial Intelligence',
      'Data Analytics',
      'TensorFlow',
      'Scikit-learn',
      'Data Science',
      'Predictive Modeling',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Sri Sairam College of Engineering',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'IBM Artificial Intelligence',
        credentialCategory: 'certificate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'IBM',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Cisco Data Analytics',
        credentialCategory: 'certificate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Cisco',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Infosys Machine Learning',
        credentialCategory: 'certificate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Infosys',
        },
      },
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Pantech E Limited',
        jobTitle: 'Machine Learning Intern',
      },
      {
        '@type': 'Organization',
        name: 'CodeAlpha',
        jobTitle: 'Chatbot Developer Intern',
      },
      {
        '@type': 'Organization',
        name: 'Freelance',
        jobTitle: 'Full Stack Developer',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'professional',
      email: 'anil.chhetri@example.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default StructuredData
