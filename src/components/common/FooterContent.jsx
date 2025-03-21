"use client"
import React, { useState } from 'react';
import Icons from './Icons';

const FooterContent = () => {
  const [selectedProperty, setSelectedProperty] = useState('');

  const lodhaProperties = [
    { title: "Casa Bella", url: "https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-bella" },
    { title: "Casa Bella Gold", url: "https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-bella-gold" },
    { title: "Casa Evergreen", url: "https://www.lodhagroup.com/projects/residential-property-in-mumbai/casa-evergreen-vikhroli" },
    { title: "Casa Foresta by Lodha", url: "https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-foresta" },
    { title: "Casa Olivia", url: "https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-olivia" },
    { title: "Casa Premier by Lodha", url: "https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-premier" },
    { title: "Casa Rio", url: "https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-rio" },
    { title: "Casa Rio Gold", url: "https://www.lodhagroup.com/palava-city/projects/residential-property-in-dombivli/casa-rio-gold" },
    { title: "Crown Dombivli", url: "https://www.lodhagroup.com/projects/residential-property-in-dombivli/lodha-crown-dombivli" },
    { title: "Crown Kolshet", url: "https://www.lodhagroup.com/projects/residential-property-in-thane/lodha-crown-kolshet" },
    { title: "Crown Taloja", url: "https://example.com/crown-taloja" },
    { title: "Lakeshore Greens", url: "https://example.com/lakeshore-greens" },
    { title: "Lodha Acenza", url: "https://example.com/lodha-acenza" },
    { title: "Lodha Adrina", url: "https://example.com/lodha-adrina" },
    { title: "Lodha Altero Wakad ", url: "https://www.lodhagroup.com/projects/residential-property-in-pune/lodha-altero-wakad" },
    { title: "Lodha Altus", url: "https://example.com/lodha-altus" },
    { title: "Lodha Amara", url: "https://example.com/lodha-amara" },
    { title: "Lodha Aura", url: "https://example.com/lodha-aura" },
    { title: "Lodha Azur", url: "https://example.com/lodha-azur" },
    { title: "Lodha Bel Air", url: "https://example.com/lodha-bel-air" },
    { title: "Lodha Bella Vita", url: "https://example.com/lodha-bella-vita" },
    { title: "Lodha Bellagio", url: "https://example.com/lodha-bellagio" },
    { title: "Lodha Bellavista", url: "https://example.com/lodha-bellavista" },
    { title: "Lodha Bellevue", url: "https://example.com/lodha-bellevue" },
    { title: "Lodha Bellissimo", url: "https://example.com/lodha-bellissimo" },
    { title: "Lodha Belmondo", url: "https://example.com/lodha-belmondo" },
    { title: "Lodha Corinthia", url: "https://example.com/lodha-corinthia" },
    { title: "Lodha Cullinan", url: "https://example.com/lodha-cullinan" },
    { title: "Lodha Divino", url: "https://example.com/lodha-divino" },
    { title: "Lodha Estilo", url: "https://example.com/lodha-estilo" },
    { title: "Lodha Eternis", url: "https://example.com/lodha-eternis" },
    { title: "Lodha Evoq", url: "https://example.com/lodha-evoq" },
    { title: "Lodha Fiorenza", url: "https://example.com/lodha-fiorenza" },
    { title: "Lodha Giardino", url: "https://example.com/lodha-giardino" },
    { title: "Lodha Golfview", url: "https://example.com/lodha-golfview" },
    { title: "Lodha Hanging Gardens", url: "https://example.com/lodha-hanging-gardens" },
    { title: "Lodha Hosa Road", url: "https://example.com/lodha-hosa-road" },
    { title: "Lodha Magnus", url: "https://example.com/lodha-magnus" },
    { title: "Lodha Marq", url: "https://example.com/lodha-marq" },
    { title: "Lodha Massimo", url: "https://example.com/lodha-massimo" },
    { title: "Lodha Mirabelle", url: "https://example.com/lodha-mirabelle" },
    { title: "Lodha New Cuffe Parade", url: "https://example.com/lodha-new-cuffe-parade" },
    { title: "Lodha Opulis", url: "https://example.com/lodha-opulis" },
    { title: "Lodha Palais", url: "https://example.com/lodha-palais" },
    { title: "Lodha Panache", url: "https://example.com/lodha-panache" },
    { title: "Lodha Park", url: "https://example.com/lodha-park" },
    { title: "Lodha Premium", url: "https://example.com/lodha-premium" },
    { title: "Lodha Regalia", url: "https://example.com/lodha-regalia" },
    { title: "Lodha Riservo", url: "https://example.com/lodha-riservo" },
    { title: "Lodha Serenity", url: "https://example.com/lodha-serenity" },
    { title: "Lodha Splendora", url: "https://example.com/lodha-splendora" },
    { title: "Lodha Stella", url: "https://example.com/lodha-stella" },
    { title: "Lodha Sterling", url: "https://example.com/lodha-sterling" },
    { title: "Lodha Trinity", url: "https://example.com/lodha-trinity" },
    { title: "Lodha Trump Tower", url: "https://example.com/lodha-trump-tower" },
    { title: "Lodha Unica", url: "https://example.com/lodha-unica" },
    { title: "Lodha Upper Thane", url: "https://example.com/lodha-upper-thane" },
    { title: "Lodha Venezia", url: "https://example.com/lodha-venezia" },
    { title: "Lodha Vero", url: "https://example.com/lodha-vero" },
    { title: "Lodha Vista", url: "https://example.com/lodha-vista" },
    { title: "Lodha Wakad", url: "https://example.com/lodha-wakad" },
    { title: "Lodha Woods", url: "https://example.com/lodha-woods" },
    { title: "Lodha World Crest", url: "https://example.com/lodha-world-crest" },
    { title: "Lodha World One", url: "https://example.com/lodha-world-one" },
    { title: "Lodha World Towers", url: "https://example.com/lodha-world-towers" },
    { title: "Lodha World View", url: "https://example.com/lodha-world-view" },
    { title: "Palava Ready Homes", url: "https://example.com/palava-ready-homes" },
    { title: "Villa Royale Palava", url: "https://example.com/villa-royale-palava" }
  ];

  const footerLinks = [
    {
      category: "Residential Localities",
      links: [
        { title: "South Mumbai", url: "https://www.lodhagroup.com/residential-properties-in-south-mumbai" },
        { title: "Western Suburbs Mumbai", url: "https://www.lodhagroup.com/residential-properties-in-western-suburbs-mumbai" },
        { title: "Eastern Suburbs Mumbai", url: "https://www.lodhagroup.com/residential-properties-in-eastern-suburbs-mumbai" },
        { title: "Thane", url: "https://www.lodhagroup.com/residential-projects-in-thane" },
        { title: "Kalyan Dombivali", url: "https://www.lodhagroup.com/residential-projects-in-kalyan-dombivali" },
        { title: "Pune", url: "https://www.lodhagroup.com/residential-property-in-pune" },
        { title: "Bangalore", url: "https://www.lodhagroup.com/residential-projects-in-bangalore" }
      ]
    },
    {
      category: "Commercial Properties",
      links: [
        { title: "Lodha Excelus", url: "https://www.lodhagroup.com/projects/commercial-property-in-mumbai/lodha-excelus" },
        { title: "Lodha iThink", url: "https://www.lodhagroup.com/projects/commercial-property-in-dombivli/ithink-palava-business-district" },
        { title: "Lodha Life Sciences", url: "https://www.lodhagroup.com/projects/commercial-property-in-dombivli/lodha-lifesciences-hub" },
        { title: "Lodha Signet Kalyan Shil road", url: "https://www.lodhagroup.com/projects/commercial-property-in-mumbai/lodha-signet-kalyan-shil-road" },
        { title: "Lodha Signet Lower Parel", url: "https://www.lodhagroup.com/projects/commercial-property-in-mumbai/lodha-signet-lower-parel" },
        { title: "Lodha Signet Matunga", url: "https://www.lodhagroup.com/projects/commercial-property-in-mumbai/lodha-signet-matunga" },
        { title: "Lodha Signet Thane", url: "https://www.lodhagroup.com/projects/commercial-property-in-thane/lodha-signet-thane" },
        { title: "Lodha Signet Vikhroli", url: "https://www.lodhagroup.com/projects/commercial-property-in-mumbai/lodha-signet-vikhroli" },
        { title: "Lodha Supremus New Cuffe Parade", url: "https://www.lodhagroup.com/projects/commercial-property-in-wadala/lodha-supremus-new-cuffe-parade" },
        { title: "Lodha Supremus Thane", url: "https://www.lodhagroup.com/projects/commercial-property-in-thane/lodha-supremus-thane" },
        { title: "One Lodha Place", url: "https://www.lodhagroup.com/projects/commercial-property-in-mumbai/one-lodha-place" }
      ]
    },
    {
      category: "Commercial Localities",
      links: [
        { title: "Palava", url: "https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Palava" },
        { title: "Alibaug", url: "https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Alibaug" },
        { title: "Mumbai", url: "https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Mumbai" },
        { title: "Pune", url: "https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Pune" },
        { title: "Bangalore", url: "https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Bangalore" },
        { title: "Thane", url: "https://www.lodhagroup.com/all-projects?project_type=Commercial&city=Thane" }
      ]
    },
    {
      category: "BHK",
      links: [
        { title: "5+ Beds", url: "https://www.lodhagroup.com/all-projects?bedrooms=5+ Beds" },
        { title: "4 Beds", url: "https://www.lodhagroup.com/all-projects?bedrooms=4 Beds" },
        { title: "3 Beds", url: "https://www.lodhagroup.com/all-projects?bedrooms=3 Beds" },
        { title: "2 Beds", url: "https://www.lodhagroup.com/all-projects?bedrooms=2 Beds" }
      ]
    }
  ];

  const columns = 5;
  const rows = Math.ceil(lodhaProperties.length / columns);

  const columnWiseData = Array.from({ length: columns }, () => []);

  lodhaProperties.forEach((property, index) => {
    const columnIndex = Math.floor(index / rows);
    columnWiseData[columnIndex].push(property);
  });

  const handlePropertyClick = (e, title) => {
    e.preventDefault();
    setSelectedProperty(title);
  };
  const [isRotated, setIsRotated] = useState(false);

  return (
    <div className='bg-light-orange'>
      <div className="flex gap-2 items-center">
        <span className='w-full h-[0.5px] bg-light-gray'></span>
        <div
          className={`absolute left-1/2 -translate-x-1/2 cursor-pointer transition-transform duration-300 ${isRotated ? "rotate-180" : "rotate-0"
            }`}
          onClick={() => setIsRotated(!isRotated)}
        >
          <Icons icon={"downUpArrow"} />
        </div>
        <span className='w-full h-[0.5px] bg-light-gray'></span>
      </div>
      <div className='max-w-[1170px] mx-auto px-4 xl:px-0 pb-8'>
        <div className={`transition-all duration-1000 overflow-clip ${isRotated ? "max-h-[2400px] lg:max-h-[1200px]" : "max-h-0"}`}>
          <div className="footer pt-[40px] px-4">
            <p className="mb-4 text-base font-bold text-left">Residential Properties</p>

            <div className="grid grid-cols-2 lg:grid-cols-5 mt-[15px] gap-y-[10px] gap-x-4 sm:gap-0">
              {columnWiseData.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col">
                  {column.map((property, index) => (
                    <a
                      key={index}
                      href={property.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 ease-in-out text text-zinc-400 hover:text-zinc-700 text-[14px] mt-[10px]"
                      onClick={(e) => handlePropertyClick(e, property.title)}
                    >
                      {property.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="max-w-[1170px] lg:mr-[30px] mt-[30px] px-[20px] grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:flex lg:w-full lg:justify-between">
            {footerLinks.map((section, index) => (
              <div key={index} className="w-full text-left lg:w-auto lg:flex lg:flex-col lg:gap-y-4 md:col-span-2 ">
                <p className="mb-3 font-bold text-xl">{section.category}</p>

                <div className="grid grid-cols-2 w-full gap-x-3 gap-y-2 mb-[20px] lg:grid-cols-1">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="w-full text-left">
                      <a href={link.url} className="text-zinc-400 hover:text-zinc-700 text-[15px]">
                        {link.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-left text-zinc-400 pl-[20px]">
            * By residential sales FY14-24
          </p>
        </div>

        <div >
          <p className='pt-8 text-[#6D6E70] text-center text-xs font-normal !leading-143' >
            © Lodha Group 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;












