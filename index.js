#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';
import gradient from 'gradient-string';
import open from 'open';

const titleColor = 'silver';
const argColor = 'cyan';
const owlColor = 'white';

await open('https://thibaut-fourneaux.be');
const data = {

    nameLine1: gradient([
            //owl ear
        {color: 'coral', pos: 0.05},
        {color: 'salmon', pos: 0.06},
            // alias
        {color: 'salmon', pos: 0.14},
        {color: titleColor, pos: 0.15},        
        {color: titleColor, pos: 0.25},        
        {color: 'darksalmon', pos: 0.26},
            // me
        {color: 'salmon', pos: 0.37},
        {color: titleColor, pos: 0.38},        
        {color: titleColor, pos: 0.4},         
        {color: 'darksalmon', pos: 0.41},
            // line
        {color: 'darksalmon', pos: 0.6},
        {color: 'sandybrown', pos: 0.9},
    ])("   ,___,      ┌ alia ──┐   ┌ me ───────────────┐"),

    nameLine2: gradient([
            // owl head
        {color: 'coral', pos: 0},
        {color: owlColor, pos: 0.03},   
        {color: owlColor, pos: 0.04},  
        {color: owlColor, pos: 0.045}, 
        {color: 'salmon', pos: 0.048},  
            // mtkuma 
        {color: 'salmon', pos: 0.07},   
        {color: argColor, pos: 0.075},    
        {color: argColor, pos: 0.23},  
        {color: 'darksalmon', pos: 0.24},   
            // thibaut-fourneaux
        {color: 'salmon', pos: 0.29},  
        {color: argColor, pos: 0.3},  
        {color: argColor, pos: 0.9},  
        {color: 'sandybrown', pos: 0.91},
    ])("   [O.o]      │ mtkuma │ @ │ thibaut-fourneaux │ .be"),

    nameLine3: gradient([
            // owl body
        {color: 'coral', pos: 0.02},
        {color: 'salmon', pos: 0.05},
            // my website 
        {color: 'darksalmon', pos: 0.18},
        {color: titleColor, pos: 0.2},
        {color: titleColor, pos: 0.48},
        {color: 'salmon', pos: 0.49},
            // line
        {color: 'sandybrown', pos: 1},
    ])("   /)__)      │            └ my website ─────────────┤"),

    nameLine4: gradient([
        // branch
        {color: 'rosybrown', pos: 0.05},
        {color: 'rosybrown', pos: 0.07},
        {color: owlColor, pos: 0.08},
        {color: 'rosybrown', pos: 0.1},
        {color: 'rosybrown', pos: 0.13},
        {color: owlColor, pos: 0.14},
        {color: 'rosybrown', pos: 0.17},
        // my email
        {color: 'darksalmon', pos: 0.19},
        {color: titleColor, pos: 0.2},
        {color: titleColor, pos: 0.33},
        {color: 'salmon', pos: 0.34},
        {color: 'sandybrown', pos: 0.8},
        {color: 'darkorange', pos: 1},
    ])("────\"──\"─     └ my email ────────────────────────────┘"),
        
    work: chalk.yellow('Backend developer junior'),

    github: gradient([
        {color: 'white', pos: 0},
        {color: 'white', pos: 0.15},
        {color: 'cyan', pos: 0.16},
    ])('GitHub: https://github.com/fourneauxthibaut'),

    Linkedin: gradient([
        {color: 'white', pos: 0},
        {color: 'white', pos: 0.15},
        {color: 'cyan', pos: 0.16},
    ])('LinkedIn: https://www.linkedin.com/in/fourneaux-thibaut'),

    Website: gradient([
        {color: 'white', pos: 0},
        {color: 'white', pos: 0.2},
        {color: 'cyan', pos: 0.21},
    ])('Website: https://thibaut-fourneaux.be'),
};

const NEWLINE = '\n';
const EMPTYLINE = '';

console.log(
    chalk.white(
        boxen(
            [
                `${data.nameLine1} `,
                `${data.nameLine2} `,
                `${data.nameLine3} `,
                `${data.nameLine4} `,
                EMPTYLINE,
                `${data.work}`,
                NEWLINE,
                `${data.github}`,
                EMPTYLINE,
                `${data.Linkedin}`,
                EMPTYLINE,
                `${data.Website}`,
            ].join(NEWLINE),
            {
                title: 'npx MtKuma',
                titleAlignment: 'right',
                padding: 3,
                margin: 3,
                borderStyle: 'bold',
                align: 'left',
            },
        ),
    ),
);