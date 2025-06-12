# Recipe Finder 🍳

A Next.js web application for discovering cooking recipes using the Spoonacular API.

## ✨ Features

- **Ingredient-based recipe search**
- **Detailed recipe viewing**
- **Favorite recipes storage** (localStorage)
- **Responsive design** for all devices
- **Advanced filtering** by diet, sort, food type, etc.

## 🛠 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Spoonacular API** (recipe data)

## 🚀 Getting Started

1. Clone the repository:

   git clone https://github.com/farnoosh-krm/HW-L05-02-NextJs-Project-recipeFinder-farnoosh-karimi.git

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   env
   NEXT_PUBLIC_API_KEY=your_api_key_here

4. Run development server:

   npm run dev

🔍 API Usage

Example search endpoint:

const response = await fetch(
`https://api.spoonacular.com/recipes/complexSearch?query=pasta&includeIngredients=tomato,cheese&diet=vegetarian&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
);

🎨 Design Elements

Color Scheme: Warm food-inspired palette (oranges, greens)

Typography: Google Fonts (Poppins)

UI Components: Recipe cards, interactive search, animated transitions

📱 Responsive Layout

Mobile-first approach

Adaptive grid for recipe cards

Collapsible filters for smaller screens

📜 License
MIT © Farnoosh Karimi
