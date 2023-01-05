import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
WEB_LINK="https://weeklysoccer.onrender.com/referee"
LOCAL_LINK= "http://localhost:3000/referee"
class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.maximize_window()

        time.sleep(2)
        
        driver.get(WEB_LINK)
        time.sleep(2)

       
        elem = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[2]/a[2]/button')
        driver.execute_script("arguments[0].click();", elem)
        time.sleep(2)

        
        element=driver.find_element(By.NAME, "login-error-message")
        element.click()
        time.sleep(2)

        self.assertTrue(element.is_displayed())
        time.sleep(4)
    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
