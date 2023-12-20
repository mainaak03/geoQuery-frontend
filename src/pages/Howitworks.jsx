import Navbar from "../components/Navbar";
import Timeline from "./Timeline";

const How = () => {
  const details = [
    {
      tab: "Step 1",
      content: `Query Processing with RoBERTa(Robustly Optimized BERT): The user provides a query, whose 
      words that might refer to locations are extracted by the RoBERTa model which is a variant of 
      BERT(Bidirectional Encoder Representations from Transformers). It reads the entire sequence of words 
      simultaneously to understand the context of each word based on its surroundings.
   `,
    },
    {
      tab: "Step 2",
      content: `Dataset Creation and Model Fine-tuning: A dataset is generated for the purpose of 
      fine-tuning the RoBERTa model which includes examples of queries and their corresponding location 
      information. The pre-trained RoBERTa model is fine-tuned on this dataset, making it more specific 
      and adapted to the task of extracting location-related information.`,
    },
    {
      tab: "Step 3",
      content: `Location Extraction and Trigram Generation: The fine-tuned RoBERTa model is then used to extract words from the 
      user's query that imply locations. Then trigrams (sequences of three adjacent words) are created 
      from the extracted words. This technique captures the local context and relationships between words`,
    },
    {
      tab: "Step 4",
      content: `Fuzzy Search and Phonetic Search: A fuzzy search is performed on a dataset to find the top 
      matches for the trigrams generated from the user's query. Fuzzy search allows for approximate string 
      matching, considering variations and similarities in the text. Phonetic Search, which considers the 
      pronunciation of words rather than their exact spelling is employed to refine the ranking of location 
      names, thus enhancing the accuracy of matching location names, ranking them from the most 
      appropriate to the least based on phonetic similarity`,
    },
  ];

  return (
    <>
      <div className="flex flex-grow bg-Background min-h-screen relative overflow-hidden">
        <Navbar />
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
        ></div>
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute bottom-0 right-0 z-0"
        ></div>
        <div className="w-screen h-screen relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <div className="text-white text-4xl font-bold justify-center hidden sm:flex">
              How Does It Work?
            </div>
            <div className="text-white mx-auto w-1/2 text-2xl mt-5 font-light justify-center hidden sm:flex border border-solid border-onPrimary border-opacity-50 rounded-lg p-4 z-50">
            Our website GeoQuery is a web application capable of accurate and efficient location extraction 
            from entered natural language sentences. It works as follows:
            </div>
            <hr className="mt-8 h-3 w-2/3 mx-auto opacity-20"></hr>
            <div className="text-white text-2xl font-bold justify-center hidden sm:flex p-3 ">
              The Internal Working
            </div>
            <hr className="w-1/4 mx-auto opacity-10"></hr>
            <div className="text-white text-2xl font-bold mt-5 justify-center hidden sm:flex">
              <Timeline details={details} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
