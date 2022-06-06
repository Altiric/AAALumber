const settings = {
    fileName    : Player.Serial() + '.jack',
    menu    : {
        title   : "Altiric's Amazing Arborist v0.9",
        serial  : 10000,
        version : 0.9,
        width   : 300,
        height  : 250,
    },
    color   : {
        label   : '0x008E',
        value   : '0x0037',
        green   : {
            light: '0x0046', 
            norm: '0x0044', 
            dark: '0x00A7'
        },
        blue    : {
            light: '0x0064', 
            norm: '0x0062', 
            dark: '0x00C5'
        },
        red     : {
            light: '0x0028', 
            norm: '0x0026', 
            dark: '0x0089'
        },
        orange  : {
            light: '0x002D', 
            norm: '0x002B', 
            dark: '0x008E'
        },
        purple  : {
            light: '0x001E', 
            norm: '0x0017', 
            dark: '0x007A'
        },
        yellow  : {
            light: '0x0037', 
            norm: '0x0035', 
            dark: '0x0098'
        },
        white   : {
            light: '0x7FA',  
            norm: '0x7EE',  
            dark: '0x7E2' 
        }
    }
};

/*
 * Global Variables
 */
const menu = Orion.CreateCustomGump(settings.menu.serial);
var user = loadUser();

function test(){
    menu.Clear();
    display();
}


function display(){
    menu.SetCallback('process');
    menu.AddResizepic(25, 25, 0x23F0, settings.menu.width, settings.menu.height, 10001);
    menu.AddResizepic((settings.menu.width-30), 45, 0x254E, 75, 115);
    menu.AddResizepic(0, 15, 0x24B8, (settings.menu.width+40), 30);
    menu.AddText(60, 20, settings.color.white.light, "<H3>" +settings.menu.title +"</H3>", 500, 10001);                
    menu.AddResizepic((settings.menu.width-175), (settings.menu.height+10), 0x254E, 225, 25);
    menu.AddText((settings.menu.width-160), (settings.menu.height+15), settings.color.yellow.norm, Shared.GetVar('action', "Loading..."), 250, 10017);
    
    menu.AddPage(0);
        menu.AddButton(30006, settings.menu.width, 15, 0x82E, 0x82F, 0x82E, 0x0000);
        menu.AddTooltip("Minimize");
        menu.AddText(30, 50, '0', '<img src="http://storage.googleapis.com/logo-aaalumber/logo.png" height = 150 wiedth=150>');
        
        menu.Update();
    menu.AddPage(1);
        menu.AddText(35, 50, settings.color.white.light, "");
        
        menu.Update();
}

function loadUser(){
    var file = Orion.NewFile();
    file.Open(settings.fileName);
    var pData = file.ReadAll();
    file.Close();
    if(pData.length)
        return JSON.parse(pData);
    var pData = {
        useitemdelay    : 1200,
        moveitemdelay   : 1200,
        name            : Player.Name(),
        location        : {x: Player.X(), y: Player.Y(), z: Player.Z()}
    }
    return pData;
}
