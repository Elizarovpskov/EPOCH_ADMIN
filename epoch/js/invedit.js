/**
  * @name = Inventory editor for DayZ Server Controlcenter
  * @author = Written by Henry Garle. Edited and improved by Crosire.
  * @contact = http://facewound.co.uk/, henrygarle@gmail.com
  */

// List of acceptable items and their friendly names, edit this to add more but be careful, you can break peoples inventories or get kicked if your server does not allow certain items
var ItemList = {
	model: function() {
		return [
			["Survivor", "Survivor1_DZ"],
			["Survivor", "Survivor2_DZ"],
			["Survivor", "Survivor3_DZ"],
			["Survivor", "SurvivorW2_DZ"],
			["Ghillie", "Sniper1_DZ"],
			["Camo", "Camo1_DZ"],
			["Bandit", "Bandit1_DZ"],
			["Rocket", "Rocket_DZ"]
		];
	},
	primary: function() {
		return [
			["Lee Enfield", "LeeEnfield"],
			["Double Barrel Shotgun", "MR43"],
			["Winchester 1866", "Winchester1866"],
			["Crossbow", "Crossbow"],
			["M1014", "M1014"],
			["Remington 870 Flashlight", "Remington870_lamp"],
			["Bizon", "bizon"],
			["AK-107", "AK_107_kobra"],
			["AK-107 PSO", "AK_107_pso"],
			["AK107 GLkobra", "AK_107_GL_kobra"],
			["AKS", "AK_47_S"],
			["AK 74", "AK_74"],
			["AKM", "AK_47_M"],
			["AKS-74 Cobra", "AKS_74_kobra"],
			["FN FAL AN/PVS-4", "FN_FAL_ANPVS4"],
			["AKS-74 PSO", "AKS_74_pso"],
			["AKS-74U", "AKS_74_U"],
			["M4A1 SDCamo", "M4A1_HWS_GL_SD_Camo"],
			["M4A1 M203 RCO", "M4A1_RCO_GL"],
			["M16A2", "M16A2"],
			["M16A2 M203", "M16A2GL"],
			["M16A4", "m16a4_acg"],
			["M4A1", "M4A1"],
			["M4A1 CCO", "M4A1_Aim"],
			["M4A1 CCO SD", "M4A1_AIM_SD_camo"],
			["M4A3 CCO", "M4A3_CCO_EP1"],
			["FN FAL", "FN_FAL"],
			["M240", "M240_DZ"],
			["M249 SAW", "M249_DZ"],
			["Mk 48 Mod 0", "Mk_48_DZ"],
			["MP5", "MP5A5"],
			["MP5 SD", "MP5SD"],
			["Bizon PP-19 SD", "bizon_silenced"],
			["M4SPR", "M4SPR"],
			["Sa-58 CCO", "Sa58V_CCO_EP1"],
			["Sa-58P", "Sa58P_EP1"],
			["Sa-58V", "Sa58V_EP1"],
			["Sa-58V ACOG", "Sa58V_RCO_EP1"],
			["M40A3", "M40A3"],
			["SVD des", "SVD_des_EP1"],
			["SVD NSPU", "SVD_NSPU_EP1"],
			["ksvk", "ksvk"],
			["CZ50", "huntingrifle"],
			["DMR", "DMR"],
			["M14", "M14_EP1"],
			["M24", "M24"],
			["M107", "m107_DZ"],
			["SVD Camo", "SVD_Camo"],
			["AS50", "BAF_AS50_scoped"]
			["M60", "M60A4_EP1"],
			["M249 EP1", "M249_EP1"],
			["m240 scoped", "m240_scoped_EP1"],
			["RPK 74", "RPK_74"],
			["L85A2 UGLHolo", "BAF_L85A2_RIS_SUSAT"],
			["L85A2 RISHolo", "BAF_L85A2_RIS_Holo"],
			["G36A", "G36A"],
			["G36A camo", "G36A_camo"],
			["G36C", "G36C"],
			["G36C camo", "G36C_camo"],
			["G36K", "G36K"],
			["G36K camo", "G36K_camo"],
			["Crossbow", "Crossbow_DZ"D]
		];
	},
	secondary: function() {
		return [
			["Bandage", "ItemBandage"],
			["Makarov Ammo", "8Rnd_9x18_Makarov"],
			["M1911 Ammo", "7Rnd_45ACP_1911"],
			["Revolver Ammo", "6Rnd_45ACP"],
			["M9 Ammo", "15Rnd_9x19_M9"],
			["M9 SD Ammo", "15Rnd_9x19_M9SD"],
			["Glock 17 Ammo", "17Rnd_9x19_glock17"],
			["UZI Ammo", "30Rnd_9x19_UZI"],
			["HE GP25", "1Rnd_HE_GP25"],
			["Smoke Red GP25", "1Rnd_SmokeRed_GP25"],
			["Smoke Green GP25", "1Rnd_SmokeGreen_GP25"],
			["Smoke Yellow GP25", "1Rnd_SmokeYellow_GP25"],
			["Flare White GP25", "FlareWhite_GP25"],
			["Flare Green GP25", "FlareGreen_GP25"],
			["Flare Red GP25", "FlareRed_GP25"],
			["Flare Yellow GP25", "FlareYellow_GP25"],
			["HE M203", "1Rnd_HE_M203"],
			["Smoke M203", "1Rnd_Smoke_M203"],
			["Smoke Red M203", "1Rnd_SmokeRed_M203"],
			["Smoke Green M203", "1Rnd_SmokeGreen_M203"],
			["Smoke Yellow M203", "1Rnd_SmokeYellow_M203"],
            ["Flare White M203", "FlareWhite_M203"],
			["Flare Green M203", "FlareGreen_M203"],
			["Flare Red M203", "FlareRed_M203"],
			["Flare Yellow M203", "FlareYellow_M203"]
		];
	},
	pistol: function() {
		return [
			["MakarovSD", "MakarovSD"],
			["Makarov", "Makarov"],
			["M1911", "Colt1911"],
			["Revolver", "revolver_EP1"],
			["M9", "M9"],
			["M9 SD", "M9SD"],
			["Glock 17", "glock17_EP1"],
			["Sa-61", "Sa61_EP1"],
			["UZI", "UZI_EP1"]
		];
	},
	backpackitem: function() {
		return [
			["Patrol Backpack", "DZ_Patrol_Pack_EP1"],
			["Assault Backpack", "DZ_Assault_Pack_EP1"],
			["Czech Backpack", "DZ_CivilBackpack_EP1"],
			["Czech VestPuch", "DZ_Czech_Vest_Puch"],
			["TKAssault_Pack", "DZ_TK_Assault_Pack_EP1"],
			["Alice Backpack", "DZ_ALICE_Pack_EP1"],
			["British ACU", "DZ_British_ACU"],
			["Coyote Backpack", "DZ_Backpack_EP1"]
		];
	},
	binocular: function() {
		return [
			["Range Finder", "Binocular_Vector"],
			["Night Vision", "NVGoggles"],
			["Binoculars", "Binocular"]
		];
	},
	toolbelt: function() {
		return [
			["Map", "ItemMap"],
			["Watch", "ItemWatch"],
			["Compas", "ItemCompass"],
			["GPS", "ItemGPS"],
			["Knife", "ItemKnife"],
			["Matches", "ItemMatchbox"],
			["Flashlight", "ItemFlashlight"],
			["Military Flashlight", "ItemFlashlightRed"],
			["Hatchet", "ItemHatchet"],
			["Crowbar", "ItemCrowbar"],
			["Etrench Tool", "ItemEtool"],
			["Toolbox", "ItemToolbox"],
			["Hatchet", "ItemHatchet"],
			["Machete", "ItemMachete"],
			["MeleeBaseBallBat", "MeleeBaseBallBat"],
			["ItemShovel", "ItemShovel"],
			["Toolbox", "ItemToolbox"]
		];
	},
	backpack: function() {
		var backpackItems = [];
		backpackItems = backpackItems.concat(ItemList.primary());
		backpackItems = backpackItems.concat(ItemList.pistol());
		backpackItems = backpackItems.concat(ItemList.secondary());
		backpackItems = backpackItems.concat(ItemList.binoculars());
		backpackItems = backpackItems.concat(ItemList.inventory());
		backpackItems = backpackItems.concat(ItemList.toolbelt());
		return backpackItems;
	},
	inventory: function() {
		return [
			["Baked Beans", "FoodCanBakedBeans"],
			["Sardines", "FoodCanSardines"],
			["Sardines", "FoodNutmix"],
			["Sardines", "ItemSodaDrwaste"],
			["Sardines", "ItemSodaLvg"],
			["Sardines", "ItemSodaRabbit"],
			["Pasta", "FoodCanPasta"],
			["Coke", "ItemSodaCoke"],
			["Pepsi", "ItemSodaPepsi"],
			["Waterbottle", "ItemWaterBottle"],
			["Raw Steak", "FoodSteakRaw"],
			["Cooked Steak", "FoodSteakCooked"],
			["Painkillers", "ItemPainkiller"],
			["Heatpack", "ItemHeatPack"],
			["Morphine", "ItemMorphine"],
			["Epinephrine", "ItemEpinephrine"],
			["Antibiotic", "ItemAntibiotic"],
			["Bloodbag", "ItemBloodbag"],
			["Road Flare", "HandRoadFlare"],
			["Chemlight Green", "HandChemGreen"],
			["Chemlight Blue", "HandChemBlue"],
			["Chemlight Red", "HandChemRed"],
			["M67 Frag Grenade", "HandGrenade_west"],
			["Survivor Clothing", "Skin_Survivor2_DZ"],
			["Camo Clothing", "Skin_Camo1_DZ"],
			["Ghillie Clothing", "Skin_Sniper1_DZ"],
			["Skin_Soldier1_DZ", "Skin_Soldier1_DZ"],			
			["Tent", "ItemTent"],
			["Satchel Charge", "PipeBomb"],
			["Sandbag", "ItemSandbag"],
			["Tank Trap", "ItemTankTrap"],
			["Wire", "ItemWire"],
			["Jerrycan", "ItemJerrycan"],
			["Skin_Soldier1_DZ", "Skin_Soldier1_DZ"],			
			["ItemFuelcan", "ItemFuelcan"],
			["Wood Pile", "PartWoodPile"],
			["Scrapmetal", "PartGeneric"],
			["Glass", "PartGlass"],
			["Wheel", "PartWheel"],
			["Fueltank", "PartFueltank"],
			["Engine Tank", "PartEngine"],
			["Helicopter Rotor", "PartVRotor"]
		];
	}
}

