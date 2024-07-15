import React, { useState } from 'react';

interface FaqProps {}

const FAQ: React.FC<FaqProps> = () => {
  const [openQuestions, setOpenQuestions] = useState<Array<boolean>>([false, false, false, false]);

  const toggleQuestion = (index: number) => {
    const newOpenQuestions = [...openQuestions];
    newOpenQuestions[index] = !newOpenQuestions[index];
    setOpenQuestions(newOpenQuestions);
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-16 lg:py-24">
      <div className="mb-8 text-center md:mb-12 lg:mb-16">
        <h2 className="text-3xl font-semibold md:text-5xl">
          Frequently Asked {' '}
          <span className="bg-cover bg-center px-4 text-white bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')]">
            Questions
          </span>
        </h2>
      </div>
      {faqData.map((item, index) => (
        <div key={index} className="mb-6 rounded-xl border border-solid border-black p-8 max-md:px-4 max-md:py-7">
          <div
            onClick={() => toggleQuestion(index)}
            className="mb-4 flex cursor-pointer items-start justify-between"
          >
            <p className="text-xl font-semibold max-md:text-lg">{item.question}</p>
            <div className="relative ml-10 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#1353fe]">
              <div
                className={`absolute h-4 w-0.5 bg-white transition-transform ${
                  openQuestions[index] ? 'transform rotate-90' : ''
                }`}
              ></div>
              <div className="h-0.5 w-4 border border-solid border-white"></div>
            </div>
          </div>
          <div
            className="mb-4 text-[#636262]"
            style={{ display: openQuestions[index] ? 'block' : 'none' }}
          >
            {item.answer}
          {item?.list?.map((listItem, i) => {
            return <ol key={i} className='block my-6'><li>{ listItem }</li></ol>
          })}
          </div>

        </div>
      ))}
      <p className="text-center">
        Can't find the answer you're looking for? Reach out to our{' '}
        <a href="#" className="font-bold text-[#1353fe]">
          customer support team
        </a>
        .
      </p>
    </section>
  );
};



const faqData = [
  {
    question: 'What is product arbitrage?',
    answer: 'Product arbitrage refers to the practice of buying a product from one market or source at a lower price and then selling it in another market or platform at a higher price, thereby making a profit from the price difference. It typically involves exploiting price discrepancies between different geographic regions, online platforms, or sales channels. Arbitrageurs take advantage of inefficiencies in pricing to generate profit without adding significant value to the product itself.',
  },
  {
    question: 'How does your platform work?',
    answer: 'We streamline the process of identifying, purchasing, and reselling products across different markets to capitalize on price differentials, thereby enabling users to generate profits through efficient trading practices.',
  },
  {
    question: 'Is it legal to engage in product arbitrage?',
    answer: 'Yes, engaging in product arbitrage itself is generally legal. It involves buying goods at a lower price in one market or platform and reselling them at a higher price in another market. This practice is legal because it takes advantage of market inefficiencies and price differences, which are natural aspects of competitive markets.',
  },
  {
    question: 'What are the benefits of using your platform for product arbitrage?',
    answer: 'Thank you for your interest in our platform for product arbitrage! Our platform offers several key benefits that can help you maximize your arbitrage opportunities:',
    list: [
      "Access to Lucrative Opportunities: We continuously scan multiple markets and platforms to identify products with significant price differentials, ensuring you always have access to profitable opportunities.",
      "Efficiency and Convenience: Our streamlined process simplifies sourcing, purchasing, and reselling, saving you time and effort.",
      "Profit Potential: Many of our users have successfully capitalized on our insights to earn substantial profits by leveraging market inefficiencies.",
      "Tools and Support: We provide advanced analytics, real-time price monitoring, and personalized alerts to help you make informed decisions and optimize your arbitrage strategies.",
      "Risk Management: Our platform includes features designed to manage risks effectively, ensuring you can arbitrage with confidence.",
      "Don't just take our word for it—many of our users have shared their success stories with us. I invite you to explore our platform further or reach out to our support team for more details. We're here to help you succeed in product arbitrage!",
    ],
  },
  {
    question: 'How do I get started as a user?',
    answer: "Thank you for your interest in getting started with our product arbitrage platform! Getting started is straightforward, and we're here to guide you through the process step by step.",
    list: [
      "Sign Up: The first step is to create an account on our website. You can do this by visiting www.salesgurucommunity.com and clicking on the 'Sign Up' button. Fill in your details, and you'll receive a confirmation email to activate your account.",
      "Explore Opportunities: Once logged in, take some time to explore the opportunities available on our platform. We curate a wide range of products with potential price discrepancies across different markets.",
      " Research and Analysis: Use our tools and resources to research products that interest you. Analyze price trends, market demand, and potential profit margins to identify promising arbitrage opportunities.",
      "Make Purchases and list for sale: Once you've pinpointed a product for arbitrage, proceed with the purchase, and our platform will automatically list it for sale in markets where it commands a higher price.",
      "Manage Transactions: Monitor your sales and manage transactions directly through our platform. We offer secure payment processing and support to ensure smooth transactions.",
      "If you have any questions or need assistance at any stage, our customer support team is here to help. Feel free to reach out through the messaging feature on our website.",
      "We're excited to have you join our community of successful arbitrageurs. Happy arbitraging!",
    ],
  }
];


export default FAQ;
