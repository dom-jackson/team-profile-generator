const Engineer = require('./Engineer');

describe('Engineer', () => {
  it('should inherit the name, id, and email properties from Employee', () => {
    const engineer = new Engineer('Harry Potter', '3', 'harry.potter@hogwarts.com', 'hpotter');

    expect(engineer.name).toEqual('Harry Potter');
    expect(engineer.id).toEqual('3');
    expect(engineer.email).toEqual('harry.potter@hogwarts.com');
  });

  it('should set the github property when an instance is created', () => {
    const engineer = new Engineer('Harry Potter', '3', 'harry.potter@hogwarts.com', 'hpotter');

    expect(engineer.github).toEqual('hpotter');
  });

  it('should return the correct github username when getGithub() is called', () => {
    const engineer = new Engineer('Harry Potter', '3', 'harry.potter@hogwarts.com', 'hpotter');

    expect(engineer.getGithub()).toEqual('hpotter');
  });

  it('should return the role "Engineer" when getRole() is called', () => {
    const engineer = new Engineer('Harry Potter', '3', 'harry.potter@hogwarts.com', 'hpotter');

    expect(engineer.getRole()).toEqual('Engineer');
  });
});