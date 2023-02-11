const Employee = require('./Employee');

describe('Employee', () => {
  it('should set the name, id, and email properties when an instance is created', () => {
    const employee = new Employee('Harry Potter', '1', 'harry.potter@hogwarts.com');

    expect(employee.name).toEqual('Harry Potter');
    expect(employee.id).toEqual('1');
    expect(employee.email).toEqual('harry.potter@hogwarts.com');
  });

  it('should return the correct name when getName() is called', () => {
    const employee = new Employee('Harry Potter', '1', 'harry.potter@hogwarts.com');

    expect(employee.getName()).toEqual('Harry Potter');
  });

  it('should return the correct id when getId() is called', () => {
    const employee = new Employee('Harry Potter', '1', 'harry.potter@hogwarts.com');

    expect(employee.getId()).toEqual('1');
  });

  it('should return the correct email when getEmail() is called', () => {
    const employee = new Employee('Harry Potter', '1', 'harry.potter@hogwarts.com');

    expect(employee.getEmail()).toEqual('harry.potter@hogwarts.com');
  });

  it('should return the role "Employee" when getRole() is called', () => {
    const employee = new Employee('Harry Potter', '1', 'harry.potter@hogwarts.com');

    expect(employee.getRole()).toEqual('Employee');
  });
});