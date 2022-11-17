const gatos: string[] = [
    'lora',
    'logan',
    'lebeaw'
]

function exibeGatos(gatos: string[]){
    return `OS gatos são: ${gatos.join(', ')}`
}

exibeGatos(gatos);
