# QA_Automation_test_task
Use "npx cypress run" for run test
1. Write an automation script using a Javascript testing framework which will open:
    https://www.pecodesoftware.com/qa-portal/greet.php page
    SHA commit: aedf67e889c0
2. Create an environment file and pick up all the credentials values from there. 
3. Fill in the “Username” and “Password” input fields and click the “LogIn” button.
    SHA commit: ab71a42adbab
4. Use an assertion library and verify that all the elements are present on the page.
    SHA commit: c94c3864c722d
5. Verify that all the error messages appear.
    SHA commit: 533a426ec4a
6. Create a test-case that will fail because of unsuccessful login.
    SHA commit: 868bbe436644
7. Use a page-object pattern or app actions.
    SHA commit: 917ad9e0d85
8. The result of execution should generate:
    ● A mochawesome report file.
    ● Screenshots for failing the test.
    ● Video recording for all the tests.
    SHA commit: 03ab243c49
9. Optional - wrap the tests into a docker container.
