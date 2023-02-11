const Manager = require('./Manager');

describe('Manager', () => {
  it('should inherit the name, id, and email properties from Employee', () => {
    const manager = new Manager('Harry Potter', '2', 'harry.potter@hogwarts.com', '102');

    expect(manager.name).toEqual('Harry Potter');
    expect(manager.id).toEqual('2');
    expect(manager.email).toEqual('harry.potter@hogwarts.com');
  });

  it('should set the officeNumber property when an instance is created', () => {
    const manager = new Manager('Harry Potter', '2', 'harry.potter@hogwarts.com', '102');

    expect(manager.officeNumber).toEqual('102');
  });

  it('should return the role "Manager" when getRole() is called', () => {
    const manager = new Manager('Harry Potter', '2', 'harry.potter@hogwarts.com', '102');

    expect(manager.getRole()).toEqual('Manager');
  });
});