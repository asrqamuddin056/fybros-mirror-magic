export const TrendingSection = () => {
  const trendingItems = [
    {
      id: 1,
      title: "Shruti Haasan | Fybros",
      image: "/api/placeholder/300/200",
      link: "#"
    },
    {
      id: 2,
      title: "Shruti Haasan | Fybros",
      image: "/api/placeholder/300/200",
      link: "#"
    },
    {
      id: 3,
      title: "Trend",
      image: "/api/placeholder/300/200",
      link: "#"
    },
    {
      id: 4,
      title: "Fybros Brand Ambassador | Shruti Haasan",
      image: "/api/placeholder/300/200",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-wide">
          WHAT'S TRENDING
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-muted rounded-lg overflow-hidden h-48 mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional trending items in a scrolling row */}
        <div className="mt-12 overflow-x-auto">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {trendingItems.map((item, index) => (
              <div key={`scroll-${index}`} className="flex-shrink-0 w-64 group cursor-pointer">
                <div className="bg-muted rounded-lg overflow-hidden h-40 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};