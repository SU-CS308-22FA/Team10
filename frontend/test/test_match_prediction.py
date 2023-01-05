import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
class PythonOrgSearch(unittest.TestCase):

    def setUp(self):

        self.driver = webdriver.Chrome("/chromedriver")

    def test_search_in_python_org(self):
        driver = self.driver
        time.sleep(2)
        
        driver.get("https://weeklysoccer.onrender.com/login")
        driver.maximize_window()
        time.sleep(2)
        
        elem = driver.find_element(By.ID, "user-email")
        elem.send_keys("gizem@hotmail.com")
        elem = driver.find_element(By.ID, "user-password")
        elem.send_keys("Test1234*")
        elem = driver.find_element(By.CLASS_NAME, "styles_green_btn__UA-1O")
        elem.click()
        time.sleep(4)
        element = driver.find_element('xpath','//*[@id="root"]/div/header/div/div/div/div/a[1]')
        #//header/div[1]/div[1]/div[1]/div[1]/a[2]
        
        href = element.get_attribute('href')
        driver.get(href)

        
        time.sleep(7)
        elem = driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/div[1]/div/div[2]/a[2]/button[0]')

        driver.execute_script("arguments[0].click();", elem)
        time.sleep(4)
        driver.save_screenshot("./screen.png")
        actualUrl ="https://weeklysoccer.onrender.com/match/"
 
        expectedUrl = driver.current_url
        self.assertTrue(expectedUrl.startswith(actualUrl))
    
    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()

