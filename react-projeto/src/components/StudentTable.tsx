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
      </tbody>
    </table>
  );
};
