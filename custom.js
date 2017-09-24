// Custom Block Definition
Blockly.Blocks['custome_block'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("Print Message to Console");
        this.setColour(230);
        this.setTooltip("This will print message on console");
        this.setHelpUrl("https://developers.google.com");
    }
};

// Generator Stub for Custom Block
Blockly.JavaScript['custome_block'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    console.log("Printing to the Console !");

};

// Generate JavaScript code and run it.
function runCode() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }
}
