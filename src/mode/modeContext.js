import React from "react"

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("current-theme")
    if (typeof storedPrefs === "string") {
      return storedPrefs
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
  }
  return "light"
}

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme)
  
  if(window !== "undefined"){
   // your document or window manipulation
 }

  const checkTheme = existing => {
	  if(window !== "undefined"){
   // your document or window manipulation
   const root = window.document.documentElement
    const isDark = existing === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(existing)

    localStorage.setItem("current-theme", existing)
	}
    
  }

  if (initialTheme) {
    checkTheme(initialTheme)
  }

  React.useEffect(() => {
    checkTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
