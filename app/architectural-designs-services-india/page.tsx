'use client'
// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'

import ProgressBar from '../../components/Progressbar'
// import Card from './Card'
import MyForm from '../../components/MyForm'
import Omsairam from '../../components/Navbar/Omsairam'
import Image from 'next/image'
const Page = ({}) => {
  const [categoryDataArray, setCategoryDataArray] = useState<any[]>([])
  const categoryFolderMapping: Record<number, string> = {
    41: 'architectural-consultancy',
    42: 'end-to-end-architectural-services',
    43: 'architectural-designing-and-planning',
    44: 'commercial-architectural-services',

    // Add more mappings as needed
  }
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [41, 42, 43, 44] // Add the category IDs you want to fetch

        // Fetch category data
        const categoryPromises = categoryIds.map(async (categoryId) => {
          const response = await fetch(
            `https://api.designindianwardrobe.com/api/categories/${categoryId}?timestamp=${timestamp}`
          )
          if (response.ok) {
            const data = await response.json()
            return data
          } else {
            console.error(
              `Error fetching data for category ${categoryId}:`,
              response.statusText
            )
            return {}
          }
        })

        const categoryDataArray = await Promise.all(categoryPromises)

        // Fetch image data for each category
        const imageDataPromises = categoryDataArray.map(
          async (categoryData) => {
            const imageResponse = await fetch(
              `https://api.designindianwardrobe.com/api/images/${categoryData.id}?timestamp=${timestamp}`
            )
            if (imageResponse.ok) {
              const imageData = await imageResponse.json()
              // Assuming you want only one image per category
              const selectedImage = imageData[0]
              return selectedImage
            } else {
              console.error(
                `Error fetching image for category ${categoryData.id}:`,
                imageResponse.statusText
              )
              return {}
            }
          }
        )

        const imageDataArray = await Promise.all(imageDataPromises)

        // Combine category data with corresponding image data
        const mergedDataArray = categoryDataArray.map(
          (categoryData, index) => ({
            ...categoryData,
            image: imageDataArray[index],
          })
        )

        setCategoryDataArray(mergedDataArray)
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchCategoryData()
  }, [])

  const handleImageLoad = () => {
    // After the image is loaded, scroll back to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <>
      <ProgressBar />
      <Header />
      <Omsairam />
      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Architectural Designs</span>
        </div>

        <div className="flex items-center p-4">
          <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
          <h1 className="text-3xl font-bold">Architectural Designs</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
        At the Design Indian Homes, we provide you dedicated Certified Architects working on all your projects. Whether it is just design and planning, or planning your MEP, or designing an elevation or any commercial designing services, Our Team is there to provide you thorough support on any type of architectural service. We provide mostly all types of Architectural Services, some of our exclusive architectural services include Civil Estimation, Design and Planning, Surveying, Estimating Services, Civil Structural Consultancy and Changes in Existing Structures. Connect with the Top Architectural Brand, serving across New Delhi - NCR Today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {categoryDataArray.map((categoryData) => (
            <Link
              key={categoryData.id}
              href={`/architectural-designs-services-india/${
                categoryFolderMapping[categoryData.id]
              }`}
            >
              <div className="bg-white rounded-md shadow-md p-6">
                {categoryData.image && (
                  <Image
                    width={450}
                    height={200}
                    onLoad={handleImageLoad}
                    src={`https://api.designindianwardrobe.com/uploads/${categoryData.image.filename}`}
                    alt={categoryData.image.filename}
                    style={{
                      width: '450px',
                      height: '200px',
                      borderRadius: '10px',
                    }}
                  />
                )}
                <h2 className="text-base font-semibold mt-4">
                  {categoryData.name}
                </h2>
                <p className="text-gray-700 mb-4">{categoryData.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-red-500 p-16 mb-16">
        <MyForm />
      </div>

      <Footer />
    </>
  )
}
export default Page
