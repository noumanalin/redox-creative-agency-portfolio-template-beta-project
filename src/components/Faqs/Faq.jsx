import { useState } from "react";
import { Plus } from "lucide-react";

const faqArray = [
  { id: 0, q: "What is included with my purchase?", a: "You’ll get all HTML, CSS, JS files, starter demo content, and detailed documentation." },
  { id: 1, q: "Do I need extra plugins to build websites?", a: "No plugins are required. Everything is built using standard HTML, CSS, and JavaScript—fully functional out of the box." },
  { id: 2, q: "Can I use the demo images?", a: "Demo images are for preview only and not included due to licensing. You can replace them with your own or use royalty-free images." },
  { id: 3, q: "Can I use the template on multiple websites?", a: "No, one license is for one website only. For multiple sites, purchase additional licenses as per ThemeForest policy." },
  { id: 4, q: "Where can I buy Redox HTML?", a: "You can buy it exclusively from ThemeForest.net by searching “Redox HTML Template.”" },
  { id: 5, q: "How do I get support?", a: "Visit our support portal at https://support.ravextheme.com with your purchase code for assistance." },
  { id: 6, q: "How do I get updates?", a: "Free lifetime updates are available via your ThemeForest account. Just re-download the latest version from your Downloads section." },
  { id: 7, q: "Why choose RavexTheme templates?", a: "We deliver clean, modern, and fast-loading templates with quality code, easy customization, and dedicated support." },
];

const Faq = () => {
  const [openIds, setOpenIds] = useState([]);

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-15 md:columns-2 gap-4">
      {faqArray.map((faq) => {
        const isOpen = openIds.includes(faq.id);
        return (
          <article
            key={faq.id}
            onClick={() => toggleFaq(faq.id)}
            className="rounded-3xl bg-white text-zinc-600 mb-4 overflow-hidden transition-all duration-300 cursor-pointer"
          >
            <div className="w-full p-5 text-left flex justify-between items-center" >
              <p className="font-medium text-zinc-800 pr-4 text-sm md:text-base">
                {faq.q}
              </p>
              <Plus
                size={20}
                className={`text-zinc-600 transform transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                  }`}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="px-5 pb-5 text-zinc-600 text-sm md:text-base">
                {faq.a}
              </div>
            </div>
            
          </article>
        );
      })}
    </div>
  );
};

export default Faq;