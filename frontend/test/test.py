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
        time.sleep(3)
        
        driver.get("http://localhost:3000/login")
        time.sleep(3)
        
        elem = driver.find_element(By.ID, "user-email")
        elem.send_keys("gizem@hotmail.com")
        elem = driver.find_element(By.ID, "user-password")
        elem.send_keys("Test1234*")
        elem = driver.find_element(By.CLASS_NAME, "styles_green_btn__UA-1O")
        elem.click()
        time.sleep(4)
        elem = driver.find_element(By.XPATH, "//button[contains(text(),'Players')]")
        
        time.sleep(5)
        elem = driver.find_element(By.XPATH, "//body/div[@id='root']/div[1]/div[2]/div[2]/div[1]/div[2]/a[2]/button[1]")
        time.sleep(4)
        elem.click()
        time.sleep(4)
        
       
        
    
        
        


    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
