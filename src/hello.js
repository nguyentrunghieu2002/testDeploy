const Pangram = (string) => {
  const para = "abcdefghijklmnopqrstuvwxyz";
  console.log(para.toLowerCase().includes(string));
};

Pangram("aBc");
