//const PlantCasingCondition = Java.loadClass('org.arbor.gtnn.api.recipe.PlantCasingCondition')
//const PlantCasingBlock = Java.loadClass('org.arbor.gtnn.block.PlantCasingBlock')
ServerEvents.recipes(event => {
     // 2NH3 + H2SO4 -> (NH4)2SO4
     let ctnh = event.recipes.gtceu
     ctnh.chemical_reactor('ammonium_sulfate')
          .duration(200)
          .EUt(480)
          .inputFluids(Fluid.of('gtceu:ammonia', 2000))
          .inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
          .outputFluids(Fluid.of('gtceu:ammonium_sulfate', 1000))
          .circuit(1)

     //(NH4)2SO4 + CaCO3 -> (NH4)2CO3 + CaSO4
     ctnh.electric_blast_furnace('ammonium_carbonate')
          .duration(270)
          .EUt(120)
          .blastFurnaceTemp(700)
          .inputFluids(Fluid.of('gtceu:ammonium_sulfate', 1000))
          .itemInputs('5x gtceu:calcite_dust')
          .itemOutputs('6x gtceu:gypsum_dust')
          .itemOutputs('14x gtceu:ammonium_carbonate_dust')

     //K2CO3 + 2 SO2 + H2O -> 2 KHSO3 + CO2
     ctnh.chemical_reactor('potassium_bisulfite')
          .itemInputs('6x gtceu:potassium_carbonate_dust')
          .itemOutputs('12x gtceu:potassium_bisulfite_dust')
          .inputFluids(Fluid.of('gtceu:sulfur_dioxide', 2000))
          .inputFluids(Fluid.of('minecraft:water', 1000))
          .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
          .EUt(480)
          .duration(100)

     // K + HNO3 -> KNO3 + H
     ctnh.chemical_reactor('saltpeter')
          .itemInputs('gtceu:potassium_dust')
          .itemOutputs('5x gtceu:saltpeter_dust')
          .inputFluids(Fluid.of('gtceu:nitric_acid', 1000))
          .outputFluids(Fluid.of('gtceu:hydrogen', 1000))
          .EUt(30)
          .duration(100)
     //.id('gtceu:chemical_reactor/saltpeter')

     //KNO3 + Pb -> PbO + KNO2
     ctnh.electric_blast_furnace('potassium_nitrite_dust')
          .itemInputs('5x gtceu:saltpeter_dust')
          .itemInputs('gtceu:lead_dust')
          .itemOutputs('4x gtceu:potassium_nitrite_dust')
          .itemOutputs('2x gtceu:massicot_dust')
          .EUt(120)
          .duration(200)
          .blastFurnaceTemp(3000)

     //KNO2 + CH3COOH + NaCl -> HNO2 + CH3COONa + KCl
     ctnh.chemical_reactor('nitrous_acid')
          .itemInputs('4x gtceu:potassium_nitrite_dust')
          .itemInputs('2x gtceu:salt_dust')
          .itemOutputs('2x gtceu:rock_salt_dust')
          .inputFluids(Fluid.of('gtceu:acetic_acid', 1000))
          .outputFluids(Fluid.of('gtceu:nitrous_acid', 1000))
          .outputFluids(Fluid.of('gtceu:sodium_acetate', 1000))
          .EUt(480)
          .duration(100)

     ///2 KHSO3 + HNO2 -> K2NHS2O7 + H2O
     ctnh.chemical_reactor('potassium_hydroxylamine_disulfonate')
          .itemInputs('12x gtceu:potassium_bisulfite_dust')
          .itemOutputs('13x gtceu:potassium_hydroxylamine_disulfonate_dust')
          .inputFluids(Fluid.of('gtceu:nitrous_acid', 1000))
          .outputFluids(Fluid.of('minecraft:water'), 1000)
          .EUt(1920)
          .duration(1000)

     //2 K2NHS2O7 + 4 H2O -> 2 K2SO4 + H2SO4 + N2H8SO6
     ctnh.chemical_reactor('hydroxylammonium_sulfate')
          .itemInputs('26x gtceu:potassium_hydroxylamine_disulfonate_dust')
          .itemOutputs('17x gtceu:hydroxylammonium_sulfate_dust')
          .itemOutputs('12x gtceu:potassium_sulfate_dust')
          .inputFluids(Fluid.of('minecraft:water', 4000))
          .outputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
          .EUt(1920)
          .duration(200)

     //N2H8SO6 + BaCl2 -> 2 H4NOCl + BaSO4
     ctnh.mixer('barium_sulfate_solution')
          .EUt(30)
          .duration(120)
          .itemInputs('gtceu:barite_dust')
          .inputFluids(Fluid.of('minecraft:water', 1000))
          .outputFluids(Fluid.of('gtceu:barium_sulfate_solution', 1000))

     ctnh.chemical_reactor('hydroxylamine_hydrochloride')
          .itemInputs('17x gtceu:hydroxylammonium_sulfate_dust')
          .itemInputs('3x gtceu:barium_chloride_dust')
          .outputFluids(Fluid.of('gtceu:hydroxylamine_hydrochloride', 2000))
          .outputFluids(Fluid.of('gtceu:barium_sulfate_solution', 1000))
          .EUt(480)
          .duration(100)

     //C4H6O4 + CaCl2 (not consumed) + (CH3CO)2O -> C4H4O3 + 2 CH3COOH
     ctnh.chemical_reactor('succinic_anhydride')
          .itemInputs('14x gtceu:succinic_acid_dust')
          .itemOutputs('11x gtceu:succinic_anhydride_dust')
          .inputFluids(Fluid.of('gtceu:acetic_anhydride', 1000))
          .outputFluids(Fluid.of('gtceu:acetic_acid', 2000))
          .notConsumable('gtceu:calcium_chloride_dust')
          .EUt(7680)
          .duration(100)

     //2 CH2O + C2H2 + 4 H -> C4H8O + H2O
     ctnh.chemical_reactor('tetrahydrofuran')
          .inputFluids(Fluid.of('gtceu:acetylene', 1000))
          .inputFluids(Fluid.of('gtceu:formaldehyde', 2000))
          .inputFluids(Fluid.of('gtceu:hydrogen', 4000))
          .outputFluids(Fluid.of('gtceu:tetrahydrofuran', 1000))
          .EUt(7680)
          .duration(75)
     // acetylene
     ctnh.electric_blast_furnace('calcium_carbide')
          .itemInputs('2x gtceu:carbon_dust')
          .itemInputs('2x gtceu:quicklime_dust')
          .itemOutputs('3x gtceu:calcium_carbide_dust')
          .outputFluids(Fluid.of('gtceu:oxygen', 1000))
          .blastFurnaceTemp(1500)
          .EUt(120)
          .duration(200)

     ctnh.electric_blast_furnace('acetylene')
          .itemInputs('3x gtceu:calcium_carbide_dust')
          .itemOutputs('5x gtceu:calcium_hydroxide_dust')
          .inputFluids(Fluid.of('gtceu:steam', 2000))
          .outputFluids(Fluid.of('gtceu:acetylene', 1000))
          .blastFurnaceTemp(2300)
          .EUt(120)
          .duration(200)
     //C4H4O3 + NH3OHCl + Na -> C4H5NO3 + H2O + NaCl + H
     ctnh.chemical_reactor('nhydroxy_succinimide')
          .itemInputs('11x gtceu:succinic_anhydride_dust')
          .itemInputs('gtceu:sodium_dust')
          .itemOutputs('2x gtceu:salt_dust')
          .itemOutputs('13x gtceu:nhydroxy_succinimide_dust')
          .inputFluids(Fluid.of('gtceu:hydroxylamine_hydrochloride', 1000))
          .outputFluids(Fluid.of('minecraft:water', 1000))
          .outputFluids(Fluid.of('gtceu:hydrogen', 1000))
          .EUt(1920)
          .duration(200)

     //NH3 + 3 C2H5OH -> (C2H5)3N + 3 H2O
     ctnh.chemical_reactor('triethylamine')
          .inputFluids(Fluid.of('gtceu:ammonia', 1000))
          .inputFluids(Fluid.of('gtceu:ethanol', 3000))
          .outputFluids(Fluid.of('gtceu:triethylamine', 1000))
          .outputFluids(Fluid.of('minecraft:water', 3000))
          .EUt(480)
          .duration(100)

     //(CH2CO)2NOH + (CH3CO)2O -> C6H7NO4 + CH3COOH
     ctnh.chemical_reactor('succinimidyl_acetate')
          .itemInputs('13x gtceu:nhydroxy_succinimide_dust')
          .itemOutputs('18x gtceu:succinimidyl_acetate_dust')
          .inputFluids(Fluid.of('gtceu:acetic_anhydride', 1000))
          .outputFluids(Fluid.of('gtceu:acetic_acid', 1000))
          .notConsumableFluid(Fluid.of('gtceu:triethylamine', 1000))
          .notConsumableFluid(Fluid.of('gtceu:tetrahydrofuran', 1000))
          .EUt(1920)
          .duration(200)

     // Se + 2O -> SeO2
     ctnh.chemical_reactor('selenium_dioxide')
          .itemInputs('gtceu:selenium_dust')
          .itemOutputs('3x gtceu:selenium_dioxide_dust')
          .inputFluids(Fluid.of('gtceu:oxygen', 2000))
          .EUt(30)
          .duration(100)
     //NaIO4 + C3H6O -> NaIO3 + CH2O + C2H4O
     ctnh.chemical_reactor('acetaldehyde')
          .itemInputs('6x gtceu:sodium_periodate_dust')
          .itemOutputs('5x gtceu:sodium_iodate_dust')
          .notConsumable('gtceu:osmium_tetroxide_dust')
          .inputFluids(Fluid.of('gtceu:acetone', 1000))
          .outputFluids(Fluid.of('gtceu:acetaldehyde', 1000))
          .outputFluids(Fluid.of('gtceu:formaldehyde', 1000))
          .duration(220)
          .EUt(7680)


     //CH3CHO + O -> (CHO)2 + H2O
     ctnh.chemical_reactor('glyoxal')
          .inputFluids(Fluid.of('gtceu:acetaldehyde', 1000))
          .inputFluids(Fluid.of('gtceu:oxygen', 1000))
          .outputFluids(Fluid.of('minecraft:water', 1000))
          .outputFluids(Fluid.of('gtceu:glyoxal', 1000))
          .notConsumableFluid(Fluid.of('gtceu:selenous_acid', 1000))
          .EUt(480)
          .duration(100)

     //2 CH3COOH + (NH4)2CO3 -> H2O + CO2 + 2 CH3COONH4
     ctnh.chemical_reactor('ammonium_acetate')
          .itemInputs('14x gtceu:ammonium_carbonate_dust')
          .itemOutputs('24x gtceu:ammonium_acetate_dust')
          .inputFluids(Fluid.of('gtceu:acetic_acid', 2000))
          .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
          .outputFluids(Fluid.of('minecraft:water', 1000))
          .EUt(1920)
          .duration(100)

     //CH3COONH4 -> CH3CONH2 + H2O (H2O lost in dehydrator)
     ctnh.dehydrator('acetamide')
          .itemInputs('12x gtceu:ammonium_acetate_dust')
          .itemOutputs('9x gtceu:acetamide_dust')
          .EUt(480)
          .duration(100)

     //CH3CONH2 -> CH3CN + H2O (H2O lost in dehydrator)
     ctnh.dehydrator('glycolonitrile')
          .itemInputs('9x gtceu:acetamide_dust')
          .itemOutputs('6x gtceu:acetonitrile_dust')
          .EUt(480)
          .duration(100)

     //C7H8 + Cl -> C7H7Cl + H
     ctnh.chemical_reactor('benzyl_chloride')
          .inputFluids(Fluid.of('gtceu:toluene', 1000))
          .inputFluids(Fluid.of('gtceu:chlorine', 1000))
          .outputFluids(Fluid.of('gtceu:benzyl_chloride', 1000))
          .outputFluids(Fluid.of('gtceu:hydrogen', 1000))
          //.notConsumable(UVA_HALIDE_LAMP)
          .EUt(480)
          .duration(100)

     //6 CH2O + 4 NH3 -> C6H12N4 + 6 H2O
     ctnh.chemical_reactor('hexamethylenetetramine')
          .itemOutputs('22x gtceu:hexamethylenetetramine_dust')
          .inputFluids(Fluid.of('gtceu:formaldehyde', 4000))
          .inputFluids(Fluid.of('gtceu:ammonia', 6000))
          .outputFluids(Fluid.of('minecraft:water', 6000))
          .EUt(480)
          .duration(100)

     //C7H7Cl + C6H12N4 + 2 HCl + 6 H2O -> C7H9N + 6 CH2O + 3 NH4Cl
     ctnh.large_chemical_reactor('benzylamine')
          .itemInputs('22x gtceu:hexamethylenetetramine_dust')
          .inputFluids(Fluid.of('gtceu:benzyl_chloride', 1000))
          .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
          .inputFluids(Fluid.of('minecraft:water', 6000))
          .outputFluids(Fluid.of('gtceu:benzylamine', 1000))
          .outputFluids(Fluid.of('gtceu:ammonium_chloride', 3000))
          .outputFluids(Fluid.of('gtceu:formaldehyde', 6000))
          .EUt(7680)
          .duration(200)

     //6 C7H9N + 3 (CHO)2 + CH3CN (not consumed) -> C48N6H48 + 6 H2O
     ctnh.chemical_reactor('hexabenzylhexaazaisowurtzitane')
          .itemOutputs('gtceu:hexabenzylhexaazaisowurtzitane_dust')
          .inputFluids(Fluid.of('gtceu:glyoxal', 3000))
          .inputFluids(Fluid.of('gtceu:benzylamine', 6000))
          .outputFluids(Fluid.of('minecraft:water', 6000))
          .EUt(7680)
          .duration(100)

     ctnh.chemical_reactor('palladium_chloride')
          .itemInputs('gtceu:palladium_dust')
          .inputFluids(Fluid.of('gtceu:chlorine', 2000))
          .itemOutputs('3x gtceu:palladium_chloride_dust')
          .EUt(30)
          .duration(320)

     event.remove({ id: 'gtceu:mixer/palladium_on_carbon' })
     ctnh.chemical_reactor('palladium_on_carbon')
          .itemInputs('gtceu:palladium_chloride_dust')
          .itemInputs('gtceu:carbon_dust')
          .itemOutputs('gtceu:palladium_on_carbon_dust')
          .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
          .inputFluids(Fluid.of('gtceu:formaldehyde', 1000))
          .EUt(1920)
          .duration(100)

     //C48N6H48 + 4C6H7NO4 + 8H -> 4C7H8 + C28N6H32O4 + 4C4H5NO2 + 4O
     ctnh.chemical_plant('dibenzyl_tetraacetylhexaazaisowurtzitane')
          .itemOutputs('gtceu:dibenzyl_tetraacetylhexaazaisowurtzitane_dust')
          .itemInputs('gtceu:hexabenzylhexaazaisowurtzitane_dust')
          .itemInputs('72x gtceu:succinimidyl_acetate_dust')
          .itemOutputs('48x gtceu:succinimide_dust')
          .inputFluids(Fluid.of('gtceu:hydrogen', 8000))
          .outputFluids(Fluid.of('gtceu:toluene', 4000))
          .outputFluids(Fluid.of('gtceu:oxygen', 4000))
          .notConsumable('gtceu:palladium_on_carbon_dust')
          .notConsumableFluid(Fluid.of('gtceu:ethylbenzene', 1000))
          .notConsumableFluid(Fluid.of('gtceu:hydrobromic_acid', 1000))
          //.notConsumable(Fluid.of('gtceu:dimethylformamide',1000))
          .EUt(30720)
          .duration(100)
          .addCondition(GTNNRecipes.INSTANCE.setPlantCasing(6))

     ctnh.chemical_reactor('hydrobromic_acid')
          .inputFluids(Fluid.of('gtceu:bromine', 1000))
          .inputFluids(Fluid.of('gtceu:hydrogen', 1000))
          .outputFluids(Fluid.of('gtceu:hydrobromic_acid', 1000))
          .EUt(120)
          .duration(100)
     //2H3BO3 + B -> B2O3
     ctnh.dehydrator('boron_oxide')
          .itemInputs('gtceu:boron_dust')
          .inputFluids(Fluid.of('gtceu:boric_acid', 2000))
          .itemOutputs('5x gtceu:boron_oxide_dust')
          .EUt(120)
          .duration(100)

     //B2O3 + 6HF -> 3H2O + 2BF3
     ctnh.chemical_reactor('boron_fluoride')
          .itemInputs('5x gtceu:boron_oxide_dust')
          .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 6000))
          .outputFluids(Fluid.of('minecraft:water', 3000))
          .outputFluids(Fluid.of('gtceu:boron_fluoride', 2000))
          .EUt(120)
          .duration(160)

     //BF3 + HF + HNO3 -> NO2BF4 + H2O
     ctnh.chemical_reactor('nitronium_tetrafluoroborate')
          .itemOutputs('8x gtceu:nitronium_tetrafluoroborate_dust')
          .inputFluids(Fluid.of('gtceu:boron_fluoride', 1000))
          .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
          .inputFluids(Fluid.of('nitric_acid', 1000))
          .outputFluids(Fluid.of('minecraft:water', 1000))
          .EUt(1920)
          .duration(100)

     //BF3 + HF + NO2 -> NOBF4 + HNO3
     ctnh.chemical_reactor('nitrosonium_tetrafluoroborate')
          .itemOutputs('7x gtceu:nitrosonium_tetrafluoroborate_dust')
          .inputFluids(Fluid.of('gtceu:boron_fluoride', 2000))
          .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 2000))
          .inputFluids(Fluid.of('gtceu:dinitrogen_tetroxide', 2000))
          .outputFluids(Fluid.of('gtceu:nitric_acid', 1000))
          .EUt(480)
          .duration(100)

     //C28N6H32O4 + 6 NOBF4 + 2 H2O -> C14N8H18O6 + 2 C7H6O + 4 NO + 6 HBF4
     ctnh.large_chemical_reactor('tetraacetyldinitrosohexaazaisowurtzitane')
          .itemInputs('gtceu:dibenzyl_tetraacetylhexaazaisowurtzitane_dust')
          .itemInputs('42x gtceu:nitrosonium_tetrafluoroborate_dust')
          .itemOutputs('gtceu:tetraacetyldinitrosohexaazaisowurtzitane_dust')
          .inputFluids(Fluid.of('minecraft:water', 2000))
          .outputFluids(Fluid.of('gtceu:tetrafluoroboric_acid', 6000))
          .outputFluids(Fluid.of('gtceu:nitric_oxide', 4000))
          .outputFluids(Fluid.of('gtceu:benzaldehyde', 2000))
          .EUt(1920)
          .duration(100)

     //C14N8H18O6 + 6 NO2BF4 + 4 H2O -> C6H6N12O12 + 2 NOBF4 + 4 CH3COOH + 4 HBF4
     ctnh.large_chemical_reactor('crude_hexanitro_hexaazaisowurtzitane')
          .itemInputs('gtceu:tetraacetyldinitrosohexaazaisowurtzitane_dust')
          .itemInputs('48x gtceu:nitronium_tetrafluoroborate_dust')
          .itemOutputs('gtceu:crude_hexanitro_hexaazaisowurtzitane_dust')
          .itemOutputs('14x gtceu:nitrosonium_tetrafluoroborate_dust')
          .inputFluids(Fluid.of('minecraft:water', 4000))
          .outputFluids(Fluid.of('gtceu:tetrafluoroboric_acid', 4000))
          .outputFluids(Fluid.of('gtceu:acetic_acid', 4000))
          .EUt(491520)
          .duration(100)

     ctnh.chemical_reactor('hexanitro_hexaazaisowurtzitane')
          .itemInputs('gtceu:crude_hexanitro_hexaazaisowurtzitane_dust')
          .itemInputs('gtceu:silica_gel_dust')
          .itemOutputs('8x gtceu:hexanitro_hexaazaisowurtzitane_dust')
          .inputFluids(Fluid.of('gtceu:ethylenediamine', 1000))
          .EUt(1920)
          .duration(100)

     // HBF4 + 3H2O -> 4HF + H3BO3
     ctnh.chemical_reactor('boric_acid')
          .inputFluids(Fluid.of('gtceu:tetrafluoroboric_acid', 1000))
          .inputFluids(Fluid.of('minecraft:water', 3000))
          .outputFluids(Fluid.of('gtceu:hydrofluoric_acid', 4000))
          .outputFluids(Fluid.of('gtceu:boric_acid', 1000))
          .EUt(120)
          .duration(100)

     /*BIO_REACTOR_RECIPES.recipeBuilder()
          .inputs(BrevibacteriumFlavium.getItemStack())
          .inputs(Succinimide.getItemStack(12))
          .outputs(SuccinicAnhydride.getItemStack(11))
          .fluidOutputs(Ammonia.getFluid(1000))
          .EUt(3840)
          .duration(100)
          .buildAndRegister();*/
})