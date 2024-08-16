STEPS TO RUN THE APPLICATION

- Clone the github repository
- In the terminal (make sure you are in the directory of the application) run 'npm run install'
- Copy and replace the firebase config in the firebase.js file with the one sent through email and save the file
- Now in the terminal run 'npm run dev'
- This will run the app locally you can go to http://localhost:3000 and test it out

STEPS TO DEPLY APPLICATION

- Make sure you use your firebase configuration by changing the details in the firebase.js file
- In the terminal run 'npm install -g firebase-tools'
- In the terminal run 'npm run build'
- In the terminal run 'firebase init'
- Select Y and then in the menu select the Hosting function with spacebar and press enter
- It will ask you to select the project so select your existing project from the menu

  
- Type the following answers for the questions (not all of these questions might be asked) :
- Detected an existing Vite codebase in the current directory, should we use this? No
- Do you want to use a web framework? (experimental) No
- What do you want to use as your public directory? - dist
- Configure as a single-page app (rewrite all urls to /index.html)? Yes
- Set up automatic builds and deploys with GitHub? No
- File dist/index.html already exists. Overwrite? Yes

- Once its all done run 'firebase deploy' in the terminal. You will get a link to your application that has been deployed.
  
