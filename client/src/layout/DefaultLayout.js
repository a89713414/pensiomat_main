import React from 'react'
import { AppSidebar, AppFooter, AppHeader } from '../components/index'
import useDataFetching from '../hooks/useDataFetching'
import { Loading } from '../components/loading/Loading'
import { convertAndUpdateNavItems } from '../utils/convertAndUpdateNavItems'
import { useSelector } from 'react-redux'
import { Error } from '../components/index'
import { isMobile } from 'react-device-detect';
import AppContent from '../components/content/AppContent'

const DefaultLayout = () => {
  const { isError, errorMessage, isLoading, routesData, navsData, textsData } = useDataFetching()
  const language = useSelector((state) => state.app.language)

  if (isLoading) return <Loading />

  if (isError) return <Error errorMessage={errorMessage} />

  const formattedNavs = convertAndUpdateNavItems(navsData.navs)
  const selectedLanguageTexts = textsData.texts[language]
  const { routes } = routesData

  return (
    <div>
      {isMobile &&
        (

          <AppSidebar navigation={formattedNavs} language={language} />
        )}
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader routes={routes} texts={selectedLanguageTexts} language={language} />
        <div className="body flex-grow-1">
          <AppContent routes={routes} texts={selectedLanguageTexts} language={language} />
        </div>
        <AppFooter texts={selectedLanguageTexts} />
      </div>
    </div>
  )
}

export default DefaultLayout
