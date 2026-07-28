const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock Data
const dataStore = {
  salesOverTime: [
    { name: 'Mon', sales: 4000, impressions: 2400 },
    { name: 'Tue', sales: 3000, impressions: 1398 },
    { name: 'Wed', sales: 2000, impressions: 9800 },
    { name: 'Thu', sales: 2780, impressions: 3908 },
    { name: 'Fri', sales: 1890, impressions: 4800 },
    { name: 'Sat', sales: 2390, impressions: 3800 },
    { name: 'Sun', sales: 3490, impressions: 4300 },
  ],
  clicksByCategory: [
    { name: 'Electronics', clicks: 400 },
    { name: 'Clothing', clicks: 300 },
    { name: 'Home', clicks: 300 },
    { name: 'Sports', clicks: 200 },
  ],
  reviews: [
    { name: '5 Stars', value: 400 },
    { name: '4 Stars', value: 300 },
    { name: '3 Stars', value: 100 },
    { name: '2 Stars', value: 50 },
    { name: '1 Star', value: 20 },
  ],
  totals: {
    sales: 19550,
    impressions: 31306,
    clicks: 1200,
    reviews: 870
  }
};

const filterData = (range) => {
  if (range === 'last7days') {
    return dataStore; // Default mock data is for 7 days
  }
  
  if (range === 'today') {
    return {
      salesOverTime: [{ name: 'Today', sales: 3490, impressions: 4300 }],
      clicksByCategory: dataStore.clicksByCategory.map(c => ({...c, clicks: Math.floor(c.clicks / 7)})),
      reviews: dataStore.reviews,
      totals: {
        sales: 3490,
        impressions: 4300,
        clicks: Math.floor(1200 / 7),
        reviews: 120
      }
    };
  }
  
  if (range === 'last30days') {
    return {
      salesOverTime: [...dataStore.salesOverTime, ...dataStore.salesOverTime, ...dataStore.salesOverTime, ...dataStore.salesOverTime],
      clicksByCategory: dataStore.clicksByCategory.map(c => ({...c, clicks: c.clicks * 4})),
      reviews: dataStore.reviews.map(r => ({...r, value: r.value * 4})),
      totals: {
        sales: 19550 * 4,
        impressions: 31306 * 4,
        clicks: 1200 * 4,
        reviews: 870 * 4
      }
    };
  }

  return dataStore;
};

app.get('/api/seller/stats', (req, res) => {
  const { range } = req.query; // 'today', 'last7days', 'last30days'
  const stats = filterData(range || 'last7days');
  
  setTimeout(() => {
    res.json(stats);
  }, 500); // Simulate network delay
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
