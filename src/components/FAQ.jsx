import React from "react";

const FAQ = () => {
  return (
    
    <div className="w-11/12 mx-auto my-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-white">
        Frequently Asked Questions
      </h2>

<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold text-lg text-blue-600">1. How do I book a tutor?</div>
  <div className="collapse-content text-gray-700 dark:text-white"> Simply go to the tutor details page and click the "Book" button. Make sure you're logged in first!</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold text-lg text-blue-600">2. Is the platform free to use?</div>
  <div className="collapse-content text-gray-700 dark:text-white">Yes! Browsing tutors and creating an account is completely free. You only pay when you book a tutor.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold text-lg text-blue-600">3. Can I become a tutor on this platform?</div>
  <div className="collapse-content text-gray-700 dark:text-white">Absolutely. Just log in and use the "Add Tutorials" section to publish your tutorial offerings.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold text-lg text-blue-600">4. How do reviews work?</div>
  <div className="collapse-content text-gray-700 dark:text-white"> After booking a tutor, you’ll see a "Review" button in your My Booked Tutors page. Each user can review a tutor once.</div>
</div>
    </div>
  );
};

export default FAQ;