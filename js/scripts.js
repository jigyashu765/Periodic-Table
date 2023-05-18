const elementOne = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium","Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon"];

const elementTwo = ["Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Unununium", "Ununbium", "Ununtrium", "Ununquadium", "Ununpentium", "Ununhexium", "Ununseptium", "Ununoctium",]

$(document).ready(function() {
  $('#screen').hide();

  $(".box").dblclick(function() {
  var boxId = $(this).attr("id");
  $('#screen').show();
  switch (boxId) {
    case "H":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[0]);
      $("#Year").text("1766");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[0]) + 1);
      $("#AtomicWeight").text("1.008");
      $("#MeltingPoint").text("-259.14");
      $("#BoilingPoint").text("-252.87");
    break;
    case "He":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[1]);
      $("#Year").text("1895");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[1]) + 1);
      $("#AtomicWeight").text("4.002");
      $("#MeltingPoint").text("-272.0");
      $("#BoilingPoint").text("-268.6");
    break;
    case "Li":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[2]);
      $("#Year").text("1817");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[2]) + 1);
      $("#AtomicWeight").text("6.941");
      $("#MeltingPoint").text("180.54");
      $("#BoilingPoint").text("1347.0");
    break;
    case "Be":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[3]);
      $("#Year").text("1798");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[3]) + 1);
      $("#AtomicWeight").text("9.012");
      $("#MeltingPoint").text("1278.0");
      $("#BoilingPoint").text("2970");
    break;
    case "B":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[4]);
      $("#Year").text("1808");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[4]) + 1);
      $("#AtomicWeight").text("10.811");
      $("#MeltingPoint").text("2300");
      $("#BoilingPoint").text("2550");
    break;
    case "C":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[5]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[5]) + 1);
      $("#AtomicWeight").text("12.011");
      $("#MeltingPoint").text("3500");
      $("#BoilingPoint").text("4827");
    break;
    case "N":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[6]);
      $("#Year").text("1772");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[6]) + 1);
      $("#AtomicWeight").text("14.007");
      $("#MeltingPoint").text("2300");
      $("#BoilingPoint").text("195.8");
    break;
    case "O":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[7]);
      $("#Year").text("1774");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[7]) + 1);
      $("#AtomicWeight").text("15.999");
      $("#MeltingPoint").text("-218.4");
      $("#BoilingPoint").text("183.0");
    break;
    case "F":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[8]);
      $("#Year").text("1886");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[8]) + 1);
      $("#AtomicWeight").text("18.998");
      $("#MeltingPoint").text("-219.62");
      $("#BoilingPoint").text("-188.14");
    break;
    case "Ne":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[9]);
      $("#Year").text("1898");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[9]) + 1);
      $("#AtomicWeight").text("20.180");
      $("#MeltingPoint").text("-248.6");
      $("#BoilingPoint").text("-246.1");
    break;
    case "Na":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[10]);
      $("#Year").text("1807");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[10]) + 1);
      $("#AtomicWeight").text("22.989");
      $("#MeltingPoint").text("97.8");
      $("#BoilingPoint").text("552.9");
    break;
    case "Mg":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[11]);
      $("#Year").text("1808");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[11]) + 1);
      $("#AtomicWeight").text("24.305");
      $("#MeltingPoint").text("650.0");
      $("#BoilingPoint").text("1107");
    break;
    case "Al":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[12]);
      $("#Year").text("1825");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[12]) + 1);
      $("#AtomicWeight").text("26.982");
      $("#MeltingPoint").text("660.37");
      $("#BoilingPoint").text("2467.0");
    break;
    case "Si":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[13]);
      $("#Year").text("1823");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[13]) + 1);
      $("#AtomicWeight").text("28.0855");
      $("#MeltingPoint").text("1410");
      $("#BoilingPoint").text("2355");
    break;
    case "P":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[14]);
      $("#Year").text("1669");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[14]) + 1);
      $("#AtomicWeight").text("30.974");
      $("#MeltingPoint").text("44.1");
      $("#BoilingPoint").text("280");
    break;
    case "S":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[15]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[15]) + 1);
      $("#AtomicWeight").text("32.066");
      $("#MeltingPoint").text("112.8");
      $("#BoilingPoint").text("444.8");
    break;
    case "Cl":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[16]);
      $("#Year").text("1774");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[16]) + 1);
      $("#AtomicWeight").text("35.453");
      $("#MeltingPoint").text("-100.98");
      $("#BoilingPoint").text("-34.6");
    break;
    case "Ar":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[17]);
      $("#Year").text("1894");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[17]) + 1);
      $("#AtomicWeight").text("39.948");
      $("#MeltingPoint").text("-189.3");
      $("#BoilingPoint").text("-186.0");
    break;
    case "K":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[18]);
      $("#Year").text("1807");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[18]) + 1);
      $("#AtomicWeight").text("39.098");
      $("#MeltingPoint").text("63.65");
      $("#BoilingPoint").text("774.0");
    break;
    case "Ca":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[19]);
      $("#Year").text("1808");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[19]) + 1);
      $("#AtomicWeight").text("40.078");
      $("#MeltingPoint").text("839.0");
      $("#BoilingPoint").text("1484.0");
    break;
    case "Sc":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[20]);
      $("#Year").text("1879");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[20]) + 1);
      $("#AtomicWeight").text("44.95");
      $("#MeltingPoint").text("1539");
      $("#BoilingPoint").text("2832");
    break;
    case "Ti":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[21]);
      $("#Year").text("1791");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[21]) + 1);
      $("#AtomicWeight").text("47.867");
      $("#MeltingPoint").text("1660");
      $("#BoilingPoint").text("3287");
    break;
    case "V":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[22]);
      $("#Year").text("1830");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[22]) + 1);
      $("#AtomicWeight").text("50.942");
      $("#MeltingPoint").text("1890");
      $("#BoilingPoint").text("3380");
    break;
    case "Cr":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[23]);
      $("#Year").text("1797");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[23]) + 1);
      $("#AtomicWeight").text("51.996");
      $("#MeltingPoint").text("1857");
      $("#BoilingPoint").text("2672");
    break;
    case "Mn":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[24]);
      $("#Year").text("1774");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[24]) + 1);
      $("#AtomicWeight").text("54.938");
      $("#MeltingPoint").text("1245");
      $("#BoilingPoint").text("1962");
    break;
    case "Fe":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[25]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[25]) + 1);
      $("#AtomicWeight").text("55.845");
      $("#MeltingPoint").text("1532");
      $("#BoilingPoint").text("2750");
    break;
    case "Co":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[26]);
      $("#Year").text("1737");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[26]) + 1);
      $("#AtomicWeight").text("58.933");
      $("#MeltingPoint").text("1495");
      $("#BoilingPoint").text("2870");
    break;
    case "Ni":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[27]);
      $("#Year").text("1751");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[27]) + 1);
      $("#AtomicWeight").text("58.693");
      $("#MeltingPoint").text("1453");
      $("#BoilingPoint").text("2732");
    break;
    case "Cu":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[28]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[28]) + 1);
      $("#AtomicWeight").text("63.546");
      $("#MeltingPoint").text("1083");
      $("#BoilingPoint").text("2567");
    break;
    case "Zn":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[29]);
      $("#Year").text("1746");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[29]) + 1);
      $("#AtomicWeight").text("65.39");
      $("#MeltingPoint").text("419.58");
      $("#BoilingPoint").text("907.0");
    break;
    case "Ga":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[30]);
      $("#Year").text("1875");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[30]) + 1);
      $("#AtomicWeight").text("69.723");
      $("#MeltingPoint").text("29.78");
      $("#BoilingPoint").text("2403.0");
    break;
    case "Ge":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[31]);
      $("#Year").text("1886");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[31]) + 1);
      $("#AtomicWeight").text("72.61");
      $("#MeltingPoint").text("937.4");
      $("#BoilingPoint").text("2830.0");
    break;
    case "As":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[32]);
      $("#Year").text("1600");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[32]) + 1);
      $("#AtomicWeight").text("74.922");
      $("#MeltingPoint").text("817.0");
      $("#BoilingPoint").text("613.0");
    break;
    case "Se":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[33]);
      $("#Year").text("1817");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[33]) + 1);
      $("#AtomicWeight").text("78.96");
      $("#MeltingPoint").text("217");
      $("#BoilingPoint").text("684.9");
    break;
    case "Br":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[34]);
      $("#Year").text("1826");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[34]) + 1);
      $("#AtomicWeight").text("79.904");
      $("#MeltingPoint").text("-7.2");
      $("#BoilingPoint").text("58.78");
    break;
    case "Kr":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[35]);
      $("#Year").text("1898");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[35]) + 1);
      $("#AtomicWeight").text("83.8");
      $("#MeltingPoint").text("-7.2");
      $("#BoilingPoint").text("-153.4");
    break;
    case "Rb":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[36]);
      $("#Year").text("1861");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[36]) + 1);
      $("#AtomicWeight").text("85.468");
      $("#MeltingPoint").text("38.89");
      $("#BoilingPoint").text("668");
    break;
    case "Sr":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[37]);
      $("#Year").text("1790");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[37]) + 1);
      $("#AtomicWeight").text("87.62");
      $("#MeltingPoint").text("769");
      $("#BoilingPoint").text("1384");
    break;
    case "Y":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[38]);
      $("#Year").text("1790");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[38]) + 1);
      $("#AtomicWeight").text("88.906");
      $("#MeltingPoint").text("1523");
      $("#BoilingPoint").text("3337");
    break;
    case "Zr":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[39]);
      $("#Year").text("1789");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[39]) + 1);
      $("#AtomicWeight").text("91.224");
      $("#MeltingPoint").text("1852");
      $("#BoilingPoint").text("4317");
    break;
    case "Nd":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[40]);
      $("#Year").text("1801");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[40]) + 1);
      $("#AtomicWeight").text("92.906");
      $("#MeltingPoint").text("2468");
      $("#BoilingPoint").text("4927");
    break;
    case "Mo":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[41]);
      $("#Year").text("1778");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[41]) + 1);
      $("#AtomicWeight").text("95.94");
      $("#MeltingPoint").text("2617");
      $("#BoilingPoint").text("4612");
    break;
    case "Tc":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[42]);
      $("#Year").text("1937");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[42]) + 1);
      $("#AtomicWeight").text("(98.0)");
      $("#MeltingPoint").text("2200");
      $("#BoilingPoint").text("4877");
    break;
    case "Ru":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[43]);
      $("#Year").text("1844");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[43]) + 1);
      $("#AtomicWeight").text("101.07");
      $("#MeltingPoint").text("2250");
      $("#BoilingPoint").text("3900");
    break;
    case "Rh":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[44]);
      $("#Year").text("1803");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[44]) + 1);
      $("#AtomicWeight").text("102.905");
      $("#MeltingPoint").text("1966");
      $("#BoilingPoint").text("3737");
    break;
    case "Pd":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[45]);
      $("#Year").text("1803");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[45]) + 1);
      $("#AtomicWeight").text("106.42");
      $("#MeltingPoint").text("1552");
      $("#BoilingPoint").text("2927");
    break;
    case "Ag":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[46]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[46]) + 1);
      $("#AtomicWeight").text("107.868");
      $("#MeltingPoint").text("961.93");
      $("#BoilingPoint").text("2212");
    break;
    case "Cd":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[47]);
      $("#Year").text("1817");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[47]) + 1);
      $("#AtomicWeight").text("112.411");
      $("#MeltingPoint").text("320.9");
      $("#BoilingPoint").text("765.0");
    break;
    case "In":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[48]);
      $("#Year").text("1863");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[48]) + 1);
      $("#AtomicWeight").text("114.818");
      $("#MeltingPoint").text("156.61");
      $("#BoilingPoint").text("2000");
    break;
    case "Sn":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[49]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[49]) + 1);
      $("#AtomicWeight").text("118.71");
      $("#MeltingPoint").text("231.9");
      $("#BoilingPoint").text("2270.0");
    break;
    case "Sb":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[50]);
      $("#Year").text("1600");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[50]) + 1);
      $("#AtomicWeight").text("121.76");
      $("#MeltingPoint").text("630");
      $("#BoilingPoint").text("1750");
    break;
    case "Te":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[51]);
      $("#Year").text("1728");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[51]) + 1);
      $("#AtomicWeight").text("127.06");
      $("#MeltingPoint").text("449.5");
      $("#BoilingPoint").text("989.8");
    break;
    case "I":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[52]);
      $("#Year").text("1811");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[52]) + 1);
      $("#AtomicWeight").text("129.905");
      $("#MeltingPoint").text("113.5");
      $("#BoilingPoint").text("184.0");
    break;
    case "Xe":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[53]);
      $("#Year").text("1898");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[53]) + 1);
      $("#AtomicWeight").text("131.29");
      $("#MeltingPoint").text("-111.9");
      $("#BoilingPoint").text("-108.1");
    break;
    case "Cs":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[54]);
      $("#Year").text("1860");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[54]) + 1);
      $("#AtomicWeight").text("132.906");
      $("#MeltingPoint").text("28.5");
      $("#BoilingPoint").text("678.4");
    break;
    case "Ba":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[55]);
      $("#Year").text("1808");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[55]) + 1);
      $("#AtomicWeight").text("137.327");
      $("#MeltingPoint").text("725");
      $("#BoilingPoint").text("1140");
    break;
    case "Lanthanides":
      $('#screen').hide();
      $(".ActinidesJump").css({
        "animation": "none",
      });
      $(".LanthanidesJump").css({
        "animation": "IamHere 2s ease-in-out 1 forwards",
      });
    break;
    case "La":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[56]);
      $("#Year").text("1839");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[56]) + 1);
      $("#AtomicWeight").text("139.906");
      $("#MeltingPoint").text("920.0");
      $("#BoilingPoint").text("3469.0");
    break;
    case "Ce":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[57]);
      $("#Year").text("1803");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[57]) + 1);
      $("#AtomicWeight").text("140.116");
      $("#MeltingPoint").text("935.0");
      $("#BoilingPoint").text("3257.0");
    break;
    case "Pr":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[58]);
      $("#Year").text("1885");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[58]) + 1);
      $("#AtomicWeight").text("140.908");
      $("#MeltingPoint").text("935.0");
      $("#BoilingPoint").text("3127.0");
    break;
    case "Nb":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[59]);
      $("#Year").text("1925");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[59]) + 1);
      $("#AtomicWeight").text("144.24");
      $("#MeltingPoint").text("1010.0");
      $("#BoilingPoint").text("3127.0");
    break;
    case "Pm":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[60]);
      $("#Year").text("1945");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[60]) + 1);
      $("#AtomicWeight").text("(145.0)");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Sm":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[61]);
      $("#Year").text("1879");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[61]) + 1);
      $("#AtomicWeight").text("150.36");
      $("#MeltingPoint").text("1072.0");
      $("#BoilingPoint").text("1900");
    break;
    case "Eu":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[62]);
      $("#Year").text("1901");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[62]) + 1);
      $("#AtomicWeight").text("151.964");
      $("#MeltingPoint").text("1360");
      $("#BoilingPoint").text("1597.0");
    break;
    case "Gd":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[63]);
      $("#Year").text("1843");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[63]) + 1);
      $("#AtomicWeight").text("158.93");
      $("#MeltingPoint").text("1311");
      $("#BoilingPoint").text("3233");
    break;
    case "Tb":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[64]);
      $("#Year").text("1843");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[64]) + 1);
      $("#AtomicWeight").text("158.93");
      $("#MeltingPoint").text("1360");
      $("#BoilingPoint").text("3041.0");
    break;
    case "Dy":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[65]);
      $("#Year").text("1886");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[65]) + 1);
      $("#AtomicWeight").text("162.5");
      $("#MeltingPoint").text("1412.0");
      $("#BoilingPoint").text("2562.0");
    break;
    case "Ho":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[66]);
      $("#Year").text("1878");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[66]) + 1);
      $("#AtomicWeight").text("164.93");
      $("#MeltingPoint").text("1470.0");
      $("#BoilingPoint").text("2720.0");
    break;
    case "Er":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[67]);
      $("#Year").text("1843");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[67]) + 1);
      $("#AtomicWeight").text("168.934");
      $("#MeltingPoint").text("1522");
      $("#BoilingPoint").text("2510");
    break;
    case "Tm":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[68]);
      $("#Year").text("1879");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[68]) + 1);
      $("#AtomicWeight").text("168.934");
      $("#MeltingPoint").text("1545");
      $("#BoilingPoint").text("1727");
    break;
    case "Yb":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[69]);
      $("#Year").text("1878");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[69]) + 1);
      $("#AtomicWeight").text("173.04");
      $("#MeltingPoint").text("824.0");
      $("#BoilingPoint").text("1466.0");
    break;
    case "Lu":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[70]);
      $("#Year").text("1907");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[70]) + 1);
      $("#AtomicWeight").text("177.967");
      $("#MeltingPoint").text("1656");
      $("#BoilingPoint").text("3315");
    break;
    case "Hf":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[71]);
      $("#Year").text("1783");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[71]) + 1);
      $("#AtomicWeight").text("183.84");
      $("#MeltingPoint").text("3410");
      $("#BoilingPoint").text("5660");
    break;
    case "Ta":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[72]);
      $("#Year").text("1783");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[72]) + 1);
      $("#AtomicWeight").text("183.84");
      $("#MeltingPoint").text("3410");
      $("#BoilingPoint").text("5660");
    break;
    case "W":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[73]);
      $("#Year").text("1783");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[73]) + 1);
      $("#AtomicWeight").text("183.84");
      $("#MeltingPoint").text("3410");
      $("#BoilingPoint").text("5660");
    break;
    case "Re":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[74]);
      $("#Year").text("1925");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[74]) + 1);
      $("#AtomicWeight").text("186.207");
      $("#MeltingPoint").text("3180.0");
      $("#BoilingPoint").text("5627.0");
    break;
    case "Os":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[75]);
      $("#Year").text("1803");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[75]) + 1);
      $("#AtomicWeight").text("190.23");
      $("#MeltingPoint").text("3045");
      $("#BoilingPoint").text("5027");
    break;
    case "Ir":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[76]);
      $("#Year").text("1804");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[76]) + 1);
      $("#AtomicWeight").text("192.217");
      $("#MeltingPoint").text("2410");
      $("#BoilingPoint").text("4527");
    break;
    case "Pt":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[77]);
      $("#Year").text("1735");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[77]) + 1);
      $("#AtomicWeight").text("195.078");
      $("#MeltingPoint").text("1772.0");
      $("#BoilingPoint").text("3827");
    break;
    case "Au":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[78]);
      $("#Year").text("3000 B.C.");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[78]) + 1);
      $("#AtomicWeight").text("196.967");
      $("#MeltingPoint").text("-38.87");
      $("#BoilingPoint").text("365.58");
    break;
    case "Hg":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[79]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[79]) + 1);
      $("#AtomicWeight").text("200.59");
      $("#MeltingPoint").text("-38.87");
      $("#BoilingPoint").text("365.58");
    break;
    case "Tl":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[80]);
      $("#Year").text("1861");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[80]) + 1);
      $("#AtomicWeight").text("204.383");
      $("#MeltingPoint").text("303.5");
      $("#BoilingPoint").text("1457.0");
    break;
    case "Pb":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[81]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[81]) + 1);
      $("#AtomicWeight").text("207.2");
      $("#MeltingPoint").text("327.5");
      $("#BoilingPoint").text("1740.0");
    break;
    case "Bi":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[82]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[82]) + 1);
      $("#AtomicWeight").text("208.98");
      $("#MeltingPoint").text("271.3");
      $("#BoilingPoint").text("1560.0");
    break;
    case "Po":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[83]);
      $("#Year").text("1898");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[83]) + 1);
      $("#AtomicWeight").text("209");
      $("#MeltingPoint").text("254.0");
      $("#BoilingPoint").text("962.0");
    break;
    case "At":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[84]);
      $("#Year").text("1940");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[84]) + 1);
      $("#AtomicWeight").text("210.0");
      $("#MeltingPoint").text("302.0");
      $("#BoilingPoint").text("337.0");
    break;
    case "Rn":
      $("#Elements").text(boxId);
      $("#Name").text(elementOne[85]);
      $("#Year").text("1898");
      $("#AtomicNumber").text(elementOne.indexOf(elementOne[85]) + 1);
      $("#AtomicWeight").text("222.0");
      $("#MeltingPoint").text("-71.8");
      $("#BoilingPoint").text("-61.8");
    break;
    case "Fr":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[0]);
      $("#Year").text("1939");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[0]) + 1);
      $("#AtomicWeight").text("223.0");
      $("#MeltingPoint").text("27.0");
      $("#BoilingPoint").text("677.0");
    break;
    case "Ra":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[1]);
      $("#Year").text("1898");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[1]) + 1);
      $("#AtomicWeight").text("226.0");
      $("#MeltingPoint").text("700.0");
      $("#BoilingPoint").text("1737.0");
    break;
    case "Actinides":
      $('#screen').hide();
      $(".LanthanidesJump").css({
        "animation": "none",
      });
      $(".ActinidesJump").css({
        "animation": "IamHere 2s ease-in-out 1 forwards",
      });
    break;
    case "Ac":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[2]);
      $("#Year").text("1899");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[2]) + 1);
      $("#AtomicWeight").text("227.0");
      $("#MeltingPoint").text("1050.0");
      $("#BoilingPoint").text("3200.0");
    break;
    case "Th":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[3]);
      $("#Year").text("1828");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[3]) + 1);
      $("#AtomicWeight").text("232.038");
      $("#MeltingPoint").text("1750.0");
      $("#BoilingPoint").text("47900.0");
    break;
    case "Pa":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[4]);
      $("#Year").text("1917");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[4]) + 1);
      $("#AtomicWeight").text("231.036");
      $("#MeltingPoint").text("1600.0");
      $("#BoilingPoint").text("____");
    break;
    case "U":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[5]);
      $("#Year").text("1989");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[5]) + 1);
      $("#AtomicWeight").text("231.036");
      $("#MeltingPoint").text("1132");
      $("#BoilingPoint").text("3818");
    break;
    case "Np":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[6]);
      $("#Year").text("1940");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[6]) + 1);
      $("#AtomicWeight").text("237.0");
      $("#MeltingPoint").text("640");
      $("#BoilingPoint").text("3902");
    break;
    case "Pu":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[7]);
      $("#Year").text("1940");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[7]) + 1);
      $("#AtomicWeight").text("244.0");
      $("#MeltingPoint").text("639.5");
      $("#BoilingPoint").text("3235.0");
    break;
    case "Am":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[8]);
      $("#Year").text("1945");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[8]) + 1);
      $("#AtomicWeight").text("243.0");
      $("#MeltingPoint").text("994.0");
      $("#BoilingPoint").text("2607.0");
    break;
    case "Cm":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[9]);
      $("#Year").text("1944");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[9]) + 1);
      $("#AtomicWeight").text("247.0");
      $("#MeltingPoint").text("1340.0");
      $("#BoilingPoint").text("____");
    break;
    case "Bk":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[10]);
      $("#Year").text("1949");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[10]) + 1);
      $("#AtomicWeight").text("247.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Cf":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[11]);
      $("#Year").text("1950");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[11]) + 1);
      $("#AtomicWeight").text("251.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Es":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[12]);
      $("#Year").text("1952");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[12]) + 1);
      $("#AtomicWeight").text("252.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Fm":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[13]);
      $("#Year").text("1953");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[13]) + 1);
      $("#AtomicWeight").text("257.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Md":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[14]);
      $("#Year").text("1955");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[14]) + 1);
      $("#AtomicWeight").text("258.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "No":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[15]);
      $("#Year").text("1957");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[15]) + 1);
      $("#AtomicWeight").text("259.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Lr":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[16]);
      $("#Year").text("1961");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[16]) + 1);
      $("#AtomicWeight").text("262.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Rf":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[17]);
      $("#Year").text("1969");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[17]) + 1);
      $("#AtomicWeight").text("261.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Db":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[18]);
      $("#Year").text("1970");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[18]) + 1);
      $("#AtomicWeight").text("262.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Sg":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[19]);
      $("#Year").text("1974");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[19]) + 1);
      $("#AtomicWeight").text("263.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Bh":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[20]);
      $("#Year").text("1976");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[20]) + 1);
      $("#AtomicWeight").text("262.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Hs":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[21]);
      $("#Year").text("1984");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[21]) + 1);
      $("#AtomicWeight").text("265.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Mt":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[22]);
      $("#Year").text("1987");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[22]) + 1);
      $("#AtomicWeight").text("266.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Ds":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[23]);
      $("#Year").text("1987");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[23]) + 1);
      $("#AtomicWeight").text("271.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Uuu":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[24]);
      $("#Year").text("1994");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[24]) + 1);
      $("#AtomicWeight").text("272.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Uub":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[25]);
      $("#Year").text("1996");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[25]) + 1);
      $("#AtomicWeight").text("277.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Uut":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[26]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[26]) + 1);
      $("#AtomicWeight").text("277.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Uuq":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[27]);
      $("#Year").text("1999");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[27]) + 1);
      $("#AtomicWeight").text("289.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Uup":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[28]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[28]) + 1);
      $("#AtomicWeight").text("288.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Uuh":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[29]);
      $("#Year").text("1999");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[29]) + 1);
      $("#AtomicWeight").text("292.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Eka":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[30]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[30]) + 1);
      $("#AtomicWeight").text("294.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    case "Uuo":
      $("#Elements").text(boxId);
      $("#Name").text(elementTwo[31]);
      $("#Year").text("____");
      $("#AtomicNumber").text(elementOne.length + elementTwo.indexOf(elementTwo[31]) + 1);
      $("#AtomicWeight").text("294.0");
      $("#MeltingPoint").text("____");
      $("#BoilingPoint").text("____");
    break;
    default:
      $('#screen').hide();
      break;
  }
  });

  // if ((".box").click) {
  //       var boxId = $(".box").attr("id");
  //       console.log(boxId);
  // }
    // $(".box").click(function() {
    //     var boxId = $(".box").attr("id");
    //     console.log(boxId);
    // });

    // $(".box").each(function() {
    //     var boxId = $(this).attr("id");
    //     // Perform operations with the boxId
    //     console.log(boxId);
    // });

    // $(".box").each(function() {
    //     var boxId = $(this).attr("id");
    //     // Perform operations specific to each element
    //     console.log("ID of the current element: " + boxId);
    //   });
      
      
      
    // console.log("ready")
    // $(".box").text("New text");
});  