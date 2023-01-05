import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
WEB_LINK="https://weeklysoccer.onrender.com/match"
LOCAL_LINK= "http://localhost:3000/match"
class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.maximize_window()
        time.sleep(2)
    
        driver.get(WEB_LINK)
        time.sleep(5)

        element=driver.find_elements(By.NAME, "match-box-container")
        time.sleep(2)

        self.assertEqual(9, len(element))
        time.sleep(4)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()