// Inventory Editor class
var InventoryEditor = {
	Init: function() {
		$("#edititem").live("change", this.DropdownChanged);
		$('.EditableItem').live('click', this.AlertItem);
		$(".SwitchInventoryItem").live("click", this.ItemSwitched);
	},
	CurrentSlot: {},
	FindItem: function(Type, Item) {
		for (x in ItemList[Type]()) {
			var itemType = ItemList[Type]()[x][1];
			if (typeof(itemType) !== 'string') {
				if (itemType[0] == Item) { return itemType; }
			} else {
				if (itemType == Item) { return itemType; }
			}
		}
	},
	DrawITemList: function(array) {},
	ItemSwitched: function() {
		var element = $(this);
		var newItem = element.data('value');
		$(".selectedItem", "#invedit-area").removeClass("selectedItem")
		$(element).addClass("selectedItem");
		if (!InventoryEditor.CurrentSlot.isEmpty) {
			InventoryEditor.SwitchItem(InventoryEditor.CurrentSlot.Element, InventoryEditor.CurrentSlot.Type, newItem);
		} else {
			InventoryEditor.AddItem(InventoryEditor.CurrentSlot.Element, InventoryEditor.CurrentSlot.Type, newItem);
		}
	},
	InventoryData: '',
	BackpackData: '',
	ModelData: '',
	DrawEditItem: function(element) {
		$(".selectedItem", "#gear_player").removeClass("selectedItem")
		$(element).addClass("selectedItem");
		
		var Type = $(element).data('type');
		var isEmpty = $("img", element).attr('title') == "" || $("img", element).attr('title') == undefined;
		
		InventoryEditor.CurrentSlot.isEmpty = isEmpty;
		InventoryEditor.CurrentSlot.Type = Type;
		InventoryEditor.CurrentSlot.Slot = $(element).data('slot');
		InventoryEditor.CurrentSlot.Element = $(element);
		
		$("#invedit-area").html("");
		
		var selectBox = $('<select type="text" id="edititem" data-isempty="' + isEmpty + '" data-type="' + Type + '"></select>');
		var found = false;
		var selectedItemValue = '';

		for (x in ItemList[Type]()) {
			if (x == "remove") { continue; }
			var item = ItemList[Type]()[x];
			var val = item[1];
			if (typeof item[1] !== 'string' ) { val = item[1][0]; }
			var geardiv = $("<div></div>").addClass("gear_slot").attr("style", "width: 47px; height: 47px; float: left; position: static; display: inline;");
			var folder = "thumbs";
			if (Type == "model") { folder = "models"; }
			var gearimg = $("<img>").attr("src", "images/" + folder + "/" + val + ".png").attr("style", "width: 47px; height: 47px;").addClass("SwitchInventoryItem").data("value", val).attr("alt", item[0]).attr("title", item[0]);
			if ($("img", element).attr("alt") == val) {
				found = true;
				selectedItemValue = val;
				geardiv.addClass("selectedItem");
			}
			geardiv.append(gearimg);
			$("#invedit-area").append(geardiv);
			selectBox.append('<option value="' + val + '">' + item[0] + '</option>');
		}
		
		if ((Type == "backpackitem" && !found ) || Type != "backpackitem" || Type != "model") { selectBox.append('<option value="">Empty</option>') }
		
		$(selectBox).val(selectedItemValue);
		
		if (Type != "model" && Type != "backpackitem") {
			var emptydiv = $("<div></div>").addClass("gear_slot").attr("style", "width: 47px; height: 47px; float: left; position: static; display: inline;");
			var emptyimg = $("<img>").attr("src", "images/gear/grenade.png").attr("style", "width: 47px; height: 47px;").addClass("SwitchInventoryItem").data("value", "").attr("alt", "Empty").attr("title", "Empty");
			if (found == false) { emptyimg.addClass("selectedItem"); }
			emptydiv.append(emptyimg);
			$("#invedit-area").prepend(emptydiv);
		}
		$("#invedit-area").fadeIn(1000);
	},
	FindItemInArray: function(ItemName, ItemArray) {
		for (x in ItemArray) {
			if (ItemArray[x] == ItemName) { return x; }
		}
	},
	ResetCharacterInventory: function() {},
	AddItem: function(Element, Type, NewItem) {
		var nextIndex = 0;

		if (Type == "inventory") {
			nextIndex = $('img[title=""]', '.gear_slot[data-type="' + Type + '"]').eq(0).parent().index();
			Element = $('img[title=""]', '.gear_slot[data-type="' + Type + '"]').eq(0).parent();
		} else if (Type == "backpack") {
			nextIndex = $(".gear_slot img", ".gear_backpack").last().parent().index() + 1;
			Element = $(".gear_slot", ".gear_backpack").eq(nextIndex);
		} else if (Type == "secondary") {
			nextIndex = $('img[title=""]', '.gear_slot[data-type="' + Type + '"]').eq(0).parent().index('.gear_slot[data-type="' + Type + '"]');
			Element = $('img[title=""]', '.gear_slot[data-type="' + Type + '"]').eq(0).parent();
		}
		
		console.log("Next Index = " + nextIndex);
		InventoryEditor.SwitchItem(Element, Type, NewItem, nextIndex);
	},
	SwitchItem: function(Element, Type, NewItem, Slot) {
		var remove = NewItem == "";
		var ImgElement = $("img", Element);
		
		if (Type == "backpack" && ImgElement.length == 0) {
			ImgElement = $("<img>");
			ImgElement.attr('style', 'max-width: 43px; max-height: 43px;');
			Element.append(ImgElement);
		}

		var current = ImgElement.attr('title');
		var folder = "thumbs";
		if (Type == "model") { folder = "models"; }
		ImgElement.attr('title', NewItem).attr('alt', NewItem);
		ImgElement.attr('src', "images/" + folder + "/" + NewItem + ".png");
		var item = InventoryEditor.FindItem(Type, NewItem);

		switch (Type)
		{
			case 'primary':
				var foundAtIndex = InventoryEditor.FindItemInArray(current, InventoryEditor.InventoryData[0]);


				
				if (remove) {
					InventoryEditor.InventoryData[0] = RemoveAtElement(InventoryEditor.InventoryData[0], foundAtIndex);
					ImgElement.attr('src', "images/gear/rifle.png").attr('title', '').attr('alt', '');
				} else {
					if (foundAtIndex != undefined) {
						InventoryEditor.InventoryData[0][foundAtIndex] = item;
					} else {
						InventoryEditor.InventoryData[0].push(item);
					}
				}
				break;
				
			case 'secondary':
				var foundAtIndex = InventoryEditor.FindItemInArray(current, InventoryEditor.InventoryData[0]);
				
				if (remove) {
					InventoryEditor.InventoryData[0] = RemoveAtElement(InventoryEditor.InventoryData[0], foundAtIndex);
					ImgElement.attr('src', "images/gear/smallammo.png").attr('title', '').attr('alt', '');
				} else {
					if (foundAtIndex != undefined) {
						InventoryEditor.InventoryData[0][foundAtIndex] = item;
					} else {
						InventoryEditor.InventoryData[0].push(item);
					}
				}
				break;
				
			case 'toolbelt':
				var foundAtIndex = InventoryEditor.FindItemInArray(current, InventoryEditor.InventoryData[0]);
				
				if (remove) {
					InventoryEditor.InventoryData[0] = RemoveAtElement(InventoryEditor.InventoryData[0], foundAtIndex);
					ImgElement.remove;
				} else {
					if (foundAtIndex != undefined) {
						InventoryEditor.InventoryData[0][foundAtIndex] = item;
					} else {
						InventoryEditor.InventoryData[0].push(item);
					}
				}
				break;
				
			case 'binocular':
				var foundAtIndex = InventoryEditor.FindItemInArray(current, InventoryEditor.InventoryData[0]);
				
				if (remove) {
					InventoryEditor.InventoryData[0] = RemoveAtElement(InventoryEditor.InventoryData[0], foundAtIndex);
					ImgElement.attr('src', "images/gear/binocular.png").attr('title', '').attr('alt', '');
				} else {
					if (foundAtIndex != undefined) {
						InventoryEditor.InventoryData[0][foundAtIndex] = item;
					} else {
						InventoryEditor.InventoryData[0].push(item);
					}
				}
				break;
				
			case 'pistol':
				var foundAtIndex = InventoryEditor.FindItemInArray(current, InventoryEditor.InventoryData[0]);
				
				if (remove) {
					InventoryEditor.InventoryData[0] = RemoveAtElement(InventoryEditor.InventoryData[0], foundAtIndex);
					ImgElement.attr('src', "images/gear/pistol.png").attr('title', '').attr('alt', '');
				} else {
					if (foundAtIndex != undefined) {
						InventoryEditor.InventoryData[0][foundAtIndex] = item;
					} else {
						InventoryEditor.InventoryData[0].push(item);
					}
				}
				break;
				
			case 'backpack':
				var foundAtIndex = InventoryEditor.FindItemInArray(current, InventoryEditor.BackpackData[2][0]);
				
				if (remove) {
					InventoryEditor.BackpackData[2][0] = RemoveAtElement(InventoryEditor.BackpackData[2][0], foundAtIndex);
					ImgElement.attr('src', "images/gear/pistol.png").attr('title', '').attr('alt', '');
				} else {
					if (!InventoryEditor.CurrentSlot.isEmpty) {
						InventoryEditor.BackpackData[2][0][foundAtIndex] = item;
					} else {
						InventoryEditor.BackpackData[2][0].push(item);
						InventoryEditor.BackpackData[2][1].push(1);
					}
				}
				break;

			case 'backpackitem':
				if (!remove) {
					InventoryEditor.BackpackData[0] = item;
				}
				break;
				
			case 'inventory':
				var foundAtIndex = InventoryEditor.FindItemInArray(current, InventoryEditor.InventoryData[1]);
				
				if (remove) {
					InventoryEditor.InventoryData[1] = RemoveAtElement(InventoryEditor.InventoryData[1], $('img[title=""]', '.gear_slot[data-type="' + Type + '"]').eq(0).parent().index('[data-type="' + Type + '"]'));
					ImgElement.attr('src', "images/gear/grenade.png").attr('title', '').attr('alt', '');
				} else {
					if (InventoryEditor.CurrentSlot.isEmpty) {
						InventoryEditor.InventoryData[1].push(item);
					} else {
						InventoryEditor.InventoryData[1][foundAtIndex] = item;
					}
				}
				break;
				
			case 'model':
				InventoryEditor.ModelData = item;
				break;
		}

		ImgElement.click();

		InventoryEditor.InventoryData = InventoryEditor.TidyArrays(InventoryEditor.InventoryData);
		InventoryEditor.BackpackData = InventoryEditor.TidyArrays(InventoryEditor.BackpackData);

		$("#invedit-inventory").html(JSON.stringify(InventoryEditor.InventoryData));
		$("#invedit-backpack").html(JSON.stringify(InventoryEditor.BackpackData));
		$("#invedit-model").html(InventoryEditor.ModelData);
	},
	AlertItem: function() {
		InventoryEditor.DrawEditItem($(this));
	},
	TidyArrays: function(array) {
		for (x in array) {
			var currentArray = array[x];
			if (typeof(currentArray) !== 'string') {
				array[x] = InventoryEditor.TidyArrays(currentArray);
			} else {
				if (currentArray == null) {
					array[x] = InventoryEditor.RemoveAtElement(array, x);
					console.log("Removed a null")
				}
			}
		}
		return array;
	}
};

// Additional functions
function RemoveAtElement(array, i) {
	var start = array.splice(0,  i );
	var end = array.splice(1, array.length);
	return start.concat(end);
}