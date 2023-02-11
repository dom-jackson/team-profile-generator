const Intern = require('./Intern');

describe('Intern', () => {
  it('should inherit the name, id, and email properties from Employee', () => {
    const intern = new Intern('Harry Potter', '4', 'harry.potter@hogwarts.com', 'Hogwarts');

    expect(intern.name).toEqual('Harry Potter');
    expect(intern.id).toEqual('4');
    expect(intern.email).toEqual('harry.potter@hogwarts.com');
  });

  it('should set the school property when an instance is created', () => {
    const intern = new Intern('Harry Potter', '4', 'harry.potter@hogwarts.com', 'Hogwarts');

    expect(intern.school).toEqual('Hogwarts');
  });

  it('should return the correct school name when getSchool() is called', () => {
    const intern = new Intern('Harry Potter', '4', 'harry.potter@hogwarts.com', 'Hogwarts');

    expect(intern.getSchool()).toEqual('Hogwarts');
  });

  it('should return the role "Intern" when getRole() is called', () => {
    const intern = new Intern('Harry Potter', '4', 'harry.potter@hogwarts.com', 'Hogwarts');

    expect(intern.getRole()).toEqual('Intern');
  });
});