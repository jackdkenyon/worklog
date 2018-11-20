<!doctype html>
<html ng-app="mainApp"ng-controller="mainController">
<head>
  <title>User Login and Sessions</title>
  <link rel="stylesheet" type="text/css" 
      href="/static/css/stylesLarge.css" />
</head>
<body>
  <div class="form-container">
    <p class="form-header">Work Log</p>
    <form name= "mainPage" ng-submit= "addDocToWorklog()" >
     
<label>Date:</label>    
<input type="text" name="Date" id="date"
                ng-model="date"><br><br>

    <label>Ship:</label>
         <input type="text" name="Date" id="ship"
                ng-model="ship">


     <label>Ships Tech:</label>
         <input type="text" name="Date" id="tech"
                ng-model="tech">

    <label>JSN:</label>
         <input type="text" name="Date" id="jsn"
                ng-model="jsn"><br><br>


    <label>Comments:</label>
         <textarea rows="10" cols="80"
          contenteditable="true" spellcheck="true"
          type="text" name="comments" ng-model="comments"> 
          </textarea>       
       
      <input type="submit" value="Enter">      
     
    </form>
     

      
    

   </div> 
     <br>
     <button ng-click = "openSearch()" > Search </button> 
     <button ng-click = "logout()" > Logout </button>   
           
  <script src="/static/js/angular.min.js"></script>
  <script src="/static/js/main_app.js"></script>
 </body>
</html>
