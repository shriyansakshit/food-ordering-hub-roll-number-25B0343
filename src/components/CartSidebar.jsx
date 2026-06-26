export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onIncrement,
  onDecrement,
  onRemove,
  subtotal,
  discountAmount,
  finalTotal,
  promoCode,
  setPromoCode,
  promoApplied,
  promoError,
  onApplyPromo,
  onRemovePromo,
  onCheckout,
  recommendations,
  onAddRecommendation,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛒</span>
            <h2 className="font-bold text-lg dark:text-white">Your Cart</h2>
            {cartItems.length > 0 && (
              <span className="bg-brand text-white text-xs font-bold px-2 py-0.5 rounded-sm">
                {cartItems.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400 text-lg"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6 py-20">
              <span className="text-6xl mb-4">🍽️</span>
              <p className="text-lg font-semibold dark:text-white mb-1">Your cart is empty</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Add items from a restaurant to get started
              </p>
            </div>
          ) : (
            <div className="px-5 py-4 space-y-6">

              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold dark:text-white truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        ₹{item.price} × {item.quantity} ={" "}
                        <span className="font-semibold text-brand">
                          ₹{item.price * item.quantity}
                        </span>
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1.5 bg-white dark:bg-gray-700 border border-orange-200 dark:border-orange-700 rounded-sm px-1 py-0.5">
                          <button
                            onClick={() => onDecrement(item.id)}
                            className="w-5 h-5 flex items-center justify-center rounded-sm bg-brand hover:bg-brand-dark text-white text-xs font-bold transition-colors"
                          >
                            −
                          </button>
                          <span className="text-xs font-bold text-brand-dark dark:text-orange-300 min-w-[16px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onIncrement(item.id)}
                            className="w-5 h-5 flex items-center justify-center rounded-sm bg-brand hover:bg-brand-dark text-white text-xs font-bold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-gray-300 dark:text-gray-600 hover:text-red-400 transition-colors text-lg shrink-0"
                      aria-label="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              {recommendations.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    💡 You might also like from {recommendations[0].restaurantName}
                  </p>
                  <div className="space-y-2">
                    {recommendations.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-orange-800 rounded-xl p-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold dark:text-white truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-brand font-medium">
                            ₹{item.price}
                          </p>
                        </div>
                        <button
                          onClick={() => onAddRecommendation(item)}
                          className="text-xs bg-brand hover:bg-brand-dark text-white px-3 py-1.5 rounded-sm font-semibold transition-colors shrink-0"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  🏷️ Promo Code
                </p>
                {promoApplied ? (
                  <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl px-4 py-3">
                    <div>
                      <p className="text-sm font-bold text-green-600 dark:text-green-400">
                        ✅ {promoApplied.code} applied!
                      </p>
                      <p className="text-xs text-green-500">
                        You saved ₹{discountAmount.toFixed(0)}
                      </p>
                    </div>
                    <button
                      onClick={onRemovePromo}
                      className="text-xs text-red-400 hover:text-red-500 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code (e.g. SAVE20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && onApplyPromo()}
                      className="flex-1 text-sm px-4 py-2 rounded-sm border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                    <button
                      onClick={onApplyPromo}
                      className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
                {promoError && (
                  <p className="text-xs text-red-400 mt-1.5 pl-1">{promoError}</p>
                )}
                {!promoApplied && !promoError && (
                  <p className="text-xs text-gray-400 mt-1.5 pl-1">
                    Try: SAVE20 · FLAT50 · HUNGRY10
                  </p>
                )}
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Delivery Fee</span>
                  <span className="text-green-500 font-medium">FREE</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm text-green-500">
                    <span>Discount ({promoApplied.code})</span>
                    <span>−₹{discountAmount.toFixed(0)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 dark:border-gray-600 pt-2 flex justify-between font-bold text-base dark:text-white">
                  <span>Total</span>
                  <span className="text-brand">₹{finalTotal.toFixed(0)}</span>
                </div>
              </div>

            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={onCheckout}
              className="w-full bg-brand hover:bg-brand-dark active:scale-95 text-white font-bold py-3.5 rounded-sm transition-all duration-150 text-base"
            >
              Proceed to Checkout · ₹{finalTotal.toFixed(0)}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
