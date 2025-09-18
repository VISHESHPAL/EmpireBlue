import team1 from "../assets/team1.jpeg"; // Replace with actual paths
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";

const leadershipTeam = [
  {
    id: 1,
    name: "Sandhya Mahalwanshi",
    role: "Managing Director",
    image: team1,
  },
  {
    id: 2,
    name: "U. S. Khobariya",
    role: "Sub-Director",
    image: team2,
  },
  {
    id: 3,
    name: "Mukesh Dixit",
    role: "CFO",
    image: team3,
  },
];

const LeadershipTeam = () => {
  return (
    <section className="w-full px-6 py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Leadership Team
        </h2>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {leadershipTeam.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center text-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg w-64 sm:w-68">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto object-cover border-white border-8 rounded-3xl "
              />
            </div>
            <div className="bg-white shadow-md rounded-xl -mt-6 px-6 py-3 w-64 sm:w-64">
              <h3 className="text-base md:text-lg font-bold text-blue-900">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
