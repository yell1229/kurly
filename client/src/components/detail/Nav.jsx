import React,{useState, useEffect} from 'react';

export default function Nav({sections}) {
    const [activeSection, setActiveSection] = useState(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY; // 수직으로 스크롤 된 값
        const currentSection = sections.find(({ ref }) => {
          if(ref.current){
            const offsetTop = ref.current.offsetTop;
            const offsetBottom = offsetTop + ref.current.offsetHeight;
            return currentScrollPos >= offsetTop && currentScrollPos < offsetBottom;
          }
          return false;
        });
        if(currentSection) setActiveSection(currentSection.id);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);
  console.log('activeSection',activeSection);
  
    return (
      <div className='nav_area'>
        {sections.map(({ id, ref }) => (
          <section key={id} ref={ref} className={activeSection === id ? "active" : ""}>
            <h2>{id}</h2>
            <p>Section content</p>
          </section>
        ))}
      </div>
    );
}

