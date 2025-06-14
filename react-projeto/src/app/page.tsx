import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/Students";

const Page = () => {
  return (
    <div className="container mx-auto">
      <StudentTable students={students} />
    </div>
  );
};

export default Page;
