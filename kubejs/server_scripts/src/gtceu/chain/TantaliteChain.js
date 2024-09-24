ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
//铌钽铁矿初步处理
    ctnh.mixer('tantalum_ALKALINE_mixture')
        .itemInputs('32x gtceu:tantalite_dust', "32x gtceu:pyrochlore_dust")
        .inputFluids(Fluid.of('gtceu:sodium_carbonate_solution', 8000))
        .outputFluids(Fluid.of('gtceu:tantalum_ALKALINE_mixture', 4000))
        .EUt(100)
        .duration(10)
    //铌钽铁矿进阶处理    
    ctnh.large_chemical_reactor("Tantalite_Fluorine")
        .itemInputs("16x gtceu:Potassium_fluoride_dust")
        .inputFluids(Fluid.of('gtceu:tantalum_ALKALINE_mixture', 12000))
        .outputFluids(Fluid.of('gtceu:Tantalite_Fluorine', 4000))
        .itemOutputs('144x gtceu:soda_ash_dust', "32x gtceu:manganese_dust", "48x gtceu:stone_dust")
        .EUt(480)
        .duration(160)
    //氟化钾合成
    ctnh.chemical_reactor("Potassium_fluoride")
        .itemInputs("1x gtceu:potassium_dust")
        .inputFluids(Fluid.of("gtceu:fluorine", 1000))
        .itemOutputs("2x gtceu:Potassium_fluoride_dust")
        .EUt(32)
        .duration(5)
    //铌钽铁矿氧化处理
    ctnh.chemical_reactor("Niobium_Tantalite")
        .itemInputs("8x gtceu:chromium_trioxide_dust")
        .inputFluids(Fluid.of("gtceu:ammonium_hydroxide", 8000))
        .inputFluids(Fluid.of("gtceu:Tantalite_Fluorine", 4000))
        .itemOutputs("24x gtceu:potassium_hydroxide_dust","2x gtceu:chromium_dust")
        .outputFluids(Fluid.of('gtceu:ammonium_fluoride', 8000))
        .outputFluids(Fluid.of("gtceu:Niobium_Tantalite", 2000))
        .EUt(480)
        .duration(360)
    //一水合氨合成
    ctnh.chemical_reactor("ammonium_hydroxide")
        .inputFluids(Fluid.of("gtceu:ammonia", 1000))
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .outputFluids(Fluid.of("gtceu:ammonium_hydroxide",1000))
        .EUt(24)
        .duration(80)
    //铌钽氧化物分离
    ctnh.centrifuge("Tantalite_oxide_dust")
        .inputFluids(Fluid.of("gtceu:Niobium_Tantalite", 8000))
        .itemOutputs("56x gtceu:Tantalite_oxide_dust", "63x gtceu:Niobium_oxide_dust")
        .outputFluids(Fluid.of("minecraft:water", 16000))
        .EUt(1920)
        .duration(480)
    //五氧化二铌处理 
    ctnh.electric_blast_furnace("niobium_dust")
        .itemInputs("21x gtceu:Niobium_oxide_dust", "5x gtceu:hematite_dust", "30x gtceu:aluminium_dust")
        .itemOutputs("6x gtceu:niobium_dust", "2x gtceu:iron_dust", "6x gtceu:alumina_dust")
        .duration(840).EUt(1920).blastFurnaceTemp(2500)
    //五氧化二钽处理
    ctnh.electric_blast_furnace("tantalum_dust")
        .itemInputs("21x gtceu:Tantalite_oxide_dust", "5x gtceu:hematite_dust", "30x gtceu:aluminium_dust")
        .itemOutputs("6x gtceu:tantalum_dust", "2x gtceu:iron_dust", "6x gtceu:alumina_dust")
        .duration(840).EUt(1920).blastFurnaceTemp(2500)
    //氟化铵处理
    ctnh.electrolyzer("ammonia")
        .inputFluids(Fluid.of("gtceu:ammonium_fluoride", 1000))
        .outputFluids(Fluid.of("gtceu:ammonia", 1000))
        .outputFluids(Fluid.of("gtceu:fluorine", 1000))
        .EUt(24)
        .duration(80)
})