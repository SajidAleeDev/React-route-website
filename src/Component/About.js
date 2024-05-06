import React from 'react'
import { NavLink } from 'react-router-dom';
export default function About() {
  return (
    <>
    <nav>
      <ul className="nav-list">
      <li><i class="fa-solid fa-house-chimney"></i><NavLink className={'khan'} to={"/"}>Home</NavLink></li>
        <li><i class="fa-solid fa-location-dot"></i><NavLink className={'khan'} to={"/About"}>Popular Places</NavLink></li>
        <li><i class="fa-solid fa-phone-volume"></i><NavLink className={'khan'} to={"/Contact"}>Contact</NavLink></li>
        <div className="bdn-list">
          <input type="text" placeholder='search' />
          <button className='bdn'>Search</button>
        </div>
      </ul>
    </nav>
    <div className="list">
    <div className="list2 rm change">
    <img className='img' src="./images/pakistan2.webp" alt="" />
    <h6>Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre.Pakistan is the site of several ancient cultures, including the 8,500-year-old Neolithic site of Mehrgarh in Balochistan, the Indus Valley civilisation of the Bronze Age,[12] and the ancient Gandhara civilisation.[13] The regions that comprise the modern.  </h6>
    
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change2">
    <img className='img' src="./images/india.webp" alt="" />
    <h6>India, country that occupies the greater part of South Asia. It is made up of 28 states and eight union territories, and its national capital is New Delhi, built in the 20th century just south of the historic hub of Old Delhi to serve as India’s administrative center. Its government is a constitutional republic that represents a highly diverse population consisting of thousands of ethnic groups and hundreds of languages. India became the world’s most populous country in 2023, according to estimates by the United Nations.

It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 bce.</h6>
    
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change3">
    <img className='img' src="./images/america.webp" alt="" />
    <h6>he U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking.One of the world's most developed countries, the United States has had the largest nominal GDP since about 1890 and accounted for 15% of the global economy in 2023.[l] It possesses by far the largest amount of wealth of any country and has the highest disposable household income per capita among OECD countries. The U.S. ranks among the world's highest in economic competitiveness, productivity, innovation, human rights, and higher education.</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change3">
    <img className='img' src="./images/uk.webp" alt="" />
    <h6>he United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge. ― Google</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change4">
    <img className='img' src="./images/france.webp" alt="" />
    <h6>France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history. ― Google
President: Emmanuel Macron Trending
Capital: Paris
CO2 emissions per capita: 3.95 metric tons (2020) World Bank
Electricity consumption per capita: 6,939.94 kWh (2014) World Bank
Energy use per capita: 3,692.02 kg of oil equivalent (2015) World Bank
Fertility rate: 1.83 births per woman (2021) World Bank
GDP growth rate: 2.5% annual change (2022) World Bank</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change5">
    <img className='img' src="./images/denmark.webp" alt="" />
    <h6>Denmark is a Scandinavian country comprising the Jutland Peninsula and numerous islands. It's linked to nearby Sweden via the Öresund bridge. Copenhagen, its capital, is home to royal palaces and colorful Nyhavn harbor, plus the Tivoli amusement park and the iconic “Little Mermaid” statue. Odense is writer Hans Christian Andersen’s hometown, with a medieval core of cobbled streets and half-timbered houses. ― Google
Capital: Copenhagen</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change6">
    <img className='img' src="./images/indonesia.webp" alt="/About" />
    <h6>Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Wikipedia
Capital: Jakarta</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change7">
    <img className='img' src="./images/china.webp" alt="" />
    <h6>China, officially the People's Republic of China, is a country in East Asia. With a population exceeding 1.4 billion, it is the world's second-most populous country. China spans the equivalent of five time zones and borders fourteen countries by land. Wikipedia
President: Xi Jinping Trending
Capital: Beijing</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change8">
    <img className='img' src="./images/canada.webp" alt="" />
    <h6>Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline. Wikipedia
Prime minister: Justin Trudeau Trending
Capital: Ottawa</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change9">
    <img className='img' src="./images/germany.webp" alt="" />
    <h6>Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank. ― Google
Capital: Berlin
CO2 emissions per capita: 7.26 metric tons (2020) World Bank</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change10">
    <img className='img' src="./images/japan.webp" alt="" />
    <h6>Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south. Wikipedia
Prime minister: Fumio Kishida Trending
Capital: Tokyo</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change11">
    <img className='img' src="./images/iran.webp" alt="" />
    <h6>Iran, also known as Persia and officially the Islamic Republic of Iran, is a country in West Asia. It is bordered by Iraq to the west and Turkey to the northwest, Azerbaijan, Armenia, the Caspian Sea ... Wikipedia
Capital: Tehran
CO2 emissions per capita: 7.06 metric tons (2020) World Bank</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
   <div className="list">
    <div className="list2 rm change12">
    <img className='img' src="./images/iraq.webp" alt="" />
    <h6>Iraq, officially the Republic of Iraq, is a country in West Asia and in the geopolitical region known as the Middle East. With a population of over 46 million, it is the 33rd-most populous country. It is a federal parliamentary republic that consists of 18 governorates. Wikipedia
Capital: Baghdad
CO2 emissions per capita: 3.84 metric tons (2020) World Bank</h6>
    </div>
    <h2><NavLink className={"visit"} to={"/About"}>Click Down to Visit</NavLink></h2>
   </div>
    </>
  )
}
