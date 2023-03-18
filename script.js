//your code here

let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Who', 'Aerosmith', 'Queen'];

// Remove articles from the band names
bandNames = bandNames.map(name => name.replace(/^(the|a|an)\s+/i, ''));

// Sort the band names in lexicographic order
bandNames.sort();

// Display the sorted band names in a list
const bandList = document.getElementById('band');
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
});