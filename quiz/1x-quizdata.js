const quizData = [
    {
        question: "Hvad er en variabel i programmering?",
        choices: [
            "Et program, der kan køre på en computer",
            "En beholder, der gemmer en værdi",
            "En fejl i koden",
            "En funktion, der gentager sig selv"
        ],
        answer: 1
    },
    {
        question: "(Casper) hvor mange bytes er en megabyte?",
        choices: [
            "1.000.000",
            "1.000",
            "100.000",
            "1.000.000.000"
        ],
        answer: 1
    },
    {
        question: "(Casper) hvordan finde man alle produkter med en pris under 1000 kr. i sql når man har med databaser?",
        choices: [
            "SELECT * From Produkt where pris < 1000;",
            "SELECT Produkt where pris < 1000;",
            "SELECT * where Produkt pris < 1000;",
            "SELECT * From Produkt if pris < 1000;"
        ],
        answer: 1
    },
    {
        question: "(Cecilie) Hvad står GDPR for?",
        choices: [
            "Gode Danske Psykologers Rettigheder ",
            "Great day pride right",
            "General data protection regulation",
            "Glemsomme danskeres pande rester"
        ],
        answer: 3
    },
    {
        question: "(Cecilie) Hvorfor er GDPR noget vi skal lærer om",
        choices: [
            "Det er en del af pensum",
            "Det skal vi egentligt ikke",
            "Donald Trump har bestemt det",
            "Fordi hunden tissede i sengen"
        ],
        answer: 1
    },
    {
        question: "(Dea) Hvad er en algoritme i informatik?",
        choices: [
            "Et program, der er skrevet i Java",
            "Et stykke hardware i computeren",
            "En trinvis opskrift på at løse et problem",
            "Et grafisk element på en hjemmeside"
        ],
        answer: 2
    },
    {
        question: "(Dea) Hvilket af følgende er et eksempel på en algoritme?",
        choices: [
            "Bubble Sort",
            "Photoshop",
            "WiFi",
            "Harddisk"
        ],
        answer: 0
    },
    {
        "question": "(Frederik) Hvad er den største forskel mellem symmetrisk og asymmetrisk kryptering?",
        "choices": [
            "Symmetrisk kryptering bruger flere computere på én gang",
            "Asymmetrisk kryptering kræver ingen nøgler",
            "Symmetrisk bruger én nøgle, asymmetrisk bruger to",
            "Asymmetrisk kryptering kan ikke bruges på internettet"
        ],
        "answer": 2
    },
    {
        "question": "(Frederik) Hvad bruges HTTPS primært til?",
        "choices": [
            "At lave hjemmesider hurtigere",
            "At give hjemmesider en flottere stil",
            "At beskytte data, der sendes mellem bruger og server",
            "At skjule IP-adressen helt"
        ],
        "answer": 2
    },
    {
        question: "(Marie) Hvad står UX for?",
        choices: [
            "User Experience",
            "User Interface",
            "User Equipment",
            "Unknown User"
        ],
        answer: 1
    },
    {
        question: "(Marie) Hvad står UI for?",
        choices: [
            "User Experience",
            "Uniform Resource Locator",
            "User Interface",
            "Interaction Design"
        ],
        answer: 3
    },
    {
        question: "(Magnus) Hvad står CIA for i IT-sikkerhed?",
        choices: [
            "Central Intelligence Agency",
            "Code, Input, Access",
            "Confidentiality, Integrity, Availability",
            "Control, Internet, Access"
        ],
        answer: 2
    },
    {
        question: "(Magnus) Hvorfor kan det være svært at balancere CIA-modellen?",
        choices: [
            "Fordi man kun må vælge én af principperne",
            "Fordi systemer altid er sikre fra starten",
            "Fordi øget sikkerhed ofte kan mindske tilgængeligheden",
            "Fordi CIA-modellen kun gælder for militær IT"
        ],
        answer: 2
    },
    {
        question: "(Mathias) Hvad er en stærk adgangskode?",
        choices: [
            "En adgangskode, som er let at huske",
            "En lang adgangskode",
            "En adgangskode, som er lang og indeholder symboler, tal og store bogstaver",
            "En kort adgangskode"
        ],
        answer: 2
    },
    {
        question: "(Mathias) Hvad er den anbefalede længde på en adgangskode?",
        choices: [
            "1-4 tegn",
            "4-7 tegn",
            "8-14 tegn",
            "13-18 tegn"
        ],
        answer: 2
    },
    {
        question: "(Philip) Hvad står IP for?",
        choices: [
            "Internet protector",
            "Intet Password",
            "Internet Protocol",
            "Internet Password"
        ],
        answer: 2
    },
    {
        question: "(Philip) Der er ca. 4,3 milliarder mulige adresser i IPv4 systemet, hvor mange er der i IPv6",
        choices: [
            "17,2 milliarder",
            "3.4*10^38",
            "3",
            "1,72*10^38"
        ],
        answer: 1
    },
    {
        question: "(Vibe) Hvad står CRUD for?",
        choices: [
            "Create, Read, Update, Download",
            "opret, læs, opdater, slet",
            "Create, Read, Update, Delete",
            "Inserrt, read, update, delete"
        ],
        answer: 2
    },
    {
        question: "(Vibe) Hvad hedder CRUD i SQL",
        choices: [
            "Insert, Select, Update, Delete",
            "Insert, Select, Renew, Remove",
            "indsæt, vælg, opdater, fjern",
            "Create, Read, Update, Delete"
        ],
        answer: 0
    },
    {
        question: "(Volkan) Hvad er kryptering?",
        choices: [
            "En metode til at komprimere data",
            "En teknik til at gøre data ulæselig for uvedkommende",
            "En type computerprogram",
            "En måde at slette filer permanent"
        ],
        answer: 1
    },
    {
        question: "(Volkan) Hvad er forskellen på symmetrisk og asymmetrisk kryptering?",
        choices: [
            "Symmetrisk kryptering bruger én nøgle, mens asymmetrisk kryptering bruger to nøgler",
            "Symmetrisk kryptering er langsommere end asymmetrisk kryptering",
            "Asymmetrisk kryptering bruger én nøgle, mens symmetrisk kryptering bruger to nøgler",
            "Der er ingen forskel mellem de to metoder"
        ],
        answer: 0
    },
    {
        question: "(William) Hvilken VPN-protokol er kendt for at være den hurtigste og mest moderne med minimal overhead?",
        choices: [
            "OpenVPN",
            "PPTP",
            "WireGuard",
            "L2TP/IPsec"
        ],
        answer: 2
    },
    {
        question: "(William) Hvad betyder \"Double VPN\" i nogle VPN-tjenester?",
        choices: [
            "En VPN-forbindelse med dobbelt kryptering, hvor trafikken sendes gennem to VPN-servere (rigtigt svar)",
            "En VPN, der bruger både IPv4 og IPv6 samtidig",
            "En VPN-forbindelse, der er to gange så hurtig som en almindelig VPN",
            "En VPN, der automatisk skifter mellem to forskellige protokoller afhængigt af netværksforholdene"
        ],
        answer: 0
    },
];
export default quizData;

