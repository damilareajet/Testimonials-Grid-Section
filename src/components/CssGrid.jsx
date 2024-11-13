    import { data } from '../data';

    const CssGrid = () => {
    const cardStyle =
        'border border-gray-300 rounded-xl p-4 sm:p-6 flex flex-col items-start justify-start shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105';

    const colors = [
        'bg-[#6a4c9c]', // Moderate violet
        'bg-[#404d66]', // Very dark grayish blue
        'bg-white', // White
        'bg-white', // White 
        'bg-[#1c2331]', // Very dark blackish blue
    ];

    return (
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[450px] lg:auto-rows-[350px] gap-4 sm:gap-6 my-6 sm:my-14  mx-4 md:mx-20  p-4 sm:p-6">
            {data.map((item, i) => (
            <div
                key={i}
                className={`${cardStyle} ${colors[i % colors.length]} ${
                i === 0 || i === 4 || i === 5 || i === 6 ? 'lg:col-span-2' : ''
                } ${i === 2 ? 'lg:row-span-2' : ''}`}
            >
                <div className=' flex justify-between '>
                <div className="flex gap-3 items-center mb-3 sm:mb-4">
                {item.image && (
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                    />
                )}
                <div>
                    <h2 className={`text-[13px] font-semibold mb-1 ${item.textColor.title}`}>
                    {item.title}
                    </h2>
                    <p className={`text-xs opacity-50 ${item.textColor.value}`}>
                    {item.value}
                    </p>
                </div>
                </div>
                {item.svg && (
                    <div className="flex justify-end pl-28 top-0 lg:pr-0  pr-14 relative ">
                    <p
                        className={`text-xs opacity-50 ${item.textColor.value} `}
                        aria-label="Icon"
                    >
                        {item.svg}
                    </p>
                    </div>
                )}
                </div>
                <div className="flex items-center justify-end w-full mb-2 sm:mb-3">
                <h3 className={`text-base sm:text-lg font-bold  ${item.textColor.header}`}>
                    {item.header}
                </h3>
                
                </div>

                <p className={`opacity-70 text-[13px] ${item.textColor.testimonial}`}>
                {item.testimonial}
                </p>
            </div>
            ))}
        </div>

        <div className="attribution text-center text-sm mt-6 p-5">
            Challenge by{' '}
            <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-blue-500"
            >
            Frontend Mentor
            </a>. Coded by{' '}
            <a href="#" className="text-blue-500 gap-2">
            Damilare Ajetunmobi
            </a>.
        </div>
        </div>
    );
    };
    
    export default CssGrid;
