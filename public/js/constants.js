// Options the user can type in
const prompts = [
  ["hi", "hey", "hello","hlo","hi hello"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what", "why", "how", "where", "when"],
  [""],
  ["then"],
  [
    "history",
    "do you know history of this college"
  ],
  [
    "location",
    "where is nitk located"
  ],
  [
    "contact",
    "how to contact administrative block",
    "show contact details of administrative block "
  ],
  [
    "about",
    "say something about this college",
    "what do you know about the college"
  ],
  ["awards"],
  [
    "chairperson",
    "who is the chair person",
    "do you know the chair person"
  ],
  [
    "director",
    "who is the director",
    "do you know the director of this college"
  ],
  [
    "deputydirector",
    "deputy director",
    "who is deputy director",
    "do you know who is deputy director"
  ],
  ["hod"], 
  [
    "water resources",
    "water resources & ocean engineering",
    "water resources and ocean engineering",
    "who is hod of water resources",
    "who is hod of water resources & ocean engineering",
    "who is hod of water resources and ocean engineering"
  ],
  [
    "chemical engineering",
    "chemical",
    "who is hod of chemical engineering",
    "who is hod of chemical engineering department",
    "who is hod of chemical branch",
    "who is hod of chemical  department"
  ],
  ["chemistry",
  "who is hod of chemistry department",
  "who is hod of chemistry branch"
  ],
  [
    "civil engineering",
    "civil",
    "civil department",
    "who is hod of civil engineering branch",
    "who is hod of civil engineering department",
    "who is hod of civil department",
    "who is hod of civil branch"
  ],
  [
    "computer science engineering",
    "cse",
    "cse department",
    "computer science and engineering",
    "who is the hod of cse department",
    "who is hod of cse branch",
    "who is hod of computer science and engineering department",
    "who is hod of computer science and engineering branch",
    "who is hod of computer science engineering branch",
    "who is hod of computer science engineering department",
    "who is hod of computer science branch",
    "who is hod of computer science department"
  ],
  [
    "electrical and electronics engineering",
    "eee",
    "electrical & electronics engineering",
    "who is hod of electrical & electronics engineering branch",
    "who is hod of electrical and electronics engineering branch",
    "who is hod of eee branch",
    "who is hod of electrical & electronics engineering department",
    "who is hod of electrical and electronics engineering department",
    "who is hod of eee department"
  ],
  [
    "electronics and communication engineering",
    "ece",
    "who is hod of electronics and communication engineering",
    "who is hod of electronics and communication engineering branch",
    "who is hod of electronics and communication engineering department",
    "who is hod of ece",
    "who is hod of ece branch",
    "who is hod of ece department"
  ],
  [
    "information technology",
    "it",
    "it department",
    "who is hod of information technology",
    "who is hod of information technology  branch",
    "who is hod of information technology  department",
    "who is hod of it",
    "who is hod of it branch",
    "who is hod of it department"
  ],
  [
    "mechanical engineering",
    "me",
    "who is hod of mechanical engineering",
    "who is hod of mechanical engineering  branch",
    "who is hod of mechanical engineering department",
    "who is hod of me",
    "who is hod of me branch",
    "who is hod of me department"

  ],
  [
    "metallurgical and materials engineering",
    "metallurgical engineering",
    "who is hod of metallurgical and materials engineering",
    "who is hod of metallurgical and materials engineering  branch",
    "who is hod of metallurgical and materials engineering department",
    "who is hod of metallurgica",
    "who is hod of metallurgica branch",
    "who is hod of metallurgica department"
  ],
  [
    "mining engineering",
    "who is hod of mining engineering",
    "who is hod of mining engineering  branch",
    "who is hod of mining engineering department",
    "who is hod of mining  branch",
    "who is hod of mining department",
  ],
  [
    "physics",
   "who is hod of physics branch",
    "who is hod of physics department"
  ],
  ["library"],
  [
    "ccc",
    "central computer center",
    "central_computer_center",
    "where is ccc",
    "where is computer lab"
  ],
  [
    "hcc",
    "health_care",
    "health care center",
    "where is hcc",
    "where is clinic"
  ],
  [
    "guest_house",
    "where is guest house",
    "guest house"
  ],
  [
    "hostels",
    "how about hostels",
    "say about hostels"
  ],
  [
    "sja",
    "where is sja",
    "where is silver jubile auditorium"
  ],
  [
    "sac",
    "where is sac",
    "where is student activity center"
  ],
  [
    "swimming_pool",
    "swimming pool",
    "where is swimming pool",
    "where is pool",
  ],
  ["amul"],
  ["nandini"],
  [
    "food_court",
    "where is food court",
    "food court"
  ],
  ["nescafe"],
  ["samudra_darshan"],
  ["night_canteen"],
  ["post_office"],
  [
    "bank",
    "is there any bank in the campus",
    "information about banks"
  ],
  [
    "shopping_centers",
    "are there any shopping centers",
    "shopping centers"
  ],

  
]

// Possible responses, in corresponding order

const replies = [
  ["Hello! , How may i help you ..!!!"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am just a bot", "I am a bot. What are you?"],
  ["Puttaraja and Rakesh"],
  ["I am nameless", "I don't have a name"],
  ["Happy too..!!!"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["ok then..."],
  ["Bye", "Goodbye", "See you later"],
  ["Great question"],
  ["Please say something "],
  ["What do you want to talk about?"],
  [
    "1960 Founded as Karnataka Regional Engineering College (KREC)",
    "2002 Upgraded to National Institute of Technology Karnataka (NITK)",
    "2009 Golden Jubilee celebrations inaugurated"
  ],
  ["NITK is located on the coastal belt of Karnataka ,on the National Highway 66, at about 22 kms from Mangalore towards Udupi. "],
  ["Phone : 0824 247 4000 , Email : registrar@nitk.ac.in , Location : NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka - 575 025"],
  ["National Institute of Technology Karnataka, Surathkal is located in Mangalore City, Karnataka State, India. The Institute was established as Karnataka Regional Engineering College (KREC) in 1960, and upgraded as National Institute of Technology Karnataka (NITK) in 2002. "],
  [
    " 2019 Ranked 2nd by CSR-GHRDC under the category “Colleges of Super Excellence . Ranked 5th in Times Engineering Survey.Ranked 21st among top engineering institutions in India as per NIRF ranking",
    " 2018 Ranked 21st among top engineering institutions in India as per NIRF ranking . For more details visit : https://www.nitk.ac.in/awards--recognitions"
  ],
  ["Dr. K. Balaveera Reddy - Chairperson, Board of Governors"],
  ["Prof. Karanam Umamaheshwar Rao - Director , NITK Surathkal"],
  ["Prof. Ananthanarayana V S - Deputy Director "],
  ["Please Enter or Say department name "],
  ["Dr. B.M.Dodamani - Email: hodwroe@nitk.edu.in"],
  ["Dr. Prasanna B. D -  Email: prsn@nitk.edu.in "],
  ["Dr. Arun Mohan Isloor - Email: isloor@yahoo.com "],
  ["Dr. K. Swaminathan - Email: swami7192@gmail.com "],
  ["Dr. Shashidhar G Koolagudi - Email: koolagudi@nitk.edu.in"],
  ["Dr. Shubhanga K. N. - Email: knsa1234@yahoo.com "],
  ["Dr. T. Laxminidhi - Email: laxminidhi_t@nitk.edu.in"],
  ["Dr. Biju R. Mohan - Email: biju@nitk.ac.in"],
  ["Dr. Satyabodh M Kulkarni - Email: hodmechanical@nitk.edu.in"],
  ["Prof. K. Narayan Prabhu - Email: hodmme@nitk.edu.in"],
  ["Dr. M. Aruna - Email: arunamangalpady@gmail.com"],
  ["Dr. Ajith K. M. -  Email: physicsnitk@gmail.com"],
  ["Situated in 2nd floor of the New Sports Complex   Ph: (0824) 247 3063 , E-Mail: library@nitk.edu.in"],
  ["The CCC occupies the ground and first floor of the building opposite to the Silver Jubilee Auditorium.CCC is available for curricular and co-curricular activities for 12 hours on week days and 8 hours on week ends and general holidays.mailto:chairmanccc@nitk.edu.in"],
  ["Located next to the CCC and Opposite of the Main Sports Ground , Working Hours : 10AM - 6PM , Ambulance No : +91 9880375287"],
  ["Institute has 4 Guest Houses ,they are located on the western side of the National Highway (NH66), near the beach (Arabian Sea). For more details conatact Guest House Manager - Mr. Babu Shetty Phone : 0824-2473820, 0824-2474065"],
  ["Hostels for both boys and girls are available in the campus. There are 12 Hostel blocks for boys, 5 hostel blocks for girls with power backup."],
  ["Silver Jubilee Auditorium (SJA) Auditorium of about 1,200 seating capacity is available.General institute programs like orientation , any inauguration functions are held.And movies are filmed occassionally."],
  ["Students Activity Centre (Open Air Theatre) . One open Air theatre of about 1000 seating capacity is available.It is a platform for students to discuss or practice about the events conducted by them."],
  ["It is present near Volley Ball court. Timings : 5:45 - 8:00 AM and 4:00 - 8:00 PM "],
  ["Located near sports complex (soft drinks and chats are available)"],
  ["Located opposite to Mechanical Engineering Department(soft drinks and chats are available)"],
  ["Located right next to SJA (Menu  : Break Fast , Meals ,Fruit Juices )"],
  ["Located opposite to 2nd Block of Boys Hostel (Aravali) famous for Noodles "],
  ["Present in Top Floor of the Administrative Block (Menu : North Indian Food Items , Break Fast , Meals , Fruit Juices)"],
  ["There are 2 night canteens , Boys night canteen(Phone no : 09380802849) and Girls night canteen(Phone no : 09380943425) (Timings : Till 2 AM )"],
  ["The post office in the campus caters to all the mail-related services of the residents of the institute ."],
  ["Two banks (Canara bank and State bank of India) with ATM facility are available in the campus.Students education loan is available. Contact details SBI : 08242449360 , Canara bank : 09483508517"],
  ["Two shopping centers exists in the campus which include students’ and employees’ Cooperative Societies, bakery, vegetable shop, cloth shop, tailoring, saloon, beauty parlor, laundry, printing press, provisional store, among others"],
  
]

// Random for any other user input

const alternative = [ 
  "Try again"
]

