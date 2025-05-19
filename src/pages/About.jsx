const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <h2 className="text-3xl font-semibold mb-4">About Nextract</h2>
      <p className="text-lg max-w-3xl">
        Nextract is an AI-powered summarization tool that allows users to upload documents like PDFs, PPTs, or Word files and receive accurate summaries instantly.
        <br /><br />
        Built using modern technologies like React, Flask, Firebase, and HuggingFace Transformers, Nextract ensures speed, accuracy, and simplicity — helping users save time and focus on what really matters.
      </p>
    </div>
  );
};

export default About;
