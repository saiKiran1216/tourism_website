const data = {
  "Andhra Pradesh": {
    "Anantapur": ["Lepakshi Temple", "Penukonda Fort", "Ahobilam", "Gooty Fort"],
    "Chittoor": ["sri venkateswara temple(Tirupati)", "Talakonda waterfalls", "Srikalahasti", "Kaigal waterfalls", "Kanipakam"],
    "East Godavari": ["Draksharamam", "Coringa Wildlife Sanctuary", "Annavaram Temple"],
    "Guntur": ["Amaravati Stupa", "Uppalapadu Bird Sanctuary", "Kondaveedu Fort"],
    "Kakinada": ["Uppada beach", "Korangi", "Draksharamam", "Kakinada port", "Annavaram Satyanarayana swami temple", "Kakinada Eat street"],
    "Kurnool": ["Oravakallu Rock Garden", "Belum Caves", "Konda Reddy Fort"],
    "Nellore": ["Ranganatha Temple nellore", "Mypadu Beach", "Penchalakona"],
    "Prakasam": ["Cumbum Lake", "Bhagvan Mahavir Caves", "Kothapatnam Beach"],
    "Srikakulam": ["Arasavilli", "srikurmam", "Salihundam", "Baruva Beach", "Kalinga patnam beach", "Mettuguda waterfalls", "Nagavalli riverview park"],
    "Vijayawada": ["Kanakadurgamatha temple", "Prakasham barrage", "Undavelli caves", "Bapu museum", "Benz circle", "Eat street vijayawada"],
    "Visakhapatnam": ["Kailasagiri", "RK beach", "Araku valley", "Indra Gandhi zoological park", "Rushikonda beach", "Aircraft museum", "Borra caves"]
  },
  "Arunachal Pradesh": {
    "Itanagar": ["Itanagar Fort", "Ganga Lake", "Jawaharlal Nehru Museum itanagar ", "Buddha Temple itanagar"],
    "Tawang": ["Tawang Monastery", "Sela Pass", "Madhuri Lake", "Bum La Pass"]
  },
  "Assam": {
    "Dibrugarh": ["Jokai Botanical Garden", "Radha Krishna Mandir", "Dehing Patkai Wildlife Sanctuary"],
    "Guwahati": ["Kamakhya Temple", "Umananda Temple", "Assam State Museum", "Kaziranga National Park (nearby)"],
    "Tezpur": ["Agnigarh", "Mahabhairav Temple", "Cole Park"]
  },
  "Bihar": {
    "Gaya": ["Mahabodhi Temple", "Vishnupad Temple", "Barabar Caves", "Dungeshwari Cave Temples"],
    "Nalanda": ["Nalanda University Ruins", "Hiuen Tsang Memorial Hall", "Surajpur Temple"],
    "Patna": ["Golghar", "Patna Museum", "Takht Sri Patna Sahib", "Gandhi Maidan", "Sanjay Gandhi Biological Park"]
  },
  "Chhattisgarh": {
    "Bilaspur": ["Achanakmar Wildlife Sanctuary", "Kanan Pendari Zoo", "Ratanpur Fort"],
    "Jagdalpur": ["Chitrakote Falls", "Tirathgarh Falls", "Kanger Valley National Park", "Danteshwari Temple"],
    "Raipur": ["Nandan Van Zoo", "Purkhouti Muktangan", "Mahant Ghasidas Museum", "Marine Drive"]
  },
  "Goa": {
    "Margao": ["Colva Beach", "Monte Hill Chapel", "Church of the Holy Spirit", "Margao Municipal Garden"],
    "Panaji": ["Miramar Beach", "Goa State Museum", "Fontainhas", "Immaculate Conception Church", "Salim Ali Bird Sanctuary"],
    "Vasco da Gama": ["Bogmalo Beach", "Japanese Garden", "St. Andrew's Church", "Naval Aviation Museum"]
  },
  "Gujarat": {
    "Ahmedabad": ["Sabarmati Ashram", "Kankaria Lake", "Sidi Saiyyed Mosque", "Adalaj Stepwell"],
    "Dwarka": ["Dwarkadhish Temple", "Bet Dwarka", "Rukmini Devi Temple"],
    "Gir": ["Gir National Park", "Devalia Safari Park"]
  },
  "Haryana": {
    "Gurgaon": ["Kingdom of Dreams", "Ambience Mall", "Sultanpur Bird Sanctuary", "Leisure Valley Park", "Sheetla Mata Mandir"],
    "Kurukshetra": ["Brahma Sarovar", "Jyotisar", "Krishna Museum", "Bhishma Kund"],
    "Panchkula": ["Mata Mansa Devi Temple", "Cactus Garden", "Pinjore Gardens"]
  },
  "Himachal Pradesh": {
    "Dharamshala": ["Dalai Lama Temple", "Bhagsu Waterfall", "Namgyal Monastery", "Kangra Fort"],
    "Manali": ["Hadimba Temple", "Solang Valley", "Rohtang Pass", "Beas River", "Manu Temple"],
    "Shimla": ["Mall Road", "Jakhoo Temple", "Christ Church", "The Ridge", "Kufri"]
  },
  "Jharkhand": {
    "Deoghar": ["Baidyanath Temple", "Tapovan Caves", "Naulakha Mandir"],
    "Jamshedpur": ["Jubilee Park", "Dimna Lake", "Tata Steel Zoological Park"],
    "Ranchi": ["Dassam Falls", "Rock Garden", "Patratu Valley", "Pahari Mandir"]
  },
  "Karnataka": {
    "Bengaluru": ["Cubbon Park", "Bangalore Palace", "Tipu Sultan's Summer Palace", "Lalbagh Botanical Garden", "Nandi Hill", "Skandagiri", "Ulsoor Lake", "Commercial Street"],
    "Hubballi-Dharwad": ["ISKCON Sri Krishna Balarama Temple", "Unkal Lake", "Nrupatunga Betta", "Utsav Rock Garden", "Indira Gandhi Glass House", "Agadi Thota", "Dharwad Adventure Base"],
    "Mangaluru": ["Sulthan Battheri", "Fiza by Nexus", "Tannirbhavi Beach", "Milagres Church", "City Central mall", "Sri Venkataramana Temple", "Panambur Beach", "St.Aloysius Chapel"],
    "Mysuru": ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "Jaganmohan Palace", "Lalitha Mahal Palace", "Chamundeshwari Temple", "Trinesvaraswamy", "Brindavan Gardens"],
    "Tumkuru": ["Markonahalli Dam", "Devarayana Durga", "Jayamangali Black Buck", "Siddara Betta", "Madhugiri Fort", "Namada Chilume", "Chennakeshava Temple", "Pavagada Fort"]
  },
  "Kerala": {
    "Kochi": ["Fort Kochi", "Mattancherry Palace", "Jew Town", "Marine Drive", "Cherai Beach", "Kerala Folklore Museum"],
    "Munnar": ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Echo Point", "Attukad Waterfalls"],
    "Thiruvananthapuram": ["Padmanabhaswamy Temple", "Kovalam Beach", "Napier Museum", "Shankumugham Beach", "Agasthyakoodam"]
  },
  "Madhya Pradesh": {
    "Bhopal": ["Upper Lake", "Bharat Bhavan", "Taj-ul-Masajid", "Van Vihar National Park", "State Museum"],
    "Indore": ["Rajwada Palace", "Lal Bagh Palace", "Kanch Mandir", "Sarafa Bazaar", "Patalpani Waterfall"],
    "Khajuraho": ["Khajuraho Temples", "Raneh Falls", "Jain Temples", "Archaeological Museum"]
  },
  "Maharashtra": {
    "Aurangabad": ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara", "Daulatabad Fort"],
    "Kolhapur": ["Mahalaxmi Temple", "Rankala Lake", "Panhala Fort"],
    "Latur": ["Kharosa Caves", "Udgir Fort", "Ganj Golai"],
    "Mumbai": ["Gateway of India", "Marine Drive", "Elephanta Caves", "Chhatrapati Shivaji Maharaj Terminus", "Sanjay Gandhi National Park", "Marine Drive", " Hanging Gardens", "Jehangir Art Gallery"],
    "Nagpur": ["Deekshabhoomi", "Sitabuldi Fort", "Ambazari Lake & Garden", "Futala Lake", "Raman Science Centre", "Maharajbagh Zoo", "Dragon Palace Temple", "Gorewada Lake & Biodiversity Park", "Seminary Hill", "Zero Mile Stone"],
    "Nashik": ["Trimbakeshwar Temple", "Pandav Leni (Caves)", "Sula Vineyards", "Ramkund (Godavari Ghat)", "Muktidham Temple", "Saptashrungi Devi Temple", "Anjneri Hill", "Harihar Fort (Harshgad)", "Kalaram Temple", "Coin Museum"],
    "Pune": ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Laal Mahaal", "Osho Garden", "Parvati Hill", "Imagicaa", "Della Adventure Park", "Glory Cricket Museum", "Ghangad Fort", "Lohagad Fort"],
    "Raigad": ["Raigad Fort", "Alibaug Beach", "Kolaba Fort", "Murud-Janjira Fort", "Harihareshwar Temple & Beach", "Kihim Beach", "Kashid Beach", "Diveagar Beach", "Shrivardhan Beach", "Revdanda Fort & Beach"],
    "Shirdi": ["Shirdi Sai Baba Temple", "Dixit Wada Museum", "Shani Shingnapur"],
    "Solapur": ["Siddheshwar Temple", "Solapur Fort", "Great Indian Bustard Sanctuary"]
  },
  "Manipur": {
    "Imphal": ["Kangla Fort", "Loktak Lake", "Ima Keithel (Women's Market)", "Manipur State Museum"],
    "Moirang": ["INA Museum", "Loktak Lake", "Keibul Lamjao National Park"]
  },
  "Meghalaya": {
    "Cherrapunji": ["Nohkalikai Falls", "Seven Sisters Falls", "Mawsmai Cave", "Double Decker Living Root Bridge"],
    "Dawki": ["Umngot River", "Shnongpdeng Village", "India-Bangladesh Border View Point"],
    "Shillong": ["Elephant Falls", "Umiam Lake", "Don Bosco Museum", "Shillong Peak", "Ward's Lake"]
  },
  "Mizoram": {
    "Aizawl": ["Durtlang Hills", "Solomon's Temple", "Mizoram State Museum", "Bara Bazar"],
    "Champhai": ["Rih Dil Lake", "Lengteng Wildlife Sanctuary", "Murlen National Park"]
  },
  "Nagaland": {
    "Kohima": ["Kohima War Cemetery", "Nagaland State Museum", "Dzükou Valley", "Catholic Cathedral"],
    "Mon": ["Longwa Village", "Veda Peak", "Shangnyu Village"]
  },
  "Odisha": {
    "Bhubaneswar": ["Lingaraj Temple", "Udayagiri and Khandagiri Caves", "Nandankanan Zoo", "Mukteshwar Temple"],
    "Cuttack": ["Barabati Fort", "Netaji Birth Place Museum", "Mahanadi Barrage"],
    "Puri": ["Jagannath Temple", "Puri Beach", "Chilika Lake", "Konark Sun Temple (nearby)"]
  },
  "Punjab": {
    "Amritsar": ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Partition Museum", "Akal Takht"],
    "Ludhiana": ["Punjab Agricultural University Museum", "Hardy's World", "Rakh Bagh Park"],
    "Patiala": ["Qila Mubarak", "Sheesh Mahal", "Baradari Gardens"]
  },
  "Rajasthan": {
    "Jaipur": ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar", "Jal Mahal", "Albert Hall Museum"],
    "Jodhpur": ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada", "Clock Tower Market", "Mandore Gardens"],
    "Udaipur": ["City Palace", "Lake Pichola", "Jagdish Temple", "Fateh Sagar Lake", "Sajjangarh Palace"]
  },
  "Sikkim": {
    "Gangtok": ["MG Marg", "Tsomgo Lake", "Rumtek Monastery", "Namgyal Institute of Tibetology", "Hanuman Tok"],
    "Pelling": ["Pemayangtse Monastery", "Kanchenjunga Waterfalls", "Rabdentse Ruins", "Singshore Bridge"]
  },
  "Tamil Nadu": {
    "Chennai": ["Marina Beach", "Fort St. George", "Kapaleeshwarar Temple", "Santhome Basilica", "Government Museum (Egmore)", "Valluvar Kottam", "Guindy National Park", "Edward Elliot’s Beach(Besant Nagar Beach)", "Thousand Lights Mosque", "DakshinaChitra Museum"],
    "Madurai": ["Meenakshi Temple", "Thirumalai Nayakar Palace", "Gandhi Memorial Museum", "Koodal Azhagar Temple", "Alagar Kovil", "Pazhamudircholai Murugan Temple", "Mariamman Teppakulam", "Vandiyur Mariamman Temple", "Samanar Hills", " St. Mary’s Cathedral Church"]
  },
  "Telangana": {
    "Hyderabad": ["Charminar", "Golconda Fort", "Hussain Sagar Lake", "Ramoji Film City", "Salar Jung Museum", "Birla Mandir", "Chowmahalla Palace", "Nehru Zoological Park"],
    "Nizamabad": ["Quilla Ramalayam", "Alisagar Reservoir", "Nizamabad Fort", "Sarangapur Temple", "Pocharam Wildlife Sanctuary"],
    "Warangal": ["Warangal Fort", "Thousand Pillar Temple", "Bhadrakali Temple", "Kakatiya Musical Garden", "Pakhal Lake", "Ramappa Temple"]
  },
  "Tripura": {
    "Agartala": ["Ujjayanta Palace", "Neermahal Palace", "Sepahijala Wildlife Sanctuary", "Jagannath Temple", "Tripura Government Museum"],
    "Unakoti": ["Unakoti Rock Carvings", "Unakoti Hill", "Unakoti Wildlife Sanctuary"]
  },
  "Uttar Pradesh": {
    "Agra": ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Itimad-ud-Daulah"],
    "Lucknow": ["Bara Imambara", "Chota Imambara", "Hazratganj Market", "British Residency", "Ambedkar Memorial Park"],
    "Varanasi": ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath", "Manikarnika Ghat", "Banaras Hindu University"]
  },
  "Uttarakhand": {
    "Almora": ["Bright End Corner", "Kasar Devi Temple", "Binsar Wildlife Sanctuary"],
    "Bageshwar": ["Baijnath Temple", "Pindari Glacier", "Gauri Udiyar Caves"],
    "Dehradun": ["Robber’s Cave", "Forest Research Institute", "Tapkeshwar Temple", "Sahastradhara"],
    "Haridwar": ["Har Ki Pauri", "Chandi Devi Temple", "Mansa Devi Temple", "Ganga Aarti"],
    "Mussoorie": ["Kempty Falls", "Lal Tibba", "Camel's Back Road", "Gun Hill", "Mussoorie Lake"],
    "Nainital": ["Naini Lake", "Naina Devi Temple", "Snow View Point", "Tiffin Top", "Eco Cave Gardens"],
    "Pithoragarh": ["Pithoragarh Fort", "Kapileshwar Mahadev", "Askot Sanctuary"],
    "Rishikesh": ["Laxman Jhula", "Ram Jhula", "Triveni Ghat", "Neelkanth Mahadev Temple"]
  
  },
  "West Bengal": {
    "Darjeeling": ["Tiger Hill", "Darjeeling Himalayan Railway", "Peace Pagoda", "Batasia Loop", "Himalayan Mountaineering Institute"],
    "Kolkata": ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple", "Indian Museum", "Marble Palace", "Science City"]
  }
};

function loadCities() {
  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");
  const placesDiv = document.getElementById("places");

  const selectedState = stateSelect.value;
  citySelect.innerHTML = '<option value="">-- Select City --</option>';
  placesDiv.innerHTML = "";

  if (selectedState && data[selectedState]) {
    const cities = Object.keys(data[selectedState]);
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.appendChild(option);
    });
  }
}


function showPlaces() {
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const placesDiv = document.getElementById("places");

  placesDiv.innerHTML = "";

  if (state && city && data[state][city]) {
    const places = data[state][city];
    const placeList = document.createElement("ul");

    places.forEach(place => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = place;
      link.href = `place.html?place=${encodeURIComponent(place)}`;
      link.style.color = "#00ccff";
      link.style.textDecoration = "none";
      li.appendChild(link);
      placeList.appendChild(li);
    });

    placesDiv.innerHTML = `<h2>Famous Places in ${city}:</h2>`;
    placesDiv.appendChild(placeList);
  }
}
