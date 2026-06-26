import FoodCard from "./FoodCard";

export default function MenuGrid({
  restaurants,
  cartItems,
  onAddToCart,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="space-y-12">
      {restaurants.map((restaurant) => (
        <section key={restaurant.id}>

          {/* ── Restaurant Header ── */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-16 h-16 rounded-2xl object-cover shadow-md"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-bold dark:text-white">
                  {restaurant.name}
                </h2>
                <span className="text-xs bg-red-100 dark:bg-red-900 text-brand-dark dark:text-orange-300 px-2 py-0.5 rounded-sm font-medium">
                  {restaurant.cuisine}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                <span>⭐ {restaurant.rating}</span>
                <span>🕐 {restaurant.deliveryTime}</span>
              </div>
            </div>
          </div>

          {/* ── Food Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {restaurant.menu.map((item) => {
              const cartItem = cartItems.find((c) => c.id === item.id);
              return (
                <FoodCard
                  key={item.id}
                  item={item}
                  restaurantId={restaurant.id}
                  quantity={cartItem ? cartItem.quantity : 0}
                  onAddToCart={onAddToCart}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              );
            })}
          </div>

          {/* ── Divider ── */}
          <div className="mt-10 border-b border-gray-200 dark:border-gray-700" />
        </section>
      ))}
    </div>
  );
}
