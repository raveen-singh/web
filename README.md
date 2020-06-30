### uSober _A progressive web app to keep you informed_

On average, two in three people will be involved in a drunk driving crash in their lifetime([src](https://www.madd.org/statistics/)). For this reason we decided to try and increase visibility of cognitive impairment and use the technology in our pocket to empower change.

The goal is to create a Progressive Web Application capable of completing a 3 stage sobriety equivalency using the inputs on a modern smart phone. To accomplish this we used ReactJs to build a dynamic front end and a serverless backend to manage machine learning driven image processing to identify facial markers corelated with cognitive imparment.
<br/>

<img src='https://i.ibb.co/k3kBTb1/Screen-Shot-2020-06-29-at-9-43-58-PM-2.png' />

<br/>
<br/>
The result of this project was a overwhelming success considering we were only given 36 hours. The 3 stages involve a balance test, reaction time test, and using a ML Model on Googles ML engine to identify facial indicators.

<br/>
<br/>

<img width='600' src='https://i.ibb.co/C2B7CSG/Screen-Shot-2018-11-06-at-4-50-06-PM.png' />
<i>fig.1</i>
To demonstrate the results of our ML model I decided to use a picture of myself afer being awake for ~40 hours. The first step in the backend processing is to identify each eye and the mouth. Individually these slices are sent to their particular ML model (i.e. Left eye model, right eye model, mouth model) and based on the cumulative scores we access the likelihood of cognitive impairment.

### Results
<img width='600' src='https://i.ibb.co/qW1TGkC/Screen-Shot-2018-11-06-at-4-27-23-PM.png' />
<img width='600' src='https://i.ibb.co/L0CJKgB/Screen-Shot-2018-11-06-at-4-27-45-PM.png' />
<img width='600' src='https://i.ibb.co/QrMmWKw/Screen-Shot-2018-11-06-at-4-27-55-PM.png' />
<br/>
As you can see the model has clearly classified the mouth as 'sober' but the eyes are much more questionable, we dont have impericle data to backup our recreation of the paper linked below but over the development process we would compare photos of those which have went without sleep and those which had been sleeping regularily and had seen a similar pattern with our model. This would lead us to believe that there is some merit to the indicators our model had been trained to classify based on.
<br/>

The combination of the results from each of the 3 stages of the test is a weighted average and we proide a likliness of cognitive impairment. As a result of this project we were honoured to take home ECHacks awards for 'Best Machine Learning Hack' and 'Best Use of the Google Cloud Platform' visible [here](https://devpost.com/software/usober) .

### Resources
1. [Facial Identification of Intoxication](https://arxiv.org/pdf/1805.10030.pdf)
2. [Human Postural Control and Intoxication](http://portal.research.lu.se/ws/files/3206348/3460149.pdf)
3. [Reaction time and Intoxication](https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-11-526)
### Team
- Nicholas Lewanowicz
- Kostia Arlouski
- Raveen Singh
- Bryen Xie


This is created as a Hackathon project at ECHacks 2018. The app will be available at [https://usober.herokuapp.com/](https://usober.herokuapp.com/).
