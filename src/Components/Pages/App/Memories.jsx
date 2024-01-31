const memoriesArray = [
  {
    location: "Gazipur, Dhaka",
    memoryName: "Going to Barishal",
    visitedDate: "May 26, 2023",
    imageURL:
      "https://i.ibb.co/7VXdCyc/1.jpg",
    hashtags: ["#Travel"],
    description:
      "By by Golden City, Barisal Tour",
  },
  {
    location: "Gazipur, Dhaka",
    memoryName: "21 February",
    visitedDate: "February 21, 2019",
    imageURL:
      "https://i.ibb.co/C7dJTC6/2.jpg",
    hashtags: ["#Memory"],
    description:
      "Konabari Ideal Pre-Cadet School 21 February"
  },
  {
    location: "Lohakoir, Gazipur",
    memoryName: "Food Taste",
    visitedDate: "October 19, 2018",
    imageURL:
      "https://i.ibb.co/BKdz3jV/3.jpg",
    hashtags: ["#Memory"],
    description:
      "Hangout",
  },
  {
    location: "Megher Chaya, Gazipur",
    memoryName: "HMegher Chaya",
    visitedDate: "May 18, 2018",
    imageURL: "https://i.ibb.co/HH1c7Tv/4.jpg",
    hashtags: ["#Megherchaya"],
    description:
      "Megher Chaya Tour.",
  },
  {
    location: "Shonir Akhra, Dhaka",
    memoryName: "Birthday",
    visitedDate: "January 09",
    imageURL: "https://i.ibb.co/B4T6NvQ/5.jpg",
    hashtags: ["#Birthday"],
    description:
      "Birthay Boy.",
  },
  {
    location: "Konabari, Gazipur",
    memoryName: "Dipamoni Studio",
    visitedDate: "March 1, 2019",
    imageURL: "https://i.ibb.co/BBSzgW9/6.jpg",
    hashtags: ["#Friends"],
    description:
      "Friends Adda",
  },
  {
    location: "Konabari, Gazipur",
    memoryName: "Friday",
    visitedDate: "March 29, 2019",
    imageURL: "https://i.ibb.co/KNbmbqT/7.jpg",
    hashtags: ["#Jummah"],
    description:
      "Jummah Mubarak",
  },
  {
    location: "Konabari Gazipur",
    memoryName: "Selim Rahaman",
    visitedDate: "December 28, 2023",
    imageURL: "https://i.ibb.co/nD8MSpS/8.jpg",
    hashtags: ["#Councilor", ],
    description:
      "জননন্দিত সবার প্রিয় ৮ নং ওয়ার্ডের অভিভাবক Selim Rahaman Councilor ভাইয়ের সাথে।",
  },
];

const Memories = () => {
  return (
    <div>
      <h2 className="text-2xl my-5 font-teko font-300">Memories</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {memoriesArray.map((dt, index) => {
          return (
            <div key={index} className="relative group">
              <div className="col-span-1 relative h-[200px] overflow-hidden group">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={dt.imageURL}
                    alt=""
                    className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity opacity-0 group-hover:opacity-0"></div>
                <div className="absolute top-5 left-5 transform text-white text-center transition-opacity opacity-100 group-hover:opacity-0">
                  <p className="text-lg font-bold">{dt.memoryName}</p>
                  <p className="text-sm">{dt.visitedDate}</p>
                </div>
              </div>
              <div className="col-span-3 p-4 bg-white bg-opacity-30 h-[200px] overflow-hidden">
                <div className="flex flex-wrap">
                  {dt?.hashtags?.map((hs, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 whitespace-nowrap text-xs bg-gray-300 rounded-md p-[2px] overflow-hidden overflow-ellipsis"
                    >
                      {hs}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{dt.location}</h3>
                <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis">{dt.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memories;

