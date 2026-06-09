
import Button from "../../components/ui/Button.tsx";
import { useState} from "react";
import CreatePost from "../CreatePost.tsx";

function Content() {
  const [isCreate, setIsCreate] = useState<boolean>(false);

  const handleCreate = () => {
    setIsCreate((prev) => !prev);
  };

  return (
    <div className=" w-full">
      <div className="flex justify-end mb-2">
        <Button
          onClick={handleCreate}
          className={`flex items-center gap-2 justify-center cursor-pointer rounded-full px-6 py-1 md:py-1 md:px-6 hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-100 text-xs ${isCreate ? "bg-red-500 text-white" : " bg-violet-800 hover:bg-violet-500 text-zinc-50"}`}
        >
          {isCreate ? (
            <>
              <span className="text-xl">x</span>
              Cancel
            </>
          ) : (
            <>
              <span className="text-xl">+</span>
              Create
            </>
          )}
        </Button>
      </div>
      <div>{isCreate ? <CreatePost /> : null}</div>

      <table className=" w-full mt-4">
        <thead>
          <tr>
            <th className="p-2 bg-orange-100 border border-orange-200 text-zinc-600 text-sm capitalize ">title</th>
            <th className="p-2 bg-orange-100 border border-orange-200 text-zinc-600 text-sm capitalize ">author</th>
            <th className="p-2 bg-orange-100 border border-orange-200 text-zinc-600 text-sm capitalize ">status</th>
            <th className="p-2 bg-orange-100 border border-orange-200 text-zinc-600 text-sm capitalize ">modified</th>
            <th className="p-2 bg-orange-100 border border-orange-200 text-zinc-600 text-sm capitalize ">actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
          <tr>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
            <td className=" p-2 border border-zinc-200">
              <span className="block bg-zinc-500 w-full h-3 rounded-lg animate-pulse"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Content;
