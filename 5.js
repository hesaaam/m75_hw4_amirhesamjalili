const myList = [{
    name: "Amir",
    family: "Jalili"
  }, {
    name: "Reza",
    family: "Mohamadi"
  }, {
    name: "Armin",
    family: "Rasoli"
  }];
  
  const filterList = (list, start, end) => {
    return list.filter(obj => {
      const name = obj.name;
      return name[0] === start && name[name.length - 1] === end;
    });
  };
  
  const filtered = filterList(myList, "A", "r");

  
  console.log(filtered);