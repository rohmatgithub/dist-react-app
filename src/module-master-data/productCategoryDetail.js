import { styleInput, styleLable } from "../constanta/constanta";

export default function ProductCategoryDetail() {
  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="text-black text-4xl leading-6 mr-4 mb-10 max-md:max-w-full max-md:mr-2.5">
        Components
      </div>

      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <label htmlFor="code" className={styleLable}>
              Code
            </label>
            <input type="text" name="code" id="code" className={styleInput} />
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              Name
            </label>
            <input type="text" name="name" id="name" className={styleInput} />
          </div>
        </div>
        <div>
          <button className="bg-blue-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
