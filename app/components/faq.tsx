import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string | JSX.Element;  // Allow JSX.Element for structured answers
}

interface FAQCategory {
  [category: string]: FAQ[];
}

const faqData: FAQCategory = {
  "General Questions": [
    {
      question: "What services does BusinessBrander offer?",
      answer: (
        <ul className="list-inside list-disc space-y-2">
          <li>Comprehensive social media account management including setup, content creation, and strategic growth activities.</li>
          <li>Enhanced online presence and increased follower base through targeted strategies.</li>
        </ul>
      ),
    },
    {
      question: "How does the risk-free guarantee work?",
      answer: "Our guarantee promises that if we do not increase your followers to 10k within the first 3 month's of service, you pay nothing. This offer is applicable to all our first 5 initial service sign-ups.",
    },
  ],
  "Pricing": [
    {
      question: "What does the $150/month subscription include?",
      answer: (
        <>
          <p className="mb-4">Our $150/month subscription provides comprehensive social media management to amplify your online presence. This plan includes:</p>
          <ul className="list-inside list-disc mb-4 space-y-2">
            <li><strong>Full-Service Social Media Management:</strong> We handle all aspects from setup and strategy development to daily operation and content creation.</li>
            <li><strong>Custom Content Creation:</strong> Tailored posts that capture your brand's voice and resonate with your audience.</li>
            <li><strong>Proactive Growth Strategies:</strong> Advanced techniques to grow your follower base and increase interaction through both organic and paid avenues.</li>
          </ul>
          <p className="mb-4">As a special offer for our first <strong> 5 clients</strong>, we also include additional bonuses valued at <strong>$300</strong>:</p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Free Website Package:</strong> Includes website creation, hosting, and domain registration.</li>
            <li><strong>Weekly 15-Minute Consultations:</strong> Direct consultations to refine strategies and enhance outcomes.</li>
            <li><strong>$50 Google Ads Credit:</strong> Perfect for boosting visibility and driving targeted traffic.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Why will the price increase after the first 5 clients?",
      answer: "Initial pricing is discounted to welcome our first clients and to build our portfolio. And the reason the price will increase after the first five clients is because the service is so valuable. ",
    },
  ],
  // Additional categories can be added here
};

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <div className="w-full max-w-4xl p-8 bg-gray-800 text-gray-200 rounded shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h1>
        {Object.entries(faqData).map(([category, qs], idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-lg font-semibold my-5">{category}</h2>
            {qs.map((q, index) => {
              const id = `${category}-${index}`;
              return (
                <div key={id} className="mb-2">
                  <button
                    className={`w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded ${open === id ? 'rounded-b-none' : ''}`}
                    onClick={() => toggle(id)}
                  >
                    {q.question}
                  </button>
                  <div className={`${open === id ? 'block' : 'hidden'} px-4 py-2 border-t border-gray-600 rounded-b`}>
                    {typeof q.answer === 'string' ? <p>{q.answer}</p> : q.answer}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
