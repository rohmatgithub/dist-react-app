export default function ProductCategory() {
  return (
    <div id="body-content">
      <div className="border bg-white flex max-w-[285px] mt-10 items-stretch justify-between gap-4 px-5 py-2 rounded border-solid border-black border-opacity-20 max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11409849ac006ed6f9e5b1c2f8f7e4774aac40768f61b429a0785a7d42b8aa70?apiKey=57feb64800df4e20be2c6f74ae60e771&"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-stone-400 text-base self-center grow whitespace-nowrap my-auto">
          Search
        </div>
      </div>
      <div className="justify-between flex gap-5 mt-4 pt-1.5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="flex basis-[0%] flex-col">
          <div className="text-black text-base">Division</div>
          <div className="text-neutral-900 text-opacity-60 text-base font-light whitespace-nowrap border bg-white justify-center mt-3 pl-6 pr-16 py-2 rounded border-solid border-neutral-900 border-opacity-30 items-start max-md:px-5">
            division
          </div>
        </div>
        {/* <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-black text-base">Customer</div>
                <div className="text-neutral-900 text-opacity-60 text-base font-light whitespace-nowrap border bg-white justify-center mt-3 pl-6 pr-16 py-2 rounded border-solid border-neutral-900 border-opacity-30 items-start max-md:px-5">
                  Division
                </div>
              </div>
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-black text-base">Invoice ID</div>
                <div className="text-neutral-900 text-opacity-60 text-base font-light whitespace-nowrap border bg-white justify-center mt-3 pl-6 pr-16 py-2 rounded border-solid border-neutral-900 border-opacity-30 items-start max-md:px-5">
                  Enter Invoice ID
                </div>
              </div>
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-black text-base">Start Date</div>
                <div className="text-neutral-900 text-opacity-60 text-base font-light whitespace-nowrap border bg-white justify-center mt-3 pl-6 pr-16 py-2 rounded border-solid border-neutral-900 border-opacity-30 items-start max-md:px-5">
                  Start Date
                </div>
              </div>
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-black text-base">End Date</div>
                <div className="text-neutral-900 text-opacity-60 text-base font-light whitespace-nowrap border bg-white justify-center mt-3 pl-6 pr-16 py-2 rounded border-solid border-neutral-900 border-opacity-30 items-start max-md:px-5">
                  End Date
                </div>
              </div> */}
      </div>
      <div className="bg-white flex flex-col items-stretch mt-10 py-6 rounded max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1019px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-base font-semibold self-center my-auto">
            Code
          </div>
          <div className="text-black text-base font-semibold self-center my-auto">
            Name
          </div>
          <div className="text-black text-base font-semibold self-center my-auto">
            Created Date
          </div>
          <div className="text-black text-base font-semibold self-center my-auto">
            Updated Date
          </div>
        </div>
        <div className="border-t-2 border-[#E5E5E5] mt-3"></div>
        <div className="self-center flex w-full max-w-[1019px] items-stretch justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-base">PC001</div>
          <div className="text-black text-base">Product Category Name</div>
          <div className="text-black text-base">2023-12-25 09:12:10</div>
          <div className="text-black text-base">2023-12-25 09:12:10</div>
        </div>
        <div className="border-t-2 border-[#E5E5E5] mt-3"></div>
        <div className="self-center flex w-full max-w-[1019px] items-stretch justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-base">PC001</div>
          <div className="text-black text-base">Product Category Name</div>
          <div className="text-black text-base">2023-12-25 09:12:10</div>
          <div className="text-black text-base">2023-12-25 09:12:10</div>
        </div>
        <div className="border-t-2 border-[#E5E5E5] mt-3"></div>
        <div className="self-center flex w-full max-w-[1019px] items-stretch justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-base">PC001</div>
          <div className="text-black text-base">Product Category Name</div>
          <div className="text-black text-base">2023-12-25 09:12:10</div>
          <div className="text-black text-base">2023-12-25 09:12:10</div>
        </div>
        <div className="border-t-2 border-[#E5E5E5] mt-3"></div>
        <div className="self-center flex w-full max-w-[1019px] items-stretch justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-base">PC001</div>
          <div className="text-black text-base">Product Category Name</div>
          <div className="text-black text-base">2023-12-25 09:12:10</div>
          <div className="text-black text-base">2023-12-25 09:12:10</div>
        </div>
      </div>
    </div>
  );
}
