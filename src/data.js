export const buffList = [
    "Agi/Str", "Armor%", "AP", "AP%", "BL", "Dmg%", "DR%", "Haste%", "Heal%", "HP", "int", "MP5", "mCrit", "mHaste", "replen", "sCrit", "sHaste", "SP", "spirit", "stam", "motw", "Stat%"
]
export const debuffList = [
    "ArmorMaj", "ArmorMin", "AP", "BldDmg", "cSpeed", "crit", "-Heal", "HRestore", "MRestore", "AtkSpd", "Miss%", "PhysDmg%", "sCrit", "sDMG", "sHit"
]
export const specList = [
    {
        name: "Blood",
        role: "Tank",
        buffs: ["Str/Agi", "AP%"],
        debuffs: ["AtkSpd"],
    },

    {
        name: "FrostDK",
        role: "mDPS",
        buffs: ["Str/Agi", "mHaste"],
        debuffs: ["AtkSpd"],
    },

    {
        name:"Unholy",
        role:"mDPS",
        buffs:["Str/Agi"],
        debuffs:["AtkSpd", "sDMG"]
    },

    {
        name:"Elemental",
        role:"rDPS",
        buffs:["Str/Agi", "BL", "MP5", "sCrit", "sHaste", "SP"],
        debuffs:["crit"]
    },

    {
        name:"Enhancement",
        role:"mDPS",
        buffs:["Str/Agi", "BL", "MP5", "AP%", "sHaste"],
        debuffs:[]
    },

    {
        name:"RestoShaman",
        role:"Heal",
        buffs:["Str/Agi", "BL", "MP5", "Armor%", "sHaste"],
        debuffs:[]
    },

    {
        name:"HolyPal",
        role:"Heal",
        buffs:["AP", "MP5", "Stat%"],
        debuffs:["HRestore", "MRestore"]
    },

    {
        name:"ProtPal",
        role:"Tank",
        buffs:["AP", "MP5", "Stat%", "DR%", "Heal%"],
        debuffs:["HRestore", "MRestore", "AtkSpd", "crit"]
    },

    {
        name:"Retribution",
        role:"mDPS",
        buffs:["AP", "MP5", "Stat%", "Dmg%", "Haste%", "replen"],
        debuffs:["HRestore", "MRestore", "crit"]
    },

    {
        name:"Arms",
        role:"mDPS",
        buffs:["AP", "HP"],
        debuffs:["AP", "BldDmg", "-Heal", "AtkSpd", "PhysDmg%", "ArmorMaj"]
    },

    {
        name:"Fury",
        role:"mDPS",
        buffs:["AP", "HP", "mCrit"],
        debuffs:["AP", "AtkSpd", "ArmorMaj"]
    },

    {
        name:"Protection",
        role:"Tank",
        buffs:["AP", "HP"],
        debuffs:["AP", "AtkSpd", "ArmorMaj"]
    },

    {
        name:"Balance",
        role:"rDPS",
        buffs:["Haste%", "sCrit", "motw"],
        debuffs:["ArmorMin", "Miss%", "sDMG", "sHit"]
    },

    {
        name:"Feral(Cat)",
        role:"mDPS",
        buffs:["mCrit", "motw"],
        debuffs:["ArmorMin", "BldDmg"]
    },

    {
        name:"Feral(Bear)",
        role:"Tank",
        buffs:["mCrit", "motw"],
        debuffs:["ArmorMin", "AtkSpd", "AP"]
    },

    {
        name:"RestoDruid",
        role:"Heal",
        buffs:["Heal%", "motw"],
        debuffs:["ArmorMin"]
    },

    {
        name:"Arcane",
        role:"rDPS",
        buffs:["Dmg%", "int"],
        debuffs:[]
    },

    {
        name:"Fire",
        role:"rDPS",
        buffs:["int"],
        debuffs:["sCrit"]
    },

    {
        name:"FrostMage",
        role:"rDPS",
        buffs:["int", "replen"],
        debuffs:["sCrit"]
    },

    {
        name:"Assassination",
        role:"mDPS",
        buffs:[],
        debuffs:["ArmorMaj", "cSpeed", "-Heal", "crit"]
    },

    {
        name:"Combat",
        role:"mDPS",
        buffs:[],
        debuffs:["ArmorMaj", "cSpeed", "-Heal", "PhysDmg%"]
    },

    {
        name:"Subtlety",
        role:"mDPS",
        buffs:[],
        debuffs:["ArmorMaj", "cSpeed", "-Heal"],
    },

    {
        name:"Beast Mastery",
        role:"rDPS",
        buffs:["Dmg%"],
        debuffs:["-Heal", "Miss%"]
    },

    {
        name:"Marksmanship",
        role:"rDPS",
        buffs:["AP%"],
        debuffs:["-Heal", "Miss%"],
    },

    {
        name:"Survival",
        role:"rDPS",
        buffs:["replen"],
        debuffs:["-Heal", "Miss%"]
    },

    {
        name:"Discipline",
        role:"Heal",
        buffs:["Armor%", "DR%", "spirit", "stam"],
        debuffs:[]
    },

    {
        name:"HolyPriest",
        role:"Heal",
        buffs:["Armor%", "spirit", "stam"],
        debuffs:[]
    },

    {
        name:"Shadow",
        role:"rDPS",
        buffs:["spirit", "stam", "replen"],
        debuffs:["sHit"]
    },

    {
        name:"Affliction",
        role:"rDPS",
        buffs:["int", "spirit"],
        debuffs:["ArmorMin", "AP", "cSpeed", "sDMG"]
    },

    {
        name:"Demonology",
        role:"rDPS",
        buffs:["SP"],
        debuffs:["ArmorMin", "AP", "cSpeed", "sDMG", "sCrit"]
    },

    {
        name:"Destruction",
        role:"rDPS",
        buffs:["HP", "replen"],
        debuffs:["ArmorMin", "AP", "cSpeed", "sDMG"]
    }
];