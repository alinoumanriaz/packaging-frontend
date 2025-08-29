import React from 'react'
import Header from './Header'

interface MenuData {
  getAllIndustry: Array<{ imageUrl: string; name: string; slug: string }>;
  getAllMaterial: Array<{ imageUrl: string; name: string; slug: string }>;
  getAllStyle: Array<{ imageUrl: string; name: string; slug: string }>;
}

// Preload function using link preload (most efficient)
const preloadImages = (urls: string[]) => {
  if (typeof window === 'undefined') return; // Only run on client
  
  urls.forEach(url => {
    if (url) {
      // Method 1: Link preload (most efficient)
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
      
      // Method 2: Image preloading (fallback)
      new Image().src = url;
    }
  });
};

async function getMenuData(): Promise<MenuData> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL not defined");

  const res = await fetch(`${apiUrl}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          getAllIndustry { imageUrl name slug }
          getAllMaterial { imageUrl name slug }
          getAllStyle { imageUrl name slug }
        }
      `,
    }),
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch menu data: ${res.status}`);
  }

  const { data } = await res.json();
  return data;
}

const MainHeader = async () => {
  let menuData: MenuData = {
    getAllIndustry: [],
    getAllMaterial: [],
    getAllStyle: []
  };

  try {
    menuData = await getMenuData();
  } catch (error) {
    console.error("Failed to fetch menu data:", error);
  }

  // Preload images on client side
  if (typeof window !== 'undefined') {
    const allImageUrls = [
      ...menuData.getAllIndustry.map(item => item.imageUrl),
      ...menuData.getAllMaterial.map(item => item.imageUrl),
      ...menuData.getAllStyle.map(item => item.imageUrl)
    ].filter(url => url);
    
    preloadImages(allImageUrls);
  }

  return (
    <Header menuData={menuData} />
  )
}

export default MainHeader