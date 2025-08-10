export default function Insights() {
  return (

    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-bold text-gray-800"><LanguageContent lang={lang} en="Navigating the Now, Shaping the Next" ar="استكشاف الحاضر، تشكيل المستقبل" /></h2> */}
          {/* <p className="mt-2 text-gray-600"><LanguageContent lang={lang} en="Our expert perspectives on the trends shaping business across the EMEA region." ar="وجهات نظر خبرائنا حول الاتجاهات التي تشكل مشهد الأعمال في جميع أنحاء منطقة أوروبا والشرق الأوسط وأفريقيا." /></p> */}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Tech hub discussion" className="w-full h-48 object-cover" />
            <div className="p-6">
              {/* <h3 className="font-bold text-lg mb-2"><LanguageContent lang={lang} en="The Rise of Tech Hubs in North Africa: An Investor's Guide" ar="صعود مراكز التكنولوجيا في شمال أفريقيا: دليل المستثمر" /></h3> */}
              {/* <p className="text-gray-600 text-sm mb-4"><LanguageContent lang={lang} en="Beyond the headlines, a quiet revolution is taking place in North Africa's tech scene. We explore the key cities to watch..." ar="بعيدًا عن العناوين الرئيسية، تحدث ثورة هادئة في مشهد التكنولوجيا في شمال أفريقيا. نستكشف المدن الرئيسية التي يجب مراقبتها..." /></p> */}
              <a href="#" className="text-[#C0A062] font-semibold hover:underline">
                {/* <LanguageContent lang={lang} en={<>Read More &rarr;</>} ar={<>اقرأ المزيد &larr;</>} /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
