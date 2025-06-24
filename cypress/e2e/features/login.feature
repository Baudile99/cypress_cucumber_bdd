Feature: User login

    Background:
        Given I am login page

    
    Scenario: Successful login with valid credentials

        When  I enter an email "honore871@gmail.com" and password "123456"
        And I click on the login button
        Then I should see MyNotes

   
    Scenario Outline: Usnsuccessful login with invalid credentials

        When  I enter an email "<email>" and password "<password>"
        And I click on the login button
        Then I should see the error message "<errorMessages>"


        Examples:
            | email               | password  | errorMessages                                  |
            | honore871@gmail.com | 123456789 | Incorrect email address or password            |
            | honore871@gmail.com |           | Password is required                           |
            |                     | 123456789 | Email address is required                      |
            |                     |           | Email address is required/Password is required |