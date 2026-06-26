export default function FoodCard({
  item,
  restaurantId,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-44 object-cover"
        />
<div className="absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-black/20 pointer-events-none">
      <img
        src="/logo.png"
        alt="FlameCraft"
        className="w-24 h-24 object-contain opacity-40"
      />
    </div>
        {item.isTrending && (
          <span className="absolute top-2 left-2 bg-brand text-white text-xs font-bold px-2 py-0.5 rounded-sm">
            Trending
          </span>
        )}

        <span
          className={`absolute top-2 right-2 w-5 h-5 rounded-sm border-2 flex items-center justify-center ${
            item.isVeg
              ? "border-green-500 bg-white"
              : "border-red-500 bg-white"
          }`}
        >
          <span
            className={`w-2.5 h-2.5 rounded-sm ${
              item.isVeg ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white text-sm leading-snug">
            {item.name}
          </h3>

          <div className="flex flex-wrap gap-1 mt-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="font-bold text-gray-800 dark:text-white text-sm">
            ₹{item.price}
          </span>

          {quantity === 0 ? (
            <button
              onClick={() => onAddToCart(item, restaurantId)}
              className="bg-brand hover:bg-brand-dark active:scale-95 text-white text-sm font-semibold px-4 py-1.5 rounded-sm transition-all duration-150"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/30 border border-orange-200 dark:border-orange-700 rounded-sm px-1 py-0.5">
              <button
                onClick={() => onDecrement(item.id)}
                className="w-6 h-6 flex items-center justify-center rounded-sm bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-colors"
              >
                −
              </button>
              <span className="text-sm font-semibold text-brand-dark dark:text-orange-300 min-w-[16px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => onIncrement(item.id)}
                className="w-6 h-6 flex items-center justify-center rounded-sm bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
