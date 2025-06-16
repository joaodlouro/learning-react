import { Students } from "@/types/Student";

type Props = {
  students: Students[];
};

export const StudentTable = ({ students }: Props) => {
  return (
    <table className="w-full border border-gray-300 rounded-md overflow-hidden">
      <thead>
        <tr className="text-left border border-gray-300 bg-gray-800">
          <th className="p-3"> Name</th>
          <th className="p-3">Status</th>
          <th className="p-3">Grade 1</th>
          <th className="p-3">Grade 2</th>
          <th className="p-3">Final Grade</th>
        </tr>
      </thead>

      <tbody>
        {students.map(item => (
          <tr key={item.id} className="text-gray-800 bg-gray-400 border-b border-gray-600">
            <td className="p-3 flex items-center">
              <img src={item.avatar} alt={item.name} className="w-30 h-30 rounded-full mr-5"/>
              <div>
                <div className="font-bold">{item.name}</div>
                <div>{item.email}</div>
              </div>
            </td>
            <td>
              {item.active && <div>Active</div>}
              {!item.active && <div>Inactive</div>}
            </td>
            <td>{item.grade1}</td>
            <td>{item.grade2}</td>
        <td>{item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : '--'}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  );
};
