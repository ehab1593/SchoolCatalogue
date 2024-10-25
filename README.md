# Project details and prompts - Creating a school catalog to store information and details of different schools.

- Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

- We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

1. School
2. Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
3. Getters: all properties have getters
4. Setters: the numberOfStudents property has a setter
5. Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
   
### Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)

### Middle
Does not include any additional properties or methods

### High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)

### Some additional avenues to build on your progress:

1. Create a middle school class
2. Add more properties to each class (averageTestScores, schoolOverview, etc.)
3. Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